import { useCallback } from "react";
import { useEffect, useReducer } from "react";
import { ACTIONS } from "../constants";
import { helperFunctions } from "../helperFunctions";
import { Server } from "../Server";

const server = new Server();

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return [...todos, action.payload];

    case ACTIONS.DELETE:
      return todos.filter((todo) => todo.id !== action.payload);

    case ACTIONS.UPDATE:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        } else {
          return todo;
        }
      });

    default:
      return todos;
  }
};

export const useTodoAppState = () => {
  const [todos, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    server.getDatabase().then((todos) => {
      if (todos) {
        todos.forEach?.((todo) => {
          dispatch({
            type: ACTIONS.ADD,
            payload: todo,
          });
        });
      }
    });
  }, []);

  const addTodo = (todos) => {
    return server.createTodo(todos).then(() => {
      helperFunctions.convertToList(todos).forEach((todo) => {
        dispatch({
          type: ACTIONS.ADD,
          payload: todo,
        });
      });
    });
  };

  const deleteTodo = (todoIds) => {
    return server.deleteTodo(todoIds).then(() => {
      helperFunctions.convertToList(todoIds).forEach((id) => {
        dispatch({
          type: ACTIONS.DELETE,
          payload: id,
        });
      });
    });
  };

  const updateTodo = (todos) => {
    return server.updateTodo(todos).then(() => {
      helperFunctions.convertToList(todos).forEach((todo) => {
        dispatch({
          type: ACTIONS.UPDATE,
          payload: todo,
        });
      });
    });
  };

  const onAction = useCallback((action) => {
    switch (action.type) {
      case ACTIONS.ADD:
        return addTodo(action.payload);

      case ACTIONS.UPDATE:
        return updateTodo(action.payload);

      case ACTIONS.DELETE:
        return deleteTodo(action.payload);

      default:
        break;
    }
  }, []);

  const findTodoById = useCallback(
    (id) => {
      return todos.find((todo) => todo.id === id);
    },
    [todos]
  );

  return [todos, findTodoById, onAction];
};

import { useCallback, useRef } from "react";
import { useEffect, useReducer } from "react";
import { useSnackbar } from "../components/SnackbarProvider";
import { ACTIONS } from "../constants";
import { helperFunctions } from "../helperFunctions";
import { Server } from "../Server";

const server = new Server();

const sortTodos = (todo1, todo2) => {
  return todo1.id - todo2.id;
};

const reducer = (todoState, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return todoState.concat(action.payload.todos);

    case ACTIONS.DELETE:
      return todoState.filter(
        (todo) => !action.payload.todoIds.includes(todo.id)
      );

    case ACTIONS.UPDATE:
      const updatedTodoIds = action.payload.updatedTodos.map((todo) => todo.id);
      return todoState
        .filter((todo) => !updatedTodoIds.includes(todo.id))
        .concat(action.payload.updatedTodos)
        .sort(sortTodos);

    default:
      return todoState;
  }
};

const useTodoAppState = () => {
  const [todoState, dispatch] = useReducer(reducer, []);

  const showSnackbar = useSnackbar();
  const showSnackbarRef = useRef();
  showSnackbarRef.current = showSnackbar;

  useEffect(() => {
    server
      .getDatabase()
      .then((todoList) => {
        dispatch({
          type: ACTIONS.ADD,
          payload: { todos: todoList.sort(sortTodos) },
        });
      })
      .catch(showSnackbarRef.current);
  }, []);

  const addTodo = (todos) => {
    return server.createTodo(todos).then(() => {
      const todoList = helperFunctions.convertToList(todos);
      dispatch({
        type: ACTIONS.ADD,
        payload: { todos: todoList },
      });
    });
  };

  const deleteTodo = (todoIds) => {
    return server.deleteTodo(todoIds).then(() => {
      const todoIdsList = helperFunctions.convertToList(todoIds);
      dispatch({
        type: ACTIONS.DELETE,
        payload: { todoIds: todoIdsList },
      });
    });
  };

  const updateTodo = (updatedTodos) => {
    return server.updateTodo(updatedTodos).then(() => {
      const updatedTodosList = helperFunctions.convertToList(updatedTodos);
      dispatch({
        type: ACTIONS.UPDATE,
        payload: { updatedTodos: updatedTodosList },
      });
    });
  };

  const onTodoAction = useCallback((action) => {
    switch (action.type) {
      case ACTIONS.ADD:
        return addTodo(action.payload.todo);

      case ACTIONS.UPDATE:
        return updateTodo(action.payload.updatedTodo);

      case ACTIONS.DELETE:
        return deleteTodo(action.payload.id);

      default:
        break;
    }
  }, []);

  const findTodoById = useCallback(
    (id) => {
      return todoState.find((todo) => todo.id === id);
    },
    [todoState]
  );

  return { todoState, findTodoById, onTodoAction };
};

export default useTodoAppState;

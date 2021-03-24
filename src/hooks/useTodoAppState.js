import { useCallback, useContext } from "react";
import { useEffect, useReducer } from "react";
import { ACTIONS } from "../constants";
import SnackbarContext from "../context/SnackbarContext";
import { helperFunctions } from "../helperFunctions";
import { Server } from "../Server";

const server = new Server();

const sortTodos = (todo1, todo2) => {
  return todo1.id - todo2.id;
};

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return todos.concat(action.payload.todos);

    case ACTIONS.DELETE:
      return todos.filter((todo) => !action.payload.todoIds.includes(todo.id));

    case ACTIONS.UPDATE:
      const updatedTodoIds = action.payload.updatedTodos.map((todo) => todo.id);
      return todos
        .filter((todo) => !updatedTodoIds.includes(todo.id))
        .concat(action.payload.updatedTodos)
        .sort(sortTodos);

    default:
      return todos;
  }
};

const useTodoAppState = () => {
  const [todos, dispatch] = useReducer(reducer, []);

  const handleSnackbar = useContext(SnackbarContext);

  useEffect(() => {
    server
      .getDatabase()
      .then((todoList) => {
        dispatch({
          type: ACTIONS.ADD,
          payload: { todos: todoList.sort(sortTodos) },
        });
      })
      .catch(handleSnackbar);
    //DOUBT DOUBT
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
      return todos.find((todo) => todo.id === id);
    },
    [todos]
  );

  return [todos, findTodoById, onTodoAction];
};

export default useTodoAppState;

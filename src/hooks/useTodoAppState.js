import { useCallback, useRef, useEffect, useReducer, useState } from "react";

import { useSnackbar } from "../components/SnackbarProvider";
import { server } from "../Server";

import { ACTIONS } from "../constants";
import { helperFunctions } from "../helperFunctions";

const sortTodos = (todo1, todo2) => todo1.id - todo2.id;

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
  const [selectedTodoIds, setSelectedTodoIds] = useState([]);

  const showSnackbar = useSnackbar();
  const showSnackbarRef = useRef();
  showSnackbarRef.current = showSnackbar;

  useEffect(() => {
    server
      .getTodo()
      .then((todoList) => {
        dispatch({
          type: ACTIONS.ADD,
          payload: { todos: todoList.sort(sortTodos) },
        });
      })
      .catch(showSnackbarRef.current);
  }, []);

  const findTodoById = useCallback(
    (id) => todoState.find((todo) => todo.id === id),
    [todoState]
  );

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

  const toggleSelectedTodo = useCallback((id) => {
    setSelectedTodoIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((todoId) => todoId !== id);
      } else {
        return prev.concat(id);
      }
    });
  }, []);

  const resetSelectedTodoIds = useCallback(() => {
    setSelectedTodoIds([]);
  }, []);

  const onTodoAction = useCallback(
    (action) => {
      switch (action.type) {
        case ACTIONS.ADD:
          return addTodo(action.payload.todo);

        case ACTIONS.UPDATE:
          return updateTodo(action.payload.updatedTodo);

        case ACTIONS.DELETE:
          return deleteTodo(action.payload.id);

        case ACTIONS.SET_ISCOMPLETED:
          const isCompleted = action.payload.isCompleted;
          const updatedTodos = action.payload.ids
            .map(findTodoById)
            .map((todo) => ({ ...todo, isCompleted }));
          return updateTodo(updatedTodos);

        case ACTIONS.TOGGLE_SELECTED_TODO:
          return toggleSelectedTodo(action.payload.id);

        case ACTIONS.RESET_SELECTED_TODOS:
          return resetSelectedTodoIds();

        default:
          break;
      }
    },
    [findTodoById, toggleSelectedTodo, resetSelectedTodoIds]
  );

  return { todoState, onTodoAction, selectedTodoIds };
};

export { useTodoAppState };

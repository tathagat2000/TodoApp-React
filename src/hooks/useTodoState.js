import { useCallback, useRef, useEffect, useReducer, useState } from "react";
import _castArray from "lodash/castArray";

import { useSnackbarContext } from "../components/SnackbarProvider";
import { server } from "../Server";

import { ACTIONS } from "../constants";

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

const useTodoState = () => {
  const [todoState, dispatch] = useReducer(reducer, []);
  const [selectedTodoIds, setSelectedTodoIds] = useState([]);

  const showSnackbar = useSnackbarContext();
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

  const onTodoAction = useCallback(
    (action) => {
      switch (action.type) {
        case ACTIONS.ADD: {
          const todos = action.payload.todo;
          return server.createTodo(todos).then(() => {
            const todoList = _castArray(todos);
            dispatch({
              type: ACTIONS.ADD,
              payload: { todos: todoList },
            });
          });
        }

        case ACTIONS.UPDATE: {
          const updatedTodos = action.payload.updatedTodo;
          return server.updateTodo(updatedTodos).then(() => {
            const updatedTodosList = _castArray(updatedTodos);
            dispatch({
              type: ACTIONS.UPDATE,
              payload: { updatedTodos: updatedTodosList },
            });
            //DOUBT
          });
        }

        case ACTIONS.DELETE: {
          const todoIds = action.payload.id;
          return server.deleteTodo(todoIds).then(() => {
            const todoIdsList = _castArray(todoIds);
            dispatch({
              type: ACTIONS.DELETE,
              payload: { todoIds: todoIdsList },
            });
          });
        }

        case ACTIONS.SET_ISCOMPLETED: {
          const isCompleted = action.payload.isCompleted;
          const updatedTodos = action.payload.ids
            .map(findTodoById)
            .map((todo) => ({ ...todo, isCompleted }));

          return server.updateTodo(updatedTodos).then(() => {
            const updatedTodosList = _castArray(updatedTodos);
            dispatch({
              type: ACTIONS.UPDATE,
              payload: { updatedTodos: updatedTodosList },
            });
          });
        }

        case ACTIONS.TOGGLE_SELECTED_TODO: {
          const id = action.payload.id;
          return setSelectedTodoIds((prev) => {
            if (prev.includes(id)) {
              return prev.filter((todoId) => todoId !== id);
            } else {
              return prev.concat(id);
            }
          });
        }

        case ACTIONS.RESET_SELECTED_TODOS: {
          return setSelectedTodoIds([]);
        }

        default:
          break;
      }
    },
    [findTodoById]
  );

  return { todoState, onTodoAction, selectedTodoIds };
};

export { useTodoState };

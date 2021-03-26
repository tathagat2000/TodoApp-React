import React, { useCallback, useState } from "react";

import { TodoForm } from "./TodoForm";

import { useSnackbar } from "./SnackbarProvider";

import { ACTIONS, CATEGORY, URGENCY } from "../constants";

const INITIAL_TODO = {
  text: "",
  urgency: URGENCY.LOW,
  category: CATEGORY.PERSONAL,
};

const getCurrentTime = () =>
  new Date().toLocaleDateString() + ", " + new Date().toLocaleTimeString();

const createTodoObject = (todo) => ({
  ...todo,
  id: new Date().valueOf(),
  isCompleted: false,
  time: getCurrentTime(),
});

const TodoFormContainer = React.memo(({ onTodoAction }) => {
  const [todo, setTodo] = useState(INITIAL_TODO);
  const showSnackbar = useSnackbar();

  const handleKeyPress = (event) => {
    const enterKey = event.keyCode || event.which || 0;
    if (enterKey === 13 && todo.text) {
      const todoObject = createTodoObject(todo);
      onTodoAction({
        type: ACTIONS.ADD,
        payload: { todo: todoObject },
      })
        .then(() => {
          setTodo(INITIAL_TODO);
        })
        .catch(showSnackbar);
    }
  };

  const updateState = useCallback((event) => {
    setTodo((prevTodo) => ({
      ...prevTodo,
      [event.target.dataset.type]: event.target.value,
    }));
  }, []);

  return (
    <>
      <div className="create-todo curve" onKeyPress={handleKeyPress}>
        <div className="create-text">Create Todo</div>
        <TodoForm onChange={updateState} data={todo} />
      </div>
    </>
  );
});

export { TodoFormContainer };

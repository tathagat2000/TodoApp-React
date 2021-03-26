import React, { useCallback, useState } from "react";

import { useSnackbar } from "./SnackbarProvider";

import { ACTIONS, CATEGORY, URGENCY, NAMES } from "../constants";
import { helperFunctions } from "../helperFunctions";
import { TodoForm } from "./TodoForm";

const INITIAL_TODO = {
  [NAMES.TEXT]: "",
  [NAMES.URGENCY]: URGENCY.LOW,
  [NAMES.CATEGORY]: CATEGORY.PERSONAL,
};

const createTodoObject = (todo) => ({
  ...todo,
  id: new Date().valueOf(),
  isCompleted: false,
  [NAMES.TIME]: helperFunctions.getTime(),
});

const TodoFormPanel = React.memo(({ onTodoAction }) => {
  const [todo, setTodo] = useState(INITIAL_TODO);
  const showSnackbar = useSnackbar();

  const handleKeyPress = (event) => {
    const enterKey = event.keyCode || event.which || 0;
    if (enterKey === 13 && todo[NAMES.TEXT]) {
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
      <div className="createTodo curve" onKeyPress={handleKeyPress}>
        <div className="createText">Create Todo</div>
        <TodoForm onChange={updateState} data={todo} />
      </div>
    </>
  );
});

export { TodoFormPanel };

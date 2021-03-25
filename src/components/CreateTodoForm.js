import React, { useCallback, useContext, useState } from "react";
import { ACTIONS, CATEGORY, URGENCY, NAMES } from "../constants";
import { helperFunctions } from "../helperFunctions";
import SnackbarContext from "../context/SnackbarContext";
import OptionList from "./OptionList";

const INITIAL_TODO = {
  [NAMES.TEXT]: "",
  [NAMES.URGENCY]: URGENCY.LOW,
  [NAMES.CATEGORY]: CATEGORY.PERSONAL,
};

const createTodoObject = (todo) => {
  return {
    ...todo,
    id: new Date().valueOf(),
    isCompleted: false,
    time: helperFunctions.getTime(),
  };
};

const CreateTodoForm = ({ onTodoAction }) => {
  const [todo, setTodo] = useState(INITIAL_TODO);
  const showSnackbar = useContext(SnackbarContext);

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
      <div className="createTodo colorAndRadius" onKeyPress={handleKeyPress}>
        <div className="createText">Create Todo</div>
        <input
          data-type={NAMES.TEXT}
          value={todo[NAMES.TEXT]}
          type="text"
          className="addTodo"
          placeholder="Add Your Todo..."
          onChange={updateState}
        />
        <div className="urgency">
          <p className="text">Urgency</p>
          <select
            value={todo[NAMES.URGENCY]}
            data-type={NAMES.URGENCY}
            className="selector"
            onChange={updateState}
          >
            <OptionList value={URGENCY} />
          </select>
        </div>
        <div className="category">
          <p className="text">Category</p>
          <select
            value={todo[NAMES.CATEGORY]}
            data-type={NAMES.CATEGORY}
            className="selector"
            onChange={updateState}
          >
            <OptionList value={CATEGORY} />
          </select>
        </div>
      </div>
    </>
  );
};

export default React.memo(CreateTodoForm);

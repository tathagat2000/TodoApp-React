import React, { useCallback, useContext, useReducer } from "react";
import { ACTIONS, CATEGORY, URGENCY, NAMES } from "../constants";
import { helperFunctions } from "../helperFunctions";
import SnackbarContext from "../context/SnackbarContext";
const initialTodo = {
  [NAMES.TEXT]: "",
  [NAMES.URGENCY]: URGENCY.LOW,
  [NAMES.CATEGORY]: CATEGORY.PERSONAL,
};

const reducer = (todo, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE:
      return { ...todo, [action.payload.type]: action.payload.value };

    case ACTIONS.RESET:
      return initialTodo;

    default:
      return todo;
  }
};

const createTodoObject = (todo) => {
  return {
    id: new Date().valueOf(),
    isCompleted: false,
    time: helperFunctions.getTime(),
    ...todo,
  };
};

const Option = React.memo(({ value }) => {
  return (
    <>
      {Object.entries(value).map(([key, value]) => {
        return (
          <option value={value} key={key}>
            {value}
          </option>
        );
      })}
    </>
  );
});

const CreateTodoForm = ({ onTodoAction }) => {
  const [todo, dispatch] = useReducer(reducer, initialTodo);
  const handleSnackbar = useContext(SnackbarContext);

  const handleKeyPress = (event) => {
    const enterKey = event.keyCode || event.which || 0;
    if (enterKey === 13 && todo.text) {
      const todoObject = createTodoObject(todo);
      onTodoAction({
        type: ACTIONS.ADD,
        payload: { todo: todoObject },
      })
        .then(() => {
          dispatch({ type: ACTIONS.RESET });
        })
        .catch(handleSnackbar);
    }
  };

  const updateState = useCallback((event) => {
    dispatch({
      type: ACTIONS.UPDATE,
      payload: {
        type: event.target.dataset.type,
        value: event.target.value,
      },
    });
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
            {<Option value={URGENCY} />}
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
            {<Option value={CATEGORY} />}
          </select>
        </div>
      </div>
    </>
  );
};

export default React.memo(CreateTodoForm);

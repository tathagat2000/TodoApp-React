import React, { useState } from "react";
import { ACTIONS, CATEGORY, NAMES, URGENCY } from "../constants";
import OptionList from "./OptionList";
import { useSnackbar } from "./SnackbarProvider";

const Modal = ({ todo, closeEditWindow, onTodoAction }) => {
  const [updatedTodo, setUpdatedTodo] = useState(todo);
  const showSnackbar = useSnackbar();

  const updateState = (event) => {
    setUpdatedTodo((prev) => ({
      ...prev,
      [event.target.dataset.type]: event.target.value,
    }));
  };

  const onCancel = () => {
    closeEditWindow();
  };

  const onSave = () => {
    onTodoAction({
      type: ACTIONS.UPDATE,
      payload: { updatedTodo },
    })
      .then(closeEditWindow)
      .catch(showSnackbar);
  };

  return (
    <div className="myModal">
      <div className="modalContent">
        <input
          data-type={NAMES.TEXT}
          type="text"
          className="addTodo"
          value={updatedTodo[NAMES.TEXT]}
          onChange={updateState}
        />
        <div className="urgency">
          <p className="text">Urgency</p>
          <select
            value={updatedTodo[NAMES.URGENCY]}
            data-type={NAMES.URGENCY}
            className="selector"
            onChange={updateState}
          >
            {<OptionList value={URGENCY} />}
          </select>
        </div>
        <div className="category">
          <p className="text">Category</p>
          <select
            value={updatedTodo[NAMES.CATEGORY]}
            data-type={NAMES.CATEGORY}
            className="selector"
            onChange={updateState}
          >
            {<OptionList value={CATEGORY} />}
          </select>
        </div>
        <div className="modalButtons">
          <button className="cancel" onClick={onCancel}>
            Cancel
          </button>
          <button className="save" onClick={onSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Modal);

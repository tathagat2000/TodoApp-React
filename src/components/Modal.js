import React, { useState } from "react";
import { ACTIONS, CATEGORY, NAMES, URGENCY } from "../constants";

const Option = ({ value }) => {
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
};
export const Modal = ({ todo, closeEditWindow, onAction }) => {
  const [updatedTodo, setUpdatedTodo] = useState(todo);

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
    onAction({
      type: ACTIONS.UPDATE,
      payload: updatedTodo,
    });
    closeEditWindow();
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
            {<Option value={URGENCY} />}
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
            {<Option value={CATEGORY} />}
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

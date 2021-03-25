import React, { useCallback, useState } from "react";

import { useSnackbar } from "./SnackbarProvider";

import { ACTIONS } from "../constants";
import { TodoForm } from "./TodoForm";

const Modal = React.memo(({ todo, closeEditWindow, onTodoAction }) => {
  const [updatedTodo, setUpdatedTodo] = useState(todo);
  const showSnackbar = useSnackbar();

  const updateState = useCallback((event) => {
    setUpdatedTodo((prev) => ({
      ...prev,
      [event.target.dataset.type]: event.target.value,
    }));
  }, []);

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
        <TodoForm onChange={updateState} todo={updatedTodo} />
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
});

export { Modal };

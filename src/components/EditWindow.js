import React, { useCallback, useState } from "react";

import { useSnackbarContext } from "./SnackbarProvider";

import { ACTIONS } from "../constants";
import { TodoForm } from "./TodoForm";

const EditWindow = React.memo(({ initialData, onClose, onTodoAction }) => {
  const [updatedTodo, setUpdatedTodo] = useState(initialData);
  const showSnackbar = useSnackbarContext();

  const updateState = useCallback((event) => {
    setUpdatedTodo((prev) => ({
      ...prev,
      [event.target.dataset.type]: event.target.value,
    }));
  }, []);

  const onSave = () => {
    onTodoAction({
      type: ACTIONS.UPDATE,
      payload: { updatedTodo },
    })
      .then(onClose)
      .catch(showSnackbar);
  };

  return (
    <>
      <TodoForm onChange={updateState} data={updatedTodo} />
      <div className="modal-buttons">
        <button className="cancel" onClick={onClose}>
          Cancel
        </button>
        <button className="save" onClick={onSave}>
          Save
        </button>
      </div>
    </>
  );
});

export { EditWindow };

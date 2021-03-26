import React, { useCallback, useState } from "react";

import { useSnackbar } from "./SnackbarProvider";

import { ACTIONS } from "../constants";
import { TodoForm } from "./TodoForm";

//CHANGE HERE
const EditWindow = React.memo(({ initialData, onClose, onTodoAction }) => {
  const [updatedTodo, setUpdatedTodo] = useState(initialData);
  const showSnackbar = useSnackbar();

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
      <div className="modalButtons">
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

import React, { useState } from "react";
import { Modal } from "../components/Modal";

export const useEditWindow = (onAction) => {
  const [editWindow, setEditWindow] = useState({ show: false });

  const showEditWindow = (todo) => {
    setEditWindow({ show: true, payload: todo });
  };

  const closeEditWindow = () => {
    setEditWindow({ show: false });
  };

  let modal = undefined;
  if (editWindow.show === true) {
    modal = (
      <Modal
        todo={editWindow.payload}
        closeEditWindow={closeEditWindow}
        onAction={onAction}
      />
    );
  }

  return [modal, showEditWindow];
};

import React, { useState, useMemo, useCallback } from "react";
import Modal from "../components/Modal";

const useEditWindow = (onTodoAction) => {
  const [editWindow, setEditWindow] = useState({ show: false });

  const showEditWindow = useCallback((todo) => {
    setEditWindow({ show: true, payload: todo });
  }, []);

  const closeEditWindow = useCallback(() => {
    setEditWindow({ show: false });
  }, []);

  // let modal = undefined;
  // if (editWindow.show === true) {
  //   modal = (
  //     <Modal
  //       todo={editWindow.payload}
  //       closeEditWindow={closeEditWindow}
  //       onTodoAction={onTodoAction}
  //     />
  //   );
  // }

  const modal = useMemo(() => {
    if (editWindow.show === true) {
      return (
        <Modal
          todo={editWindow.payload}
          closeEditWindow={closeEditWindow}
          onTodoAction={onTodoAction}
        />
      );
    } else {
      return undefined;
    }
  }, [editWindow, closeEditWindow, onTodoAction]);
  //DOUBT

  return [modal, showEditWindow];
};

export default useEditWindow;

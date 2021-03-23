import React, { useState, useMemo, useCallback } from "react";
import { Modal } from "../components/Modal";

export const useEditWindow = (onAction) => {
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
  //       onAction={onAction}
  //     />
  //   );
  // }

  const modal = useMemo(() => {
    if (editWindow.show === true) {
      return (
        <Modal
          todo={editWindow.payload}
          closeEditWindow={closeEditWindow}
          onAction={onAction}
        />
      );
    } else {
      return undefined;
    }
  }, [editWindow, closeEditWindow, onAction]);
  //DOUBT

  return [modal, showEditWindow];
};

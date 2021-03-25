import { useState, useCallback } from "react";

const useEditWindow = (onTodoAction) => {
  const [editWindow, setEditWindow] = useState({ show: false });

  const showEditWindow = useCallback((todo) => {
    setEditWindow({ show: true, data: todo });
  }, []);

  const closeEditWindow = useCallback(() => {
    setEditWindow({ show: false });
  }, []);

  return { editWindow, showEditWindow, closeEditWindow };
};

export default useEditWindow;

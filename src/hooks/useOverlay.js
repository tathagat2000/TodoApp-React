import { useState, useCallback } from "react";

const useOverlay = () => {
  const [overlay, setOverlay] = useState({ show: false });

  const showOverlay = useCallback((todo) => {
    setOverlay({ show: true, data: todo });
  }, []);

  const closeOverlay = useCallback(() => {
    setOverlay({ show: false });
  }, []);

  return { overlay, showOverlay, closeOverlay };
};

export { useOverlay };

import React, { useState, useCallback, useRef } from "react";

import SnackbarContext from "../context/SnackbarContext";
import Snackbar from "./Snackbar";

const SnackbarProvider = ({ children }) => {
  const timeout = useRef();
  const [snackbar, setSnackbar] = useState({ show: false, message: undefined });

  const showSnackbar = useCallback((message = "Please Try Again") => {
    clearTimeout(timeout.current);
    setSnackbar({ show: true, message });
    timeout.current = setTimeout(() => {
      setSnackbar({ show: false, message: undefined });
    }, 1500);
  }, []);

  return (
    <SnackbarContext.Provider value={showSnackbar}>
      {children}
      {snackbar.show && <Snackbar message={snackbar.message} />}
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;

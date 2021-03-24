import React, { useState, useCallback } from "react";

import SnackbarContext from "../context/SnackbarContext";
import Snackbar from "./Snackbar";

const SnackbarProvider = ({ children }) => {
  const [snackbar, setSnackbar] = useState({ show: false, message: null });

  const handleSnackbar = useCallback((message = "Please Try Again") => {
    setSnackbar({ show: true, message });
    setTimeout(() => {
      setSnackbar({ show: false });
    }, 1500);
  }, []);

  return (
    <SnackbarContext.Provider value={handleSnackbar}>
      {children}
      {snackbar.show && <Snackbar message={snackbar.message} />}
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;

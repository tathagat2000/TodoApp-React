import React, { useState, useCallback, useRef, useContext } from "react";
import { Snackbar } from "./Snackbar";

const SnackbarContext = React.createContext();

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

const useSnackbar = () => useContext(SnackbarContext);

export { SnackbarProvider, useSnackbar };

import { useCallback, useState } from "react";

const useSnackbar = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleSnackbar = useCallback(() => {
    setShowSnackbar(true);
    setTimeout(() => {
      setShowSnackbar(false);
    }, 2000);
  }, []);

  return [showSnackbar, handleSnackbar];
};

export default useSnackbar;

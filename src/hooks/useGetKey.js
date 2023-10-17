import { useEffect, useCallback, useState } from "react";

export const useGetKey = () => {
  const [key, setKey] = useState();

  const handleKeyDown = useCallback(({ keyCode }) => setKey(keyCode), []);
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return { key };
};

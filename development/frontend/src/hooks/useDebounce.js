// hooks/useDebounce.js
import { useRef, useCallback } from "react";

const useDebounce = (callback, delay) => {
  const timeoutRef = useRef(null);

  const debouncedFn = useCallback(
    (...args) => {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => callback(...args), delay);
    },
    [callback, delay],
  );

  return debouncedFn;
};

export default useDebounce;

import { useRef, useEffect, MutableRefObject } from "react";

export const useInterval = (callback: Function, delay: number) => {
  const savedCallback: MutableRefObject<any> = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

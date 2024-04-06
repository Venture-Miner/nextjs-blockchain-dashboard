import { useEffect } from "react";

// eslint-disable-next-line
const UseOnClickOutside = (ref: any, handler: Function) => {
  useEffect(
    () => {
      // eslint-disable-next-line
      const listener = (event: any) => {
        // Do nothing if clicking ref's element or descendent elements
        // eslint-disable-next-line
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    // to optimize please pass your handler in a useCallback hook
    [ref, handler]
  );
};

export default UseOnClickOutside;
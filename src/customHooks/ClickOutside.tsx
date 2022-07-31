import { useEffect } from "react";

export const useOnClickOutside = (ref: any, handleClick: any) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (ref.current || !ref.current?.contains(event.target)) {
        return;
      }
      handleClick(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handleClick]);
};

export default useOnClickOutside;

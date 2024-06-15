"use client";

import { useLayoutEffect, useState } from "react";

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return { width: size[0], height: size[1] };
};

/* required: display name */
useWindowSize.displayName = "useWindowSize";

/* required: props types */
useWindowSize.propTypes = {};

/* required: default props */
useWindowSize.defaultProps = {};

export { useWindowSize };

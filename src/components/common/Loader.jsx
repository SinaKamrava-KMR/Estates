import React from "react";
import LinearIndeterminate from "./LinearIndeterminate";
import { createPortal } from "react-dom";

function Loader() {
  return (
    <div>
      {createPortal(<LinearIndeterminate />, document.body)}
    </div>
  );
}

export default Loader;

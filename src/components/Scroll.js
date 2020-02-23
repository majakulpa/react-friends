import React from "react";

const Scroll = props => {
  return (
    <div
      style={{
        overflowY: "scroll",
        height: "100vh",
        borderTop: "1px solid #555"
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;

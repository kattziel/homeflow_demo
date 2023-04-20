import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "lightyellow",
        margin: "0 auto",
        maxWidth: "80%",
        padding: "20px",
      }}
    >
      {children}
    </div>
  );
};

export default Wrapper;

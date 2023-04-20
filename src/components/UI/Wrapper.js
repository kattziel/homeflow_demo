import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #f7f7f7, #FFFFFF)",
        margin: "0 auto",
        maxWidth: "80%",
        padding: "20px",
        height: "center",
      }}
    >
      {children}
    </div>
  );
};

export default Wrapper;

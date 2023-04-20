import React from "react";

const StartScreenButton = ({ onPress, children, color, borderColor }) => {
  return (
    <button
      onPress={onPress}
      style={{
        backgroundColor: "white",
        padding: "25px",
        fontSize: "30px",
        border: "3px solid",
        borderColor: borderColor,
        color: color
      }}
    >
      {children}
    </button>
  );
};

export default StartScreenButton;

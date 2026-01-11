import React, { type ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
}

const Alert = ({ children }: AlertProps) => {

    const myStyle = {
        color: "red", 
        backgroundColor: "yellow",
        borderWidth:2, 
        borderColor:"blue"
    };

  return (
    <button
      onClick={() => {
        alert("Updated Details");
      }}
      style={myStyle}
    >
      {children}
    </button>
  );
};

export default Alert;

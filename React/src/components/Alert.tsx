import React, { type ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
}

const Alert = ({ children }: AlertProps) => {
  return (
    <button
      onClick={() => {
        alert("Updated Details");
      }}
      style={{color: "red", borderWidth:2, borderColor:"blue"}}
    >
      {children}
    </button>
  );
};

export default Alert;

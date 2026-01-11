import React, { type ReactNode } from "react";
import "../App.css";

interface AlertProps {
  children: ReactNode;
}

const Alert = ({ children }: AlertProps) => {

    

  return (
    <button
      onClick={() => {
        alert("Updated Details");
      }}
      className="alert"
    >
      {children}
    </button>
  );
};

export default Alert;

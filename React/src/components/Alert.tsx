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
      className="border-2 p-2 m-2"
    >
      {children}
    </button>
  );
};

export default Alert;

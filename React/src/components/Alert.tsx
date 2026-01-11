import React, { type ReactNode } from "react";
import styles from "./Alert.module.css"; 

interface AlertProps {
  children: ReactNode;
}

const Alert = ({ children }: AlertProps) => {
  return (
    <button
      onClick={() => {
        alert("Updated Details");
      }}
      className={styles.alert} 
    >
      {children}
    </button>
  );
};

export default Alert;

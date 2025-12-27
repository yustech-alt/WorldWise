import React from "react";
import styles from "./Button.module.css";

export default function Button({ children, type, onClick }) {
  return (
    <div className={`${styles.btn} ${styles[type]}`} onClick={onClick}>
      {children}
    </div>
  );
}

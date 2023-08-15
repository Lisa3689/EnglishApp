import React from "react";
import styles from "./buttons.module.scss";

function Button(props) {
  const { action, children, red, green } = props;

  return (
    <button
      className={`${styles.button} ${red ? styles.red : ""} ${
        green ? styles.green : ""
      }`}
      onClick={action}
    >
      {children}
    </button>
  );
}

export default Button;

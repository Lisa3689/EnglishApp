import React from "react";
import styles from "./modal.module.scss";
import { Link } from "react-router-dom";

const Modal = ({ isShownModal, countKnow, cardInfo }) => {
  // const {isShownModal, countKnow, cardInfo } = props;
  return (
    <div
      className={`${styles.modal} ${isShownModal ? styles.modalActive : ""}`}
    >
      <div className={styles.body}>
        <div>Поздравляем! Вы прошли уровень!</div>
        <div>{`Вы ответили правильно на ${countKnow} из ${cardInfo.length}`}</div>
        <Link to="/">
          <button>На главную</button>
        </Link>
      </div>
    </div>
  );
};

export default Modal;

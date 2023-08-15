import React, { useState } from "react";
import styles from "./wordsTableItem.module.scss";
import img from "../../assets/img/delete.svg";
import { showSuccess } from "../../utils/notifications";

const WordsTableItem = ({ word, index, onDelete, id }) => {
  const onDeleteItem = () => {
    onDelete(id);
    showSuccess("Вы удалили слово");
  };

  return (
    <div className={styles.tableItem}>
      <div className={`${styles.headerItem} ${styles.numberItem}`}>
        {index + 1}
      </div>
      <div className={`${styles.headerItem} ${styles.mainItem}`}>
        {word.name}
      </div>
      <div className={`${styles.headerItem} ${styles.mainItem}`}>
        {word.translation}
      </div>
      <div className={`${styles.headerItem} ${styles.mainItem}`}>
        {word.transcription}
      </div>
      <div className={`${styles.headerItem} ${styles.mainItem}`}>
        <img
          className={styles.icon}
          onClick={onDeleteItem}
          alt="delete"
          src={img}
        />
      </div>
    </div>
  );
};

export default WordsTableItem;

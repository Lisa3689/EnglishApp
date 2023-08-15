import styles from "./knowWordsPage.module.scss";
import WordsTableItem from "../WordsTableItem/WordsTableItem";

import React, { useState, useEffect } from "react";

const KnowWordsPage = () => {
  const [cards, setCards] = useState([]);

  const onDelete = (id) => {
    const filteredArr = cards.filter((item) => {
      return id !== item.id;
    });

    setCards(filteredArr);

    localStorage.setItem("know", JSON.stringify(filteredArr));
  };

  useEffect(() => {
    const ls = JSON.parse(localStorage.getItem("know"));
    if(ls) {
        setCards(ls);
    }
    
  }, []);

  return (
    <div className="container">
      <h1 className={styles.title}>Слова, которые вы знаете</h1>
      <div className={styles.tableHeader}>
        <div className={`${styles.headerItem} ${styles.numberItem}`}>№</div>
        <div className={`${styles.headerItem} ${styles.mainItem}`}>Слово</div>
        <div className={`${styles.headerItem} ${styles.mainItem}`}>
          Транскрипция
        </div>
        <div className={`${styles.headerItem} ${styles.mainItem}`}>Перевод</div>
        <div className={`${styles.headerItem} ${styles.mainItem}`}>
          Удаление
        </div>
      </div>
      {cards.map((item, index) => {
        return <WordsTableItem id={item.id} key={item.id} word={item.attributes} index={index} onDelete={onDelete} />;
      })}
    </div>
  );
};

export default KnowWordsPage;

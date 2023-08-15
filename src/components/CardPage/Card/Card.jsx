import styles from "./card.module.scss";

const Card = ({ info, toggle, shownTranslation }) => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>{info.name}</div>
      <div className={styles.transcription}>{info.transcription}</div>
      {shownTranslation === false ? (
        <button className={styles.button} onClick={toggle}>
          Показать перевод
        </button>
      ) : (
        <div>{info.translation}</div>
      )}
    </div>
  );
};

export default Card;

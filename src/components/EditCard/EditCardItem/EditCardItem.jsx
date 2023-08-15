import React, { useState, useRef, useEffect } from "react";
import styles from "./editCardItem.module.scss";
import editImg from "../../../assets/img/edit.svg";
import saveImg from "../../../assets/img/save.svg";
import deleteImg from "../../../assets/img/delete.svg";
import { showError, showSuccess } from "../../../utils/notifications";

const EditCardItem = ({ info, index, onDeleteItem, id, changeItem }) => {
  const nameRef = useRef(null);
  const transcriptRef = useRef(null);
  const translationRef = useRef(null);

  const [isEdit, setIsEdit] = useState(false); //false кнопка меняется на карандаш и появляются input
  const onEdit = () => {
      setIsEdit(true)
      
  };

  const onSave = () => {
    if (
      nameValue === "" ||
      transcriptValue === "" ||
      translationValue === ""
    ) {

      return;
      
    }
      changeItem(id,nameValue,transcriptValue,translationValue)
      setIsEdit(false);
      
  }
  
  const [nameValue, setNameValue] = useState(info.name);
  const onChangeNameInput = (event) => {
    setNameValue(event.target.value);
    if (event.target.value === "") {
      nameRef.current.style.borderColor = "red";
    } else {
      nameRef.current.style.borderColor = "black";
    }
  };

  const [transcriptValue, setTranscriptValue] = useState(info.transcription);
  const onChangeTranscriptInput = (event) => {
    setTranscriptValue(event.target.value);
    if (event.target.value === "") {
      transcriptRef.current.style.borderColor = "red";
    } else {
      transcriptRef.current.style.borderColor = "black";
    }
  };

  const [translationValue, setTranslationValue] = useState(info.translation);
  const onChangeTranslationInput = (event) => {
    setTranslationValue(event.target.value);
    if (event.target.value === "") {
      translationRef.current.style.borderColor = "red";
    } else {
      translationRef.current.style.borderColor = "black";
    }
  };

  const onDelete = () => {
    onDeleteItem(id);
    showSuccess("Вы удалили слово");
  };

  return (
    <div className={styles.tableItem}>
      <div className={`${styles.headerItem} ${styles.numberItem}`}>
        {index + 1}
      </div>

      <div className={`${styles.headerItem} ${styles.mainItem}`}>
        {isEdit === false ? (
          info.name
        ) : (
          <input
            ref={nameRef}
            onChange={onChangeNameInput}
            value={nameValue}
            placeholder="введите слово"
            className={styles.input}
          />
        )}
      </div>

      <div className={`${styles.headerItem} ${styles.mainItem}`}>
        {isEdit === false ? (
          info.transcription
        ) : (
          <input
            ref={transcriptRef}
            onChange={onChangeTranscriptInput}
            value={transcriptValue}
            placeholder="введите транскрипцию"
            className={styles.input}
          />
        )}
      </div>

      <div className={`${styles.headerItem} ${styles.mainItem}`}>
        {isEdit === false ? (
          info.translation
        ) : (
          <input
            ref={translationRef}
            onChange={onChangeTranslationInput}
            value={translationValue}
            placeholder="введите перевод"
            className={styles.input}
          />
        )}
      </div>

      <div
        className={`${styles.headerItem} ${styles.mainItem} ${styles.settingsItem}`}
      >
        {isEdit === false ? (
          <img
            onClick={onEdit}
            className={styles.icon}
            src={editImg}
            alt="edit"
          />
        ) : (
          <img
            onClick={onSave}
            className={styles.icon}
            src={saveImg}
            alt="save"
          />
        )}
        <img
          onClick={onDelete}
          className={styles.icon}
          src={deleteImg}
          alt="delete"
        />
      </div>
    </div>
  );
};

export default EditCardItem;

import React from 'react';
import styles from './paginationButton.module.scss'
import { useState} from "react";

const PaginationButton = ({pageCount, getMorePage, activePage}) => {
    const onClickBtn = () => {
    getMorePage(pageCount)
  }
  return (
    <div  onClick={onClickBtn} className={`${styles.btn} ${pageCount === activePage ?styles.active : ''}`}>{pageCount}</div>

  )
}

export default PaginationButton
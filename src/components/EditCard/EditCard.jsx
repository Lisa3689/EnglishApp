import React, { useState, useEffect } from "react";
import styles from "./editCard.module.scss";
import { Link } from "react-router-dom";
import EditCardItem from "./EditCardItem/EditCardItem";
import Loader from "../Loader/Loader";
import axios from "axios";
import { showError, showSuccess } from "../../utils/notifications";
import { API_URL } from "../../http";
import PaginationButton from "../sharedComponents/PaginationButton/PaginationButton";


const EditCard = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageAmount, setPageAmount] = useState([]);


  const onDelete = async (id) => {
    try{
      setIsLoading(true)
      const { data } = await axios.delete(`${API_URL}/words/${id}`);
      const filteredArr = cards.filter((item) => {
        return item.id !== data.data.id;
      });
  
      setCards(filteredArr);
      showSuccess('Вы успешно удалили слово');

    }catch(err){

    }finally {
      setIsLoading(false)
    }

  };

  const changeItem = async (id, name, transcription, translation)=>{
    try{
      setIsLoading(true)
      const putData = {
        data:{
          name:name, 
          transcription:transcription, 
          translation:translation
      }
    }
      const {data} = await axios.put(`${API_URL}/words/${id}`,putData)
      const newArr = cards.map(function(item){
          if (id === item.id){
            return data.data;
          }
          return item
      })
      setCards(newArr)
      showSuccess('Вы успешно изменили слово');
    }catch(err) {
      showError(err.response.data.error.message)
    }
    finally{
      setIsLoading(false);
    }

    // const editedArr = cards.map(function(item){
    //   if (item.id===id){
    //     // const copyItem = {...item};
    //     // copyItem.attributes.name = name;
    //     // copyItem.attributes.transcription = transcription;
    //     // copyItem.attributes.translation = translation;
    //     return {...item, attributes: {...item.attributes, name: name, transcription: transcription, translation: translation}}
    //   }else{
    //     return item
    //   }
    // })
    // setCards(editedArr)
    // console.log(1)
  }

  const getWords = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/words`);
      const pageCount = data.meta.pagination.pageCount;
      const arr = new Array(pageCount).fill().map((_, index) => index + 1);
      setPageAmount(arr)
      setCards(data.data);
    } catch (err) {
      showError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const getMorePage = async (page)=>{
      try{ 
        const {data} = await axios.get(`${API_URL}/words?pagination[page]=${page}`)
        setCards(data.data)
      }
      catch(err){}
      finally{}
  }

  useEffect(() => {
    getWords();
  }, []);
  
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container">
      <div className={styles.tableHeader}>
        <div className={`${styles.headerItem} ${styles.numberItem}`}>№</div>
        <div className={`${styles.headerItem} ${styles.mainItem}`}>Слово</div>
        <div className={`${styles.headerItem} ${styles.mainItem}`}>
          Транскрипция
        </div>
        <div className={`${styles.headerItem} ${styles.mainItem}`}>Перевод</div>
        <div className={`${styles.headerItem} ${styles.mainItem}`}>
          Настройки
        </div>
      </div>

      {cards.map((item, index) => {
        return (
          <EditCardItem
            info={item.attributes}
            key={item.id}
            index={index}
            onDeleteItem={onDelete}
            id={item.id}
            changeItem={changeItem}
          />
        );
      })}

      <div className={styles.pagination}>
        {pageAmount.map(item => {
          return <PaginationButton getMorePage={getMorePage} key={item} pageCount={item}/>
        })}
      </div>
    </div>
  );
};

export default EditCard;

// const arr = [{id: 1, name: 'Hey'}, {id: 2, name: 'opp'}, {id: 3, name: 'err'}]

// function onDeleArrItem(id) {
//   const arr1 = arr.filter((item) => {
//       return item.id !== 2
//   })

//   setState(arr1)
// }

// onDeleteArrItem(2)

//[{id: 1, name: 'Hey'}, {id: 3, name: 'err'}]


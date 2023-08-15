import { Link, useParams } from "react-router-dom";
import Button from "../Buttons/Buttons";
import Card from "./Card/Card";
import styles from "./cardPage.module.scss";
import React, { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import Loader from "../Loader/Loader";
import { API_URL } from "../../http";

let arrOfKnow = [];
let arrOfDontKnow = [];

const CardPage = () => {
  const { cardId } = useParams();
  const url = cardId
    ? `${API_URL}/themes/${cardId}?populate=deep,2`
    : `${API_URL}/words`;

  const [shownTranslation, setShownTranslation] = useState(false);
  const [isShownModal, setIsShownModal] = useState(false);
  const [cardInfo, setCardInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const toggleShownTranslation = () => {
    setShownTranslation(true);
  };

  const [count, setCount] = useState(0);
  const [activeCard, setActiveCard] = useState(0);

  const onChangeActiveCard = () => {
    setActiveCard((prevState) => {
      if (prevState < cardInfo.length - 1) {
        return prevState + 1;
      } else {
        setIsShownModal(true);
        const arrOfLSKnow = localStorage.getItem("know")
          ? JSON.parse(localStorage.getItem("know"))
          : [];
        const arrOfLSDKnow = localStorage.getItem("dknow")
          ? JSON.parse(localStorage.getItem("dknow"))
          : [];

        arrOfKnow.forEach((item) => {
          if (!arrOfLSKnow.some((el) => el.id === item.id)) {
            arrOfLSKnow.push(item);
          }
        });

        arrOfDontKnow.forEach((item) => {
          if (!arrOfLSDKnow.some((el) => el.id === item.id)) {
            arrOfLSDKnow.push(item);
          }
        });

        localStorage.setItem("know", JSON.stringify(arrOfLSKnow));
        localStorage.setItem("dknow", JSON.stringify(arrOfLSDKnow));

        arrOfDontKnow = [];
        arrOfKnow = [];
        return prevState;
      }
    });
  };

  const incrementCount = () => {
    setCount(count + 1);
    arrOfDontKnow.push(cardInfo[activeCard]);
    onChangeActiveCard();
    setShownTranslation(false);
  };

  const [countKnow, setCountKnow] = useState(0);
  const incrementCountKnow = () => {
    setCountKnow(countKnow + 1);
    arrOfKnow.push(cardInfo[activeCard]);

    onChangeActiveCard();
    setShownTranslation(false);
  };

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (cardId) {
          setCardInfo(data.data.attributes.words.data);
        } else {
          setCardInfo(data.data);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="container">
        <div className={styles.cardPage}>
          <div className={styles.card}>
            <Card
              toggle={toggleShownTranslation}
              shownTranslation={shownTranslation}
              info={cardInfo[activeCard].attributes}
            />
          </div>
        </div>

        <div className={styles.countBlock}>
          <div className="dontKnowBlock"></div>

          <div className="KnowButtonBlock"></div>
        </div>

        <div className={styles.btnsBlock}>
          <Button action={incrementCount} red>
            <p>{count}</p>Не знаю
          </Button>
          <Button action={incrementCountKnow} green>
            <p>{countKnow}</p>Знаю
          </Button>
        </div>
      </div>
      {isShownModal && (
        <Modal
          isShownModal={isShownModal}
          countKnow={countKnow}
          cardInfo={cardInfo}
        />
      )}
    </>
  );
};

export default CardPage;

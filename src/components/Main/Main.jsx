import { Link } from "react-router-dom";
import styles from "./main.module.scss";
import React, { useState, useEffect } from "react";
import { showError } from "../../utils/notifications";
import Loader from "../Loader/Loader";
import { API_URL } from "../../http";

const Main = () => {
  const [levels, setLevels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getLevels = () => {
      fetch(`${API_URL}/levels?sort=id`)
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            showError(data.error.message);
            return;
          }

          setLevels(data.data);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };
    getLevels();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.main}>
      <div className={styles.choose}>Выберите уровень:</div>
      {levels.map((item) => {
        return (
          <Link key={item.id} to={`/themes/${item.id}`}>
            <div className={styles.levels}>{item.attributes.title}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Main;

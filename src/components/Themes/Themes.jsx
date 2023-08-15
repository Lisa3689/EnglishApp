import React, { useState, useEffect } from "react";
import styles from "./themes.module.scss";
import { Link, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { API_URL } from "../../http";

const Themes = () => {
  const { id } = useParams();
  const [themes, setThemes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/levels/${id}?populate=deep,2`)
      .then((res) => res.json())
      .then((data) => {
        setThemes(data.data.attributes.themes.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.themes}>
      <div className={styles.chooseTheme}>Выберите тему:</div>
      {themes.map((item) => {
        return (
          <Link key={item.id} to={`/card/${item.id}`}>
            <div className={styles.themesAll}>{item.attributes.title}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Themes;

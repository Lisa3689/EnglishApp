import styles from "./header.module.scss";
import logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <div className={styles.part1}>
          <div className={styles.easy}>Easy English</div>
          <img className={styles.logo} src={logo} alt="logo" />
        </div>
      </Link>

      <div className={styles.part2}>
        <Link to="/cards">
          <div className={styles.themes}>Карточки</div>
        </Link>
        <Link to="/cardEdit">
          <div className={styles.themes}>Настроить карточки</div>
        </Link>
        <Link to="/repeat">
          <div className={styles.repeat}>Надо повторить</div>
        </Link>
        <Link to="/know">
          <div className={styles.know}>Уже знаю</div>
        </Link>
        <div className={styles.aboutus}>О проекте</div>
      </div>
    </div>
  );
};

export default Header;

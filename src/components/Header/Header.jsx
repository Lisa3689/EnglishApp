import styles from "./header.module.scss";
import logo from "../../assets/img/logo.svg";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const setActiveLink = ({isActive}) => {
    return isActive ? styles.activeLink : '';
  }
  return (
    <div className={styles.header}>
      <NavLink to="/">
        <div className={styles.part1}>
          <div className={styles.easy}>Easy English</div>
          <img className={styles.logo} src={logo} alt="logo" />
        </div>
      </NavLink>

      <div className={styles.part2}>
        <NavLink className={setActiveLink} to="/cards">
          <div className={styles.themes}>Карточки</div>
        </NavLink>
        <NavLink className={setActiveLink} to="/cardEdit">
          <div className={styles.themes}>Настроить карточки</div>
        </NavLink>
        <NavLink className={setActiveLink} to="/repeat">
          <div className={styles.repeat}>Надо повторить</div>
        </NavLink>
        <NavLink className={setActiveLink} to="/know">
          <div className={styles.know}>Уже знаю</div>
        </NavLink>
        <div className={styles.aboutus}>О проекте</div>
      </div>
    </div>
  );
};

export default Header;

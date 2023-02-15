import React from 'react'
import { Link, NavLink } from "react-router-dom";
import NavBarMovile from './NavBarMobile/NavBarMobile';
import globalStyles from "./styles.module.scss";
import styles from "./styles.module.scss"
import image from "../assets/images/flag.png";


const setActive = ({ isActive }) => isActive ? styles.active : ''
const AppBar = () => {
    return (
      <>
        <header>
          <div className={globalStyles.container}>
            <NavBarMovile />
            <nav className={styles.header}>
              <div className={styles.logoWrapper}>
                <Link to="/" className={styles.logo}>
                  <img src={image} alt="flag" width="100" />
                </Link>
              </div>
              <div className={styles.navLinkWrapper}>
                <NavLink to="/" className={setActive}>
                  Home
                </NavLink>
                <NavLink to="/projects" className={setActive}>
                  Projects
                </NavLink>
                <NavLink to="/contacts" className={setActive}>
                  Contacts
                </NavLink>
              </div>
            </nav>
          </div>
        </header>
      </>
    );
}

export default AppBar;


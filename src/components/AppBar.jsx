import React from 'react'
import { NavLink } from "react-router-dom";
import NavBarMovile from './NavBarMobile/NavBarMobile';
import styles from "./styles.module.scss"


const setActive = ({ isActive }) => isActive ? styles.active : ''
const AppBar = () => {
    return (
      <>
        <header>
          <NavBarMovile /> 
          <nav className={styles.header}>
            <NavLink to="/" className={setActive}>
              Home
            </NavLink>
            <NavLink to="/projects" className={setActive}>
              Projects
            </NavLink>
            <NavLink to="/contacts" className={setActive}>
              Contacts
            </NavLink>
          </nav>
        </header>
      </>
    );
}

export default AppBar;


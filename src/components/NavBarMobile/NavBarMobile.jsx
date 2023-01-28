import React from "react";
import { useState } from "react";
import { CgMenuRound, CgCloseO } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import styles from "./mobile.module.scss";

const setActive = ({ isActive }) => isActive ? styles.active : ''

const NavBarMovile = () => {
  const [open, setOpen] = useState(false);
  const closeMenuHandler = () => setOpen(false);
  const burgerIcon = (
    <CgMenuRound
      className={styles.burger}
      size="40px"
      color="#ffc107"
      onClick={() => setOpen(!open)}
    />
  );
  const closeIcon = (
    <CgCloseO
      className={styles.burger}
      size="40px"
      color="#ffc107"
      onClick={() => setOpen(!open)}
    />
  );

  return (
    <nav className={styles.mobile}>
      {open ? closeIcon : burgerIcon}

      {open && (
        <div className={styles.navWrapper}>
          <NavLink
            to="/"
            className={setActive}
            color="#fff"
            onClick={() => closeMenuHandler()}
          >
            <span className={styles.li}>Home</span>
          </NavLink>
          <NavLink
            to="/projects"
            className={setActive}
            onClick={() => closeMenuHandler()}
          >
            <span className={styles.li}>Projects</span>
          </NavLink>
          <NavLink
            to="/contacts"
            className={setActive}
            onClick={() => closeMenuHandler()}
          >
            <span className={styles.li}>Contacts</span>
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default NavBarMovile;

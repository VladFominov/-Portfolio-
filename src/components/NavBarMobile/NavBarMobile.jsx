import React from "react";
import { useState, useEffect, useRef } from "react";
import { CgMenuRound, CgCloseO } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";
import styles from "./_mobile.module.scss";
import image from "../../assets/images/flag.png";

const setActive = ({ isActive }) => (isActive ? styles.active : "");

const NavBarMovile = () => {
  const [open, setOpen] = useState(false);
  let burgerRef = useRef();

  useEffect(() => {
    if (open) {
       document.body.style.overflow = "hidden";
     }
     
     return () => (document.body.style.overflow = "unset");
   }, [open]);

  useEffect(() => {
    if (!open) return;
    let handler = (e) => {
      if (!burgerRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open])

  const closeMenuHandler = () => setOpen(false);

  const burgerIcon = (
    <CgMenuRound
      className={styles.burger}
      size="40px"
      color="#ffc107"
      aria-label="Перемикач мобильного меню"
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
      <Link to="/" className={styles.logo}>
        <img src={image} alt="flag" width="100" />
      </Link>
      {open ? closeIcon : burgerIcon}

      {open ?(<div ref={burgerRef} className={styles.navWrapperIsOpen}>
          <NavLink
            to="/"
            className={setActive}
            color="#fff"
            width="50px"
            onClick={() => closeMenuHandler()}
          >
            <span className={styles.li}>Home</span>
          </NavLink>
          <NavLink
            to="/projects"
            className={setActive}
            width="63px"
            onClick={() => closeMenuHandler()}
          >
            <span className={styles.li}>Projects</span>
          </NavLink>
          <NavLink
            to="/contacts"
            className={setActive}
            width="67px"
            onClick={() => closeMenuHandler()}
          >
            <span className={styles.li}>Contacts</span>
          </NavLink>
        </div>) : (
        <div ref={burgerRef} className={styles.navWrapper}>
          <NavLink
            to="/"
            className={setActive}
            color="#fff"
            width="50px"
            onClick={() => closeMenuHandler()}
          >
            <span className={styles.li}>Home</span>
          </NavLink>
          <NavLink
            to="/projects"
            className={setActive}
            width="63px"
            onClick={() => closeMenuHandler()}
          >
            <span className={styles.li}>Projects</span>
          </NavLink>
          <NavLink
            to="/contacts"
            className={setActive}
            width="67px"
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

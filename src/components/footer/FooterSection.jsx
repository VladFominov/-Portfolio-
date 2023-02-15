import React from 'react'
import { IconContext } from "react-icons";
import { BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";
import globalStyles from "../styles.module.scss";
import styles from "./footer.module.scss";
const FooterSection = () => {
  return (
    <section className={styles.section}>
      <div className={globalStyles.container}>
        <ul className={styles.footerList}>
          <IconContext.Provider
            value={{
              color: " #0e76a8",
              size: "1.5em",
              className: "global-class-name",
            }}
          >
            <li>
              <a
                href="https://www.linkedin.com/in/vladyslav-fominov-ab64051a0/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin />
              </a>
            </li>
          </IconContext.Provider>

          <IconContext.Provider
            value={{
              color: "#f09433",
              size: "1.5em",
              className: "global-class-name",
            }}
          >
            <li>
              <a
                href="https://www.instagram.com/vladik_ja/"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram />
              </a>
            </li>
          </IconContext.Provider>
          <IconContext.Provider
            value={{
              color: "#3b5998",
              size: "1.5em",
              className: "global-class-name",
            }}
          >
            <li>
              <a
                href="https://www.facebook.com/vladyslav.fominov"
                target="_blank"
                rel="noreferrer"
              >
                <BsFacebook />
              </a>
            </li>
          </IconContext.Provider>
        </ul>
      </div>
    </section>
  );
}

export default FooterSection;
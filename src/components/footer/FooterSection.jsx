import React from 'react'
import { BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";
import globalStyles from "../styles.module.scss";
import styles from "./footer.module.scss";
const FooterSection = () => {
  return (
    <section className={styles.section}>
      <div className={globalStyles.container}>
        <ul className={styles.footerList}>
          <li>
            <a
              href="https://www.linkedin.com/in/vladyslav-fominov-ab64051a0/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/vladik_ja/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/vladyslav.fominov"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default FooterSection;
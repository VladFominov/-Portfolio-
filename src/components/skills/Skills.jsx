import React from "react";
import { IconContext } from "react-icons";
import styles from "./skills.module.scss";
import globalStyles from "../styles.module.scss";
import {
  DiCss3,
  DiReact,
  DiNodejs,
  DiSass,
  DiJavascript1,
} from "react-icons/di";
import { SiNextdotjs, SiTypescript, SiMongodb } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";

function Skills() {
  return (
    <section className={styles.section}>
      <div className={globalStyles.container}>
        <h2 className={styles.skillsTitle}>Tech Steck</h2>
        <ul className={styles.skillsList}>
          <IconContext.Provider
            value={{
              color: "orangered",
              size: "2em",
              className: "global-class-name",
            }}
          >
            <li className={styles.skillsItems}>
              <AiFillHtml5 />
              <p className={styles.skillsText}>HTML5</p>
            </li>
          </IconContext.Provider>

          <IconContext.Provider
            value={{
              color: "blue",
              size: "2em",
              className: "global-class-name",
            }}
          >
            <li className={styles.skillsItems}>
              <DiCss3 />
              <p>CSS3</p>
            </li>
          </IconContext.Provider>

          <IconContext.Provider
            value={{
              color: "red",
              size: "2em",
              className: "global-class-name",
            }}
          >
            <li className={styles.skillsItems}>
              <DiSass />
              <p>SASS/SCSS</p>
            </li>
          </IconContext.Provider>

          <IconContext.Provider
            value={{
              color: "yellow",
              size: "2em",
              className: "global-class-name",
            }}
          >
            <li className={styles.skillsItems}>
              <DiJavascript1 />
              <p>JavaScript</p>
            </li>
          </IconContext.Provider>

          <IconContext.Provider
            value={{
              color: "aqua",
              size: "2em",
              className: "global-class-name",
            }}
          >
            <li className={styles.skillsItems}>
              <DiReact />
              <p>REACT.JS</p>
            </li>
          </IconContext.Provider>

          <IconContext.Provider
            value={{
              color: "green",
              size: "2em",
              className: "global-class-name",
            }}
          >
            <li className={styles.skillsItems}>
              <DiNodejs />
              <p>NODE.JS</p>
            </li>
          </IconContext.Provider>
          <IconContext.Provider
            value={{
              size: "2em",
            }}
          >
            <li className={styles.skillsItems}>
              <SiNextdotjs />
              <p>NEXT.JS</p>
            </li>
          </IconContext.Provider>
          <IconContext.Provider
            value={{
              size: "2em",
            }}
          >
            <li className={styles.skillsItems}>
              <SiTypescript />
              <p>TypeScript</p>
            </li>
          </IconContext.Provider>
          <IconContext.Provider
            value={{
              size: "2em",
              color: "green",
            }}
          >
            <li className={styles.skillsItems}>
              <SiMongodb />
              <p>MongoDB </p>
            </li>
          </IconContext.Provider>
        </ul>
      </div>
    </section>
  );
}

export default Skills;

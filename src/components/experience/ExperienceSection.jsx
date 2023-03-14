// import React, { useState } from 'react'
import styles from './_experience.module.scss'
import globalStyles from "../styles.module.scss";
import projectsInfo from "./projectsInfo";

const ExperienceSection = () => {
  // const [activeFilter, setActiveFilkter] = useState('All')
 
    return (
      <section className={styles.section}>
        <div className={globalStyles.container}>
          <h2 className={styles.expTitle}>
            My <span>projects</span>
          </h2>
          <div className={styles.flexWrapper}>
            {projectsInfo.map(
              ({ title, image, tags, discription, source, id }) => {
                return (
                  <div key={id} className={styles.projectCard}>
                    <h3 className={styles.expSubtitle}>{title}</h3>
                    <img
                      className={styles.img}
                      src={image}
                      alt="appimage"
                      width="200px"
                      // height="106px"
                    />
                    <p className={styles.expDiscription}>{discription}</p>
                    <p className={styles.expTechDiscription}>{tags}</p>
                    <a
                      className={styles.linkButton}
                      href={source}
                      type="button"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit App
                    </a>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>
    );
  }

  export default ExperienceSection;
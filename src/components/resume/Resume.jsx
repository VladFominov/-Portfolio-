import React from 'react'
import styles from './resume.module.scss'
import resume from "../../assets/images/Vlad_Fominov_junior_frontend.pdf";
import globalStyles from "../styles.module.scss";

function Resume() {
  return (
    <section section className={styles.section}>
      <div className={globalStyles.container}>
        To get more information about me, please, check my CV
        <a
          className={styles.linkButton}
          class="btn btn-primary"
          href={resume}
          role="button"
          download="Resume"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}

export default Resume;
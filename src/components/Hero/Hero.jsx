import React from 'react';

import globalStyles from '../styles.module.scss'
import styles from './_hero.module.scss'
import bgHeroVideo from '../../assets/video/video.mp4'
const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={globalStyles.container}>
        <div className={styles.overlay}>
          <h1 className={styles.content}>
          <span className={styles.curlySpan}> Welcome</span>
          <span className={styles.equalSpan}>to my portfolio</span>
        </h1>
          <video src={bgHeroVideo} autoPlay loop muted />

        </div>
        
        <div className={styles.descWrap}>
          <p className={styles.heroDesc}>
            Hi everyone! My name is Vlad, I'm a Full stack developer. Below you
            will find more information about projects I've been involved with
            and my tech stack
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
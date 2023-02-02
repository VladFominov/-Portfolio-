import React from 'react'
import globalStyles from '../styles.module.scss'
import styles from './hero.module.scss'
import bgHeroVideo from '../../assets/video/video.mp4'
const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={globalStyles.container}>
        <h1 className={styles.content}>
          Welcome <span>to my portfolio</span>
        </h1>
        <div className={styles.overlay}>
          <video src={bgHeroVideo} autoPlay loop muted />
        </div>
        <p>
          Hi everyone!, My name is Vlad, I'm a Full stack developer. Below you
          will find more information about projects I've been involved with and
          my tech stack
        </p>
      </div>
    </section>
  );
}

export default Hero;
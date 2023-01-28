import React from 'react'
import styles from './hero.module.scss'
import bgHeroVideo from '../../assets/video/video.mp4'
const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.content}>
        Welcome <span>to my portfolio</span>
      </h1>
      <div className={styles.overlay}></div>
      <video src={bgHeroVideo} autoPlay loop muted />
    </section>
  );
}

export default Hero;
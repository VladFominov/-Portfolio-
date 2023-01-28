import React from 'react'
import ExperienceSection from '../components/experience/ExperienceSection';
import Hero from '../components/Hero/Hero';
import Resume from '../components/resume/Resume';
import Skills from '../components/skills/Skills';

const HomePage = () => {
  return (
    <>
      <Hero />
      <ExperienceSection />
      <Skills />
      <Resume />
    </>
  );
}

export default HomePage;
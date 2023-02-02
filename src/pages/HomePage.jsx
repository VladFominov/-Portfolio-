import React from "react";
import ExperienceSection from "../components/experience/ExperienceSection";
import FooterSection from "../components/footer/FooterSection";
import Hero from "../components/Hero/Hero";
import Resume from "../components/resume/Resume";
import Skills from "../components/skills/Skills";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <ExperienceSection />
      <Skills />
      <Resume />
      <FooterSection />
    </main>
  );
};

export default HomePage;

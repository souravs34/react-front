import React from "react";
import ImageSection from "../components/ImageSection";
import InterestSection from "../components/InterestSection";
import SkillsSection from "../components/SkillsSection";
import Title from "../components/Title";
import react from "../img/react.png";
import intelligence from "../img/intelligence.svg";
import backend from "../img/database.png";

const About = () => {
  return (
    <div className="about--page">
      <Title title={"About Me"} span={"About Me"} />
      <ImageSection />
      <Title title={"My Skills"} span={"My Skills"} />
      <div className="skillsContainer">
        <SkillsSection skill={"React"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"Nodejs"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"Expressjs"} progress={"70%"} width={"70%"} />
        <SkillsSection skill={"Mongodb"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"Python"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"Html"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"Css"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"Javascript"} progress={"55%"} width={"55%"} />
      </div>
      <Title title={"Interests"} span={"Interests"} />
      <div className="interests--container">
        <InterestSection
          image={backend}
          title={"Backend Development"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
        <InterestSection
          image={intelligence}
          title={"Artificial Intelligence"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
        <InterestSection
          image={react}
          title={"React Development"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
      </div>
    </div>
  );
};

export default About;

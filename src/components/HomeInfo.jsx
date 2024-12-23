import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Karthikeyan </span>👋
      <br />
      Software Engineer
    </h1>
  ),
  2: (
    <InfoBox
      text="Looking for work and picked up many skills along the way"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Featuring some of my projects and work"
      link="/projects"
      btnText="Learn more"
    />
  ),
  4: (
    <InfoBox
      text="Know more about me"
      link="/resume"
      btnText=""
    />
  ),
  5: (
    <InfoBox
      text="Hire me"
      link="/contact"
      btnText=""
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;

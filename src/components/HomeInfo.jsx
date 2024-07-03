import React from "react";
import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
      <p className="font-medium sm: text-xl text-center">{text}</p>
      <Link className="neo-brutalism-white neo-btn" to={link}>
        {btnText}
        <img src={arrow} className="w-4 h-4 object-contain" />
      </Link>
    </div>
  );

  const renderedContent = {
    1: (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 mx-5 text-white">
        Hi, I am <span className="font-semibold">Viktor</span> 👋 <br />A
        software developer from Ukraine.
      </h1>
    ),
    2: (
      <InfoBox
        text="Worked on many companies and picked up a lot of skills along the way."
        link="/about"
        btnText="Learn More"
      />
    ),
    3: (
      <InfoBox
        text="Successfully realized many projects over the years. Curious about the impact?"
        link="/projects"
        btnText="Visit my portfolio"
      />
    ),
    4: (
      <InfoBox
        text="Need a project done or looking for a dev? I'm just a few keystrokes away"
        link="/contact"
        btnText="Let's talk"
      />
    ),
  };

  return <div>{renderedContent[currentStage] || null}</div>;
};

export default HomeInfo;

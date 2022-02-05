import React from "react";
import "./about.css";
import Portrait from "../../assets/portrait.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img src={Portrait} alt="" className="about-img" />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">About me</h1>
        <p className="about-sub">Subparagraph</p>
        <p className="about-desc">This is a longer description</p>
      </div>
    </div>
  );
};

export default About;

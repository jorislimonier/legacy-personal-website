import React from "react";
import "./intro.css";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="intro-presentation">Hello, my name is</h2>
          <h1 className="intro-name">Joris LIMONIER</h1>
          <div class="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item">Data Science Student</div>
              <div className="intro-title-item">Mathematician</div>
              <div className="intro-title-item">Language learner</div>
              <div className="intro-title-item">Competitive Judoka</div>
            </div>
          </div>
            <div className="intro-description">
              I study Data Science.
            </div>
        </div>
      </div>
      <div className="intro-right">
        <div className="intro-right-wrapper"></div>
      </div>
    </div>
  );
};

export default Intro;

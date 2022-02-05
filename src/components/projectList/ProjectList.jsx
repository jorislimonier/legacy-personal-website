import React from "react";
import "./projectList.css";
import Project from "../project/Project";
import { projects } from "../../data";

const Projects = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My projects</h1>
        <p className="pl-desc">Below is a list of my projects</p>
      </div>
      <div className="pl-list">
        {projects.map((item) => (
          <Project key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProjectList from "./components/projectList/ProjectList";

const App = () => {
  return (
    <div>
      <Intro />
      <About />
      <ProjectList />
    </div>
  );
};

export default App;

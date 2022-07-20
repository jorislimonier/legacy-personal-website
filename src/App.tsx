import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { ProjectPlaceholder } from "./components/Projects/ProjectPlaceholder";
import ProjectList from "./components/ProjectList/ProjectList";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/project/:id" element={<ProjectPlaceholder />} />
      </Routes>
    </div>
  );
}

export default App;

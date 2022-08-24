import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { ProjectWrapper } from "./components/Projects/ProjectWrapper";
import { ProjectList } from "./components/ProjectList/ProjectList";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/projects/:id" element={<ProjectWrapper />} />
      </Routes>
    </div>
  );
}

export default App;

import { data } from "../Projects/ProjectPlaceholder";
import "./ProjectList.scss";

const ProjectList = () => {
  const projects = data.map((item, i) => {
    return (
      <a key={i} href={`/#/project/${i + 1}`} className="project__card">
        <h2>{item.title}</h2> <br />
        <div className="project__content">{item.content}</div>
      </a>
    );
  });
  return <div className="projects-list">{projects}</div>;
};

export default ProjectList;

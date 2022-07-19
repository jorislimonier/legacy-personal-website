import { data } from "../Projects/ProjectContainer";
import "./ProjectList.scss";

const ProjectList = () => {
  const projects = data.map((item, i) => {
    return (
      <div className="project__card" key={i}>
        <h2>{item.title}</h2> <br />
        <p className="project__content">{item.content}</p>
      </div>
    );
  });
  return <div className="projects-list">{projects}</div>;
};

export default ProjectList;

import { data } from "../Projects/ProjectPlaceholder";
import "./ProjectList.scss";

const ProjectList = () => {
  // Link tags to their color
  const colorPalette = {
    Julia: "#4C3A51",
    AI: "#1212ff",
    "Data Science": "#774360",
    Invoice: "#B05068",
    HTTP: "#305068",
    Automation: "#12ff12",
  };

  // Create a tag with consistent color accross project cards
  const createTags = (tag: string, i: number) => {
    return (
      <span
        key={i}
        className="project__tag"
        style={{ backgroundColor: colorPalette[tag] }}
      >
        {tag}
      </span>
    );
  };

  const projects = data.map((item, i) => {
    return (
      <a key={i} href={`/#/project/${i + 1}`} className="project__card">
        <h2>{item.title}</h2> <br />
        <div className="project__tags">
          {item.tags.map((tag, i) => createTags(tag, i))}
        </div>
        <div className="project__content">{item.content}</div>
      </a>
    );
  });
  return (
    <div className="project-list">
      <h1 className="project-list__title">List of projects</h1>
      <div className="project-list__list">{projects}</div>
    </div>
  );
};

export default ProjectList;

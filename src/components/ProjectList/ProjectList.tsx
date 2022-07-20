import { data } from "../Projects/ProjectPlaceholder";
import "./ProjectList.scss";

const ProjectList = () => {
  const createTags = (tag: string, i: number) => {
    const colorPalette = ["#4C3A51", "#774360", "#B05068", "#305068"];
    const idx = i % colorPalette.length;

    return (
      <span
        key={i}
        className="project__tag"
        style={{ backgroundColor: colorPalette[idx] }}
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
  return <div className="project-list">{projects}</div>;
};

export default ProjectList;

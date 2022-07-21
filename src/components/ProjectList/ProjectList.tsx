import { useState } from "react";
import { data } from "../Projects/ProjectWrapper";
import "./ProjectList.scss";
import { useTranslation, Trans } from "react-i18next";

const ProjectList = () => {
  // eslint-disable-next-line
  const t = useTranslation(); // @ts-ignore

  // Link tags to their color
  const colorPalette = {
    Julia: "#9558B2",
    AI: "#1212ff",
    "Data Science": "#774360",
    Invoice: "#B05068",
    HTTP: "#305068",
    Automation: "#66aa66",
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

  const [query, setQuery] = useState("");

  // Project cards
  const projects = data
    .filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        // item.content.children.includes(query) ||
        item.tags.some((tag) => tag.toLowerCase().includes(query))
    )
    .map((item, i) => {
      return (
        <a key={i} href={`/#/projects/${i + 1}`} className="project__card">
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
      <h1 className="project-list__title">
        <Trans>project-list__title</Trans>
      </h1>
      <input
        type="text"
        placeholder="Search..."
        className="project-list__input"
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="project-list__list">{projects}</div>
    </div>
  );
};

export default ProjectList;

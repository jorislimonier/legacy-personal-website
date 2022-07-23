import { useState } from "react";
import "./ProjectList.scss";
import { useTranslation, Trans } from "react-i18next";
import Project01 from "../Projects/Project01";
import Project02 from "../Projects/Project02";

const data = [
  {
    title: "Invoice generator in Julia",
    content: <Project01 />,
    tags: ["Julia", "AI", "Data Science", "API"],
  },
  {
    title: "The Color Path",
    content: <Project02 />,
    tags: [
      "Python",
      "Data Visualization",
      "Plotly",
      "Plotly",
      "Data Science",
      "Dash",
    ],
  },
];

const ProjectList = () => {
  // eslint-disable-next-line
  const { t } = useTranslation();
  //
  // Link tags to their color
  const colorPalette = {
    Python: "#667799",
    Julia: "#9558B2",
    Plotly: "#ff0055",
    Dash: "#3F4F75",
    AI: "#0000ff",
    "Data Science": "#006666",
    "Data Visualization": "#248f24",
    API: "#cc0000",
    HTTP: "#305068",
    Automation: "#66aa66",
  };

  // Create a tag with consistent color accross project cards
  const createTags = (tag: string, i) => {
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

  // Unique tags display
  const uniqueTagsDisplay = data
    .map((item) => {
      return item.tags;
    })
    .reduce((prev, curr) => {
      return prev.concat(curr);
    }, [])
    .filter((value, index, self) => {
      return self.indexOf(value) === index;
    })
    .map((item, i) => {
      return (
        <div key={i} className="unique-tags">
          {createTags(item, i)}
        </div>
      );
    });

  // Project cards
  const [query, setQuery] = useState("");
  const projects = data
    .filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
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
        placeholder={t("project-list__input__placeholder")}
        className="project-list__input"
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="project-list__list">{uniqueTagsDisplay}</div>
      <div className="project-list__list">{projects}</div>
    </div>
  );
};

export { ProjectList, data };

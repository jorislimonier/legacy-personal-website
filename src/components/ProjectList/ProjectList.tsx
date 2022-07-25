import { useState } from "react";
import "./ProjectList.scss";
import { useTranslation, Trans } from "react-i18next";
import Project01 from "../Projects/Project01";
import Project02 from "../Projects/Project02";

const data: { title: string; content: any; tags: string[] }[] = [
  {
    title: "Invoice Generator in Julia",
    content: <Project01 />,
    tags: [
      "Julia",
      "AI",
      "Data Science",
      "API",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
    ],
  },
  {
    title: "The Color Path",
    content: <Project02 />,
    tags: ["Python", "Data Visualization", "Plotly", "Data Science", "Dash"],
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
  const createTags = (tag: string, i: number) => {
    return (
      <a
        href=""
        className="project__tag"
        style={{ backgroundColor: colorPalette[tag] }}
      >
        <span key={i}>{tag}</span>
      </a>
    );
  };

  // Unique tags display
  const projectListTagsConcat = data
    .map((item) => item.tags)
    .reduce((prev, curr) => prev.concat(curr), []);

  const projectListTagsFrequency = projectListTagsConcat.reduce(
    (prev, curr) => {
      prev[curr] = prev[curr] + 1 || 1;
      return prev;
    },
    {}
  );

  const projectListTagsSorted = Object.keys(projectListTagsFrequency).sort(
    (a, b) =>
      projectListTagsFrequency[b] - projectListTagsFrequency[a] ||
      a.localeCompare(b)
  );
  const projectListTagsDisplay = projectListTagsSorted
    .filter((value, index, self) => self.indexOf(value) === index)
    .map((item, i) => createTags(item, i));

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
      <div className="project-list__tags">{projectListTagsDisplay}</div>
      <div className="project-list__list">{projects}</div>
    </div>
  );
};

export { ProjectList, data };

import { useParams } from "react-router-dom";
import Project01 from "./Project01";
import Project02 from "./Project02";
import "./ProjectPlaceholder.scss";

const data = [
  {
    title: "Invoice builder in Julia",
    content: <Project01 />,
    tags: ["Julia", "AI", "Data Science", "Invoice", "HTTP", "Automation"],
  },
  {
    title: "Blog post 2",
    content: <Project02 />,
    tags: ["Data Science", "AI"],
  },
  {
    title: "Blog post 3",
    content: <Project02 />,
    tags: ["AI", "Data Science"],
  },
  {
    title: "Blog post 4",
    content: <Project02 />,
    tags: ["Data Science", "AI"],
  },
  {
    title: "Blog post 5",
    content: <Project02 />,
    tags: ["AI", "Data Science"],
  },
  {
    title: "Blog post 6",
    content: <Project02 />,
    tags: ["Data Science", "AI"],
  },
  {
    title: "Blog post 7",
    content: <Project02 />,
    tags: ["AI", "Data Science"],
  },
  {
    title: "Blog post 8",
    content: <Project02 />,
    tags: ["Data Science", "AI"],
  },
];

const ProjectPlaceholder = () => {
  const { id } = useParams();
  const blogData = data.map((item, i) => {
    if (i + 1 === Number(id)) {
      return (
        <div key={i + 1}>
          <h1 className="title">{item.title}</h1>
          <div className="content">{item.content}</div>
        </div>
      );
    } else {
      return null;
    }
  });

  return <div>{blogData}</div>;
};
export { ProjectPlaceholder, data };
// export data;

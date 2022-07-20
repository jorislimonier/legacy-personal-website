import { useParams } from "react-router-dom";
import Project1 from "./Project1";
import "./ProjectPlaceholder.scss";

const data = [
  { title: "Invoice builder in Julia", content: <Project1 /> },
  { title: "Blog post 2", content: "bp 2" },
  { title: "Blog post 3", content: "bp 3" },
  { title: "Blog post 4", content: "bp 4" },
  { title: "Blog post 5", content: "bp 5" },
  { title: "Blog post 6", content: "bp 6" },
  { title: "Blog post 7", content: "bp 7" },
  { title: "Blog post 8", content: "bp 8" },
  // { id: 3, content: "bp 3" },
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

import { useParams } from "react-router-dom";
import Project1 from "./Project1";

const Project = () => {
  const { id } = useParams();
  const data = [
    { id: 1, title: <Project1 /> },
    // { id: 2, title: "bp 2" },
    // { id: 3, title: "bp 3" },
  ];
  const blogData = data.map((item, i) => {
    if (item.id === Number(id)) {
      return <>{item.title}</>;
    } else {
      return <p>Page not found</p>;
    }
  });

  return <div>{blogData}</div>;
};

export default Project;

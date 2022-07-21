import { useParams } from "react-router-dom";
import "./ProjectWrapper.scss";
import { data } from "../ProjectList/ProjectList";

const ProjectWrapper = () => {
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
export { ProjectWrapper };
// export data;

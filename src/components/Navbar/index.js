import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink exact="true" className="active" to="/">
          <FontAwesomeIcon icon={faHome} color="red" />
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;

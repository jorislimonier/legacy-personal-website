import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.scss";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="navbar">
      <span>
        <a className="logo" href="/">
          Joris LIMONIER
        </a>
      </span>
      {/* menu */}
      <ul className="menu">
        <li className="menu-items">
          <a href="/">Home</a>
        </li>
        <li className="menu-items">
          <a href="/about">About</a>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="menu-icon--mobile">
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile menu */}
      <ul className={nav ? "menu--mobile" : "hidden"}>
        <li className="menu-items--mobile">
          <a href="/">Home</a>
        </li>
        <li className="menu-items--mobile">
          <a href="/about">About</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

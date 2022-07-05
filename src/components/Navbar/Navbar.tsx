import "flag-icons/css/flag-icons.min.css";
import i18next from "i18next";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.scss";

const languages = [
  { code: "en", name: "English", country_code: "gb" },
  { code: "fr", name: "Français", country_code: "fr" },
]

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const { t } = useTranslation();

  return (
    <div className="navbar">
      <div className="flags-wrapper">
        <span>
          <a className="logo" href="/">
            Joris LIMONIER
          </a>
        </span>
        {/* Iterate over language flags */}
        {languages.map(({ code, name, country_code }) => (
          <button className="flag--button" key={country_code} onClick={() => i18next.changeLanguage(code)}>
            <span className={`flag fi fi-${country_code}`}>
            </span>
          </button>
        ))}
      </div>
      {/* menu */}
      <ul className="menu">
        <li className="menu-items">
          <a href="/">{t("home")}</a>
        </li>
        <li className="menu-items">
          <a href="/about">{t("about")}</a>
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

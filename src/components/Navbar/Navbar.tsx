import "flag-icons/css/flag-icons.min.css";
import i18next from "i18next";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.scss";

const languages = [
  { code: "en", country_code: "gb" },
  { code: "fr", country_code: "fr" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const { t } = useTranslation();

  return (
    <div className="navbar">
      <div className="flags-wrapper">
        <span className="logo-wrapper">
          <a className="logo" href="/">
            Joris LIMONIER
          </a>
        </span>
        {/* Iterate over language flags */}
        {languages.map(({ code, country_code }) => (
          <button
            className="flag-button"
            key={country_code}
            onClick={() => i18next.changeLanguage(code)}
          >
            <span className={`flag fi fi-${country_code}`}></span>
          </button>
        ))}
      </div>
      {/* Menu */}
      <ul className="menu">
        <li className="menu-items">
          <a href="/">{t("home")}</a>
        </li>
        <li className="menu-items">
          <a href="/#/projects">{t("projects")}</a>
        </li>
        <li className="menu-items">
          <a href="/#/contact">{t("contact")}</a>
        </li>
      </ul>

      {/* Hamburger */}

      {nav ? (
        <div onClick={handleClick} className="menu-icon--mobile--open">
          <FaTimes />
        </div>
      ) : (
        <div onClick={handleClick} className="menu-icon--mobile">
          <FaBars />
        </div>
      )}

      {/* Mobile menu */}

      <ul className={nav ? "menu__mobile" : "menu__mobile--hide"}>
        <li onClick={handleClick} className="menu-items--mobile">
          <a href="/">{t("home")}</a>
        </li>
        <li onClick={handleClick} className="menu-items--mobile">
          <a href="/#/projects">{t("projects")}</a>
        </li>
        <li onClick={handleClick} className="menu-items--mobile">
          <a href="/#/contact">{t("contact")}</a>
        </li>
        <li>
          {/* Iterate over language flags */}
          {languages.map(({ code, country_code }) => (
            <button
              className="flag-button--mobile"
              key={country_code}
              onClick={() => i18next.changeLanguage(code)}
            >
              <span className={`flag--mobile fi fi-${country_code}`}></span>
            </button>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

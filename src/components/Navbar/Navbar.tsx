import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { useState } from "react";
import { initReactI18next, useTranslation } from "react-i18next";
import { FaBars, FaTimes } from "react-icons/fa";
import FlagFrance from "../../assets/flag-france.svg";
import FlagUK from "../../assets/flag-uk.svg";
import "./Navbar.scss";

// https://www.youtube.com/watch?v=w04LXKlusCQ
// Stopped at 12:17
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    detection: {
      // order: ['cookie', 'querystring', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      // caches: ["cookie"]
    },
    backend: {
      loadPath: "assets/locales/{{lng}}/Navbar.json",
    },

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const { t } = useTranslation();

  return (
    <div className="navbar">
      <div className="flags-container">
        <span>
          <a className="logo" href="/">
            Joris LIMONIER
          </a>
        </span>
        <h2>{t("welcome_to_react")}</h2>
        <img className="flag" src={FlagFrance} alt="French flag" />
        <img className="flag" src={FlagUK} alt="British flag" />
      </div>
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

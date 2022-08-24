import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { initReactI18next } from "react-i18next";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.scss";

i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "fr"],
    fallbackLng: "en",
    saveMissing: true,
    react: {
      // https://react.i18next.com/latest/trans-component#trans-props
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ["br", "strong", "b", "i", "input", "li"],
    },
    detection: {
      order: [
        "path",
        "cookie",
        "querystring",
        "localStorage",
        "sessionStorage",
        "navigator",
        "htmlTag",
        "subdomain",
      ],
    },
    backend: { loadPath: "/assets/locales/{{lng}}/translation.json" },
    interpolation: { escapeValue: false },
  });

const loadingMarkup = (
  <div className="loading">
    <h3>Loading..</h3>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={loadingMarkup}>
    <HashRouter>
      <App />
    </HashRouter>
  </Suspense>
);

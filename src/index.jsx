import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { initReactI18next } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.scss";

// https://www.youtube.com/watch?v=w04LXKlusCQ
// Stopped at 12:17
i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "fr"],
    fallbackLng: "en",
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
      // react: {
      //   transSupportBasicHtmlNodes: false, // allow <br/> and simple html elements in translations
      //   transKeepBasicHtmlNodesFor: ["br", "strong", "i"], // don't convert to <1></1> if simple react elements
      // },
    },
    backend: { loadPath: "/assets/locales/{{lng}}/translation.json" },
    // interpolation: { escapeValue: true },
  });

const loadingMarkup = (
  <div className="py-4 text-center">
    <h3>Loading..</h3>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={loadingMarkup}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>
);

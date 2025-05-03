import "@/styles/app.css";
import "@/styles/fonts.css";
import "@/styles/index.css";
import "photoswipe/dist/photoswipe.css";
import React from "react";
import "react-country-state-city/dist/react-country-state-city.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import { store } from "./store";
// language switcher
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

const localPath =
  window.location.pathname.includes("/product") ||
  window.location.pathname.includes("/corporate") ||
  window.location.pathname.includes("/contact") ||
  window.location.pathname.includes("/about-us") ||
  window.location.pathname.includes("/pocket-wifi-details") ||
  window.location.pathname.includes("/package") ||
  window.location.pathname.includes("/router") ||
  window.location.pathname.includes("/sim") ||
  window.location.pathname.includes("/affiliate") ||
  window.location.pathname.includes("/how-it-works") ||
  window.location.pathname.includes("/country-coverage/filter") ||
  window.location.pathname.includes("/pocket-wifi");

const localPathThirdDepth =
  window.location.pathname.includes(
    "pocket-wifi/shipping-option/self-pickup"
  ) ||
  window.location.pathname.includes("router/shipping-option/self-pickup") ||
  window.location.pathname.includes("/package/details/") ||
  window.location.pathname.includes("sim/shipping-option/self-pickup");

const getCurrentLoadPath = (language) => {
  if (localPathThirdDepth) {
    return `../../assets/langs/${language}/translation.json`;
  } else if (localPath) {
    return `../assets/langs/${language}/translation.json`;
  } else {
    return `./assets/langs/${language}/translation.json`;
  }
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: [
      "en",
      "jp",
      "fr",
      "zhcn",
      "zhhk",
      "ms",
      "id",
      "es",
      "gm",
      "ph",
      "th",
      "vi",
    ],
    fallbackLng: "en",
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: getCurrentLoadPath("{{lng}}"),
    },
  });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

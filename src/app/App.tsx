import "./styles/index.scss";
import { Link } from "react-router-dom";

import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { Suspense } from "react";

import { classNames } from "shared/helpers";
import { useTheme } from "shared/config/theme";
import { AppRouterProvider } from "app/providers/RouterProvider";
import { Navbar } from "widgets";
import { Sidebar } from "widgets/Sidebar";
import { useTranslation } from "react-i18next";

const Test = () => {
  const { t, i18n } = useTranslation();
  const toggleLang = () => {
    i18n.changeLanguage(i18n.language==="ru"? "en":"ru");
  };

  return (
    <h1>
      {" "}
      <button onClick={toggleLang}>{t("translate")}</button>;{" "}
      {t("Welcome to React")}
    </h1>
  );
};
const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="page-content">
          <Sidebar />
          <Test />
          <AppRouterProvider />
        </div>
      </Suspense>
    </div>
  );
};

export default App;

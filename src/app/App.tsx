import "./styles/index.scss";
import { Link } from "react-router-dom";

import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { Suspense } from "react";

import { classNames } from "shared/helpers";
import { useTheme } from "shared/config/theme";
import { AppRouterProvider } from "app/providers/RouterProvider";
//theme в модель перенести

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>switch theme</button>
      <Link to={"/"}>На главную</Link>
      <Link to={"/about"}>О сайте</Link>
      <AppRouterProvider />
    </div>
  );
};

export default App;

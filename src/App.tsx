import { Route, Routes } from "react-router-dom";
import Counter from "./components/counter";
import "./styles/index.scss";
import { Link } from "react-router-dom";

import { AboutPageAsync } from "./pages/AboutPage";
import { MainPageAsync } from "./pages/MainPage";
import { Suspense } from "react";

import { useTheme } from "./theme/useTheme";
import { classNames } from "./shared/helpers/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>switch theme</button>
      <Link to={"/"}>На главную</Link>
      <Link to={"/about"}>О сайте</Link>
      <Suspense fallback="loading">
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;

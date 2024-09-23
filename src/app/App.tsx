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

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="page-content">
                    <Sidebar />
                    <AppRouterProvider />
                </div>
            </Suspense>
        </div>
    );
};

export default App;

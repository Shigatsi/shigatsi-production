import "./styles/index.scss";
import { Link } from "react-router-dom";

import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import {
    createContext,
    Suspense,
    useCallback,
    useContext,
    useState,
} from "react";

import { classNames } from "shared/helpers";
import { Theme, useTheme } from "shared/config/theme";
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

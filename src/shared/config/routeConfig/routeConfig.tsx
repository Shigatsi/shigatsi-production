import { RouteProps } from "react-router-dom";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { NotesPage } from "pages/NotesPage";
import { HabitsPage } from "pages/HabitsPage";
import { TagsPage } from "pages/TagsPage";
import { SettingsPage } from "pages/SettingsPage";

enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
    NOTES = "notes",
    TAGS = "tags",
    HABITS = "habits",
    SETTINGS = "settings"
}

const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.NOTES]: "/notes",
    [AppRoutes.HABITS]: "/habits",
    [AppRoutes.TAGS]: "/tags",
    [AppRoutes.SETTINGS]: "/settings"
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.NOTES]: {
        path: RoutePath.notes,
        element: <NotesPage />,
    },
    [AppRoutes.HABITS]: {
        path: RoutePath.habits,
        element: <HabitsPage />,
    },
    [AppRoutes.TAGS]: {
        path: RoutePath.tags,
        element: <TagsPage />,
    },
    [AppRoutes.SETTINGS]: {
        path: RoutePath.settings,
        element: <SettingsPage/>
    }
};

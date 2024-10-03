import { createContext } from "react";

export enum Theme {
    LIGHT = "light",
    DARK = "dark",
}

export interface IThemeContextProps {
    theme?: Theme;
}

export const LOCAL_STORAGE_THEME_KEY = "theme";

export const ThemeContext = createContext<IThemeContextProps>({});

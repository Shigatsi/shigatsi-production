import { useCallback, useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface IUseThemeResult {
    theme: Theme;
    switchTheme: () => void;
}
export const useTheme = (): IUseThemeResult => {
    const { theme } = useContext(ThemeContext);

    const switchTheme = useCallback(() => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }, []);

    return { theme, switchTheme };
};

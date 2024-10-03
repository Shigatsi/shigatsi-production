import React, { useState, useCallback } from "react";
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from "shared/config/theme/ThemeContext";
import { ThemeSwitcherContext } from "shared/config/theme/ThemeSwitchContext";
//TODO: use user system theme
//for access to user theme
// const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [theme, setTheme] = useState<Theme>(Theme.DARK);

    const switchTheme = useCallback(() => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }, []);
    return (
        <ThemeContext.Provider value={{ theme }}>
            <ThemeSwitcherContext.Provider value={{ switchTheme }}>
                {children}
            </ThemeSwitcherContext.Provider>
        </ThemeContext.Provider>
    );
};

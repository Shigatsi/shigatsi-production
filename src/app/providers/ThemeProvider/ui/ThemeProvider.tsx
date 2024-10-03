import React, { useState, useCallback } from "react";
import { useTheme } from "shared/config/theme";
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
    const { theme, switchTheme } = useTheme();
    const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");
    console.log('darkModePreference', darkModePreference)

    return (
        <ThemeContext.Provider value={{ theme }}>
            <ThemeSwitcherContext.Provider value={{ switchTheme }}>
                {children}
            </ThemeSwitcherContext.Provider>
        </ThemeContext.Provider>
    );
};

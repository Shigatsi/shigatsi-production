import React, { useMemo, useState, FC, ReactElement, ReactNode } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "shared/config/theme/ThemeContext";
//TODO: use user system theme
//for access to user theme
const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.DARK;

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);



  const defaultProps = useMemo(
    () => ({ theme: theme, setTheme: setTheme }),
    [theme]
  );

  return (
      <ThemeContext.Provider value={defaultProps}>
          {children}
      </ThemeContext.Provider>
  );
};

export default ThemeProvider;

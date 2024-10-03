import { createContext } from "react";

export interface IThemeSwitcherContextProps {
    switchTheme: ()=> void
}
export const ThemeSwitcherContext = createContext<IThemeSwitcherContextProps>({ switchTheme: () => null });

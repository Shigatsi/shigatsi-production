import { useContext } from "react";
import { ThemeSwitcherContext } from "./ThemeSwitchContext";

export const useThemeSwitcher = () => {

    return useContext(ThemeSwitcherContext);
};

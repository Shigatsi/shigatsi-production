import { useContext } from "react";
import { Theme, ThemeContext } from "./ThemeContext";


export const useTheme = () => {
  return useContext(ThemeContext);
};

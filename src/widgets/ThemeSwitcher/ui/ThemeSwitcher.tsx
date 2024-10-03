import React, { useContext } from "react";
import { classNames } from "shared/helpers";
import cls from "./ThemeSwitcher.module.scss";
import { useTheme, Theme, useThemeSwitcher } from "shared/config/theme";

import MoonIcon from "shared/assets/icons/MoonIcon.svg";
import SunIcon from "shared/assets/icons/SunIcon.svg";
import { AppButton, ThemeButton } from "shared/ui/AppButton";


interface IThemeSwitcher {
    className?: string;
}

export const ThemeSwitcher = ({ className }: IThemeSwitcher) => {
    const { switchTheme } = useThemeSwitcher();
    const { theme } = useTheme();

    return (
        <AppButton
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={switchTheme}
        >
            {theme === Theme.DARK ? (
                <SunIcon
                    stroke={theme === Theme.DARK ? "red" : "yellow"}
                    className="theme_icon"
                />
            ) : (
                <MoonIcon className={cls.theme_icon} />
            )}
        </AppButton>
    );
};

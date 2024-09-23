import React from "react";
import { classNames } from "shared/helpers";
import cls from "./AppButton.module.scss";

export enum ThemeButton {
    CLEAR = "clear",
}
interface IAppButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const AppButton = ({
    className,
    theme,
    children,
    ...otherProps
}: IAppButton) => {
    return (
        <button
            className={classNames(cls.AppButton, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

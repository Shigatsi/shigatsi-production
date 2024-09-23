import React, { FC } from "react";
import { classNames } from "shared/helpers";
import cls from "./AppLink.module.scss";
import { LinkProps } from "react-router-dom";
import { Link } from "react-router-dom";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface IAppLink extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<IAppLink> = ({
  to,
  children,
  className,
  theme = AppLinkTheme.PRIMARY,
  ...otherProps
}) => {
  return (
      <Link
      to={to}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
          {children}
      </Link>
  );
};

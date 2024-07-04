import React from "react";
import { Link } from "react-router-dom";
import { classNames } from "shared/helpers";
import cls from "./Navbar.module.scss";

interface INavbar {
  className?: string;
}

export const Navbar = ({ className }: INavbar) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Link to={"/"}>На главную</Link>
      <Link to={"/about"}>О сайте</Link>
    </div>
  );
};

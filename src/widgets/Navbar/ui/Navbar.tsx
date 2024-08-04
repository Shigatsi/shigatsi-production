import { classNames } from "shared/helpers";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui";
import { AppSwitcher } from "shared/ui/AppSwitcher";
import { ChangeEvent } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher/ui/ThemeSwitcher";

interface INavbar {
  className?: string;
}

export const Navbar = ({ className }: INavbar) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink className={cls.link} to={"/"}>
          На главную
        </AppLink>
        <AppLink
          className={cls.link}
          to={"/about"}
          theme={AppLinkTheme.SECONDARY}
        >
          О сайте
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        {/* LanguageSwitcher */}
      </div>
    </div>
  );
};

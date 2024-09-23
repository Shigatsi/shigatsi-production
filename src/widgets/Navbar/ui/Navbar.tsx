import { classNames } from "shared/helpers";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui";
import { ThemeSwitcher } from "widgets/ThemeSwitcher/ui/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher/LangSwitcher";
import { useTranslation } from "react-i18next";

interface INavbar {
    className?: string;
}

export const Navbar = ({ className }: INavbar) => {
    const { t } = useTranslation("translation");

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink className={cls.link} to={"/"}>
                    {t("Main")}
                </AppLink>
                <AppLink
                    className={cls.link}
                    to={"/about"}
                    theme={AppLinkTheme.SECONDARY}
                >
                    {t("About")}
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};

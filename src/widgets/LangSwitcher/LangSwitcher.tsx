import React, { FC, SVGProps } from "react";
import { classNames } from "shared/helpers";
import cls from "./LangSwitcher.module.scss";
import { useTranslation } from "react-i18next";
import { AppButton, ThemeButton } from "shared/ui";
import FlagRuIcon from "shared/assets/icons/FlagRuIcon.svg";
import FlagUsIcon from "shared/assets/icons/FlagUsIcon.svg";

interface ILangSwitcher {
  className?: string;
}

export const LangSwitcher = ({ className }: ILangSwitcher) => {
  const { t, i18n } = useTranslation();
  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  const getFlagIcon = (lang: string): JSX.Element => {
    switch (lang) {
      case "ru":
        return <FlagRuIcon />;

      default:
        return <FlagUsIcon />;
    }
  };

  return (
    <AppButton
      theme={ThemeButton.CLEAR}
      className={classNames(cls.LangSwitcher, {}, [className])}
      onClick={toggleLang}
    >
      {getFlagIcon(i18n.language)}
    </AppButton>
  );
};

import React, { useTransition } from "react";
import { useTranslation } from "react-i18next";
import { LangSwitcher, ThemeSwitcher } from "widgets";

const SettingsPage = (): JSX.Element => {
    const { t } = useTranslation("settings");
    return (
        <div>
            {t("SettingsPage")!}
            <br />
            <ThemeSwitcher />
            <br />
            <LangSwitcher />
        </div>
    );
};

export default SettingsPage;

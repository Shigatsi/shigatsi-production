import React, { useTransition } from "react";
import { useTranslation } from "react-i18next";

const SettingsPage = (): JSX.Element => {
    const { t } = useTranslation("settings");
    return <div>{t("SettingsPage")!}</div>;
};

export default SettingsPage;

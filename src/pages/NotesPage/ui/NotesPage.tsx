import React, { useTransition } from "react";
import { useTranslation } from "react-i18next";

const NotesPage = (): JSX.Element => {
    const { t } = useTranslation("notes");
    return <div>{t("NotesPage")!}</div>;
};

export default NotesPage;

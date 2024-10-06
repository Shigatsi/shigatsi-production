import { useTranslation } from "react-i18next";


const HabitsPage = (): JSX.Element => {

    const { t } = useTranslation("habits");

    return <div>{t("HabitsPage")!}</div>;
  };

  export default HabitsPage;

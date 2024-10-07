import { useTranslation } from "react-i18next";
import { AppList } from "shared/ui/AppList";

const AboutPage = (): JSX.Element => {
    const { t } = useTranslation("about");

    const people = [
        { id: 1, name: "Durward Reynolds" },
        { id: 2, name: "Kenton Towne" },
        { id: 3, name: "Therese Wunsch" },
        { id: 4, name: "Benedict Kessler" },
        { id: 5, name: "Katelyn Rohan" },
    ];
    return (
        <div>
            {t("ABOUT PAGE")!}
            <div>
                <AppList options={people}></AppList>
            </div>
        </div>
    );
};

export default AboutPage;

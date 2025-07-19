import { useTranslation } from "react-i18next";
import {
    FaReact,
    FaSass,
    FaCheck,
    FaLongArrowAltRight,
    FaArrowCircleRight,
} from "react-icons/fa";
import { SiTypescript, SiRedux, SiWebpack, SiI18Next } from "react-icons/si";
import { MdSchedule } from "react-icons/md";
import cls from "./AboutPage.module.scss";

const stackIcon: Record<string, JSX.Element> = {
    react: <FaReact />,
    ts: <SiTypescript />,
    redux: <SiRedux />,
    fsd: null, // пока нет иконки
    webpack: <SiWebpack />,
    scss: <FaSass />,
    i18n: <SiI18Next />,
    json: null, // пока нет иконки,
};

const statusIcon: Record<string, JSX.Element> = {
    done: <FaCheck />,
    current: <FaLongArrowAltRight />,
    planned: <MdSchedule />,
};
const AboutPage = (): JSX.Element => {
    const { t } = useTranslation("about");
    const features = t("features", { returnObjects: true }) as string[];
    const stack = Object.keys(t("stack", { returnObjects: true }) as string[]);
    const timeLine = Object.keys(
        t("timeline", { returnObjects: true }) as string[]
    );

    return (
        <main className={cls.about}>
            <h1 className="cls__title">{t("title")!}</h1>
            <section
                aria-labelledby="description"
                className={cls.about__section}
            >
                {t("description")}
            </section>
            <section aria-labelledby="features-title">
                <h2 id="features-title" className={cls.about__subtitle}>
                    {t("featuresTitle")}
                </h2>
                <ul className={`reset-ul ${cls.about__list}`}>
                    {features.map((el, i) => (
                        <li
                            className={`reset-li  ${cls.about__list_item}`}
                            key={i}
                        >
                            <FaArrowCircleRight /> {el}
                        </li>
                    ))}
                </ul>
            </section>
            <section
                aria-labelledby="stack-title"
                className={cls.about__section}
            >
                <h2 id="stack-title" className={cls.about__subtitle}>
                    {t("stackTitle")}
                </h2>
                <ul className={`reset-ul ${cls.about__list}`}>
                    {stack.map((key, i) => (
                        <li className={`reset-li ${cls.about__item}`} key={i}>
                            <span className="empty-icon">{stackIcon[key]}</span>
                            {t(`stack.${key}`)}
                        </li>
                    ))}
                </ul>
            </section>
            <section
                aria-labelledby="timeline-title"
                className={cls.about__section}
            >
                <h2 id="timeline-title]" className={cls.about__subtitle}>
                    {t("timelineTitle")}
                </h2>
                <ul className={`reset-ul ${cls.about__list}`}>
                    {timeLine.map((key, i) => (
                        <li className={`reset-li ${cls.about__item}`} key={i}>
                            <span>
                                {statusIcon[t(`timeline.${key}.status`)]}
                            </span>
                            <h3 className="cls__item-subtitle">
                                {t(`timeline.${key}.title`)}
                            </h3>
                            {t(`timeline.${key}.text`)}
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
};

export default AboutPage;

import React from "react";
import { classNames } from "shared/helpers";
import cls from "./PinnedContent.module.scss";
import { AppButton } from "shared/ui";

interface IPinnedContent {
    title: string;
    data: React.ReactNode[];
    className?: string;
}

export const PinnedContent = ({ title, data, className }: IPinnedContent) => {
    return (
        <section className={classNames(cls.pinned, {}, [className])}>
            <div className={classNames(cls.pinned__header, {}, [className])}>
                <h2 className={classNames(cls.pinned__title, {}, [className])}>
                    {title}
                </h2>
                <AppButton>add new {title}</AppButton>
                <AppButton>go to all {title}</AppButton>
            </div>
            <div className={classNames(cls.pinned__content, {}, [className])}>
                {data.map((el, i) => (
                    <div
                        key={i}
                        className={classNames(cls.pinned__item, {}, [
                            className,
                        ])}
                    >
                        {el}
                    </div>
                ))}
            </div>
        </section>
    );
};

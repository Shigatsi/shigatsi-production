import React, { useState } from "react";
import { classNames } from "shared/helpers";
import cls from "./Sidebar.module.scss";
import { AppButton } from "shared/ui";

interface ISidebar {
    className?: string;
}

export const Sidebar = ({ className }: ISidebar) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggleClick = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <AppButton onClick={onToggleClick}>toggle</AppButton>
        </div>
    );
};

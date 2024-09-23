import React, { useState } from "react";
import { classNames } from "shared/helpers";
import cls from "./Sidebar.module.scss";

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
            <button onClick={onToggleClick}>toggle</button>
        </div>
    );
};

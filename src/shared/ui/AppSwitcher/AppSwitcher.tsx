import React from "react";
import { classNames } from "shared/helpers";
import cls from "./AppSwitcher.module.scss";

interface IAppSwitcherProps {
    id: string;
    value?: boolean;
    captionFirst?: string;
    captionSecond?: string;
    onChange: (e: React.ChangeEvent) => void;
    disabled?: boolean;
    className?: string;
}

/**
 * Универсальный компонент - переключатель.
 *
 * @param id html идентификатор поля ввода;
 * @param captionFirst (опционально) значение для переключения (слева);
 * @param captionSecond (опционально) значение для переключения (справа);
 * @param onChange обработчик onChange;
 * @param disabled (опционально) значение атрибута отключено;
 * @param className (опционально) компоненту можно задать кастомный css класс;
 *
 * @returns {HTMLInputElement } switcher.
 */

export const AppSwitcher: React.FC<IAppSwitcherProps> = ({
    id,
    value,
    captionFirst,
    captionSecond,
    onChange,
    className,
    disabled,
}: IAppSwitcherProps) => {
    return (
        <div className={classNames(cls.AppSwitcher, {}, [className])}>
            <p className={cls.switcher__caption}>{captionFirst}</p>
            <label className={cls.switch}>
                <input
                    className={cls.switch__checkbox}
                    disabled={disabled}
                    id={id}
                    type="checkbox"
                    onChange={onChange}
                    checked={value !== undefined ? value : undefined}
                />
                <span className={cls.switch__btn} />
            </label>
            <p className={cls.switcher__caption}>{captionSecond}</p>
        </div>
    );
};

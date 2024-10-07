import {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from "@headlessui/react";
import { useState } from "react";
import { classNames } from "shared/helpers";
import cls from "./AppList.module.scss";

export enum AppListTheme {
    CLEAR = "clear",
}

type OptionsType = {
    id: number;
    name: string;
};
interface IAppListProps {
    options: OptionsType[];
    defaultSelectedOption?: number;
    className?: string;
    theme?: AppListTheme;
}

export const AppList = ({
    options,
    defaultSelectedOption,
    className,
    theme,
    ...props
}: IAppListProps): JSX.Element => {
    const [selectedOption, setSelectedOption] = useState(
        defaultSelectedOption ? options[defaultSelectedOption] : options[0]
    );

    return (
        <Listbox value={selectedOption} onChange={setSelectedOption} {...props}>
            <ListboxButton
                className={classNames(cls.ListboxButton, {}, [
                    className,
                    cls[theme],
                ])}
            >
                {selectedOption.name}
            </ListboxButton>
            <ListboxOptions
                anchor="bottom"
                className={classNames(cls.ListboxOptions, {}, [
                    className,
                    cls[theme],
                ])}
            >
                {options.map((option) => (
                    <ListboxOption
                        key={option.id}
                        value={option}
                        className={cls.ListboxOption}
                    >
                        {option.name}
                    </ListboxOption>
                ))}
            </ListboxOptions>
        </Listbox>
    );
};

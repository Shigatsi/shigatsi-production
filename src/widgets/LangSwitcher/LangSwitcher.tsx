
import React from "react";
import { classNames} from "shared/helpers";
import cls from "./LangSwitcher.module.scss";

interface ILangSwitcher {className?: string;}

export const LangSwitcher = ({ className}: ILangSwitcher) => {

return (
 <div className={classNames(cls.LangSwitcher, {}, [className])}>

 </div>
);
};
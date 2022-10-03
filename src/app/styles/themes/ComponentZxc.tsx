import cls from "./ComponentZxc.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface ComponentZxcProps {
  className?: string;
}

export const ComponentZxc = ({ className }: ComponentZxcProps) => {
  return <div className={classNames(cls.ComponentZxc, {}, [className])}></div>;
};

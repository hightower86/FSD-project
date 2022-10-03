import cls from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface Props {
  className?: string;
}

export const Navbar = ({ className }: Props) => {
  return <div className={classNames(cls.navbar, {}, [className])}></div>;
};

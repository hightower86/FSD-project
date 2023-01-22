import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme, square, size, ...otherProps } = props;

    const mods: Record<string, boolean> = {
        [cls.square]: square,
        [cls[size]]: Boolean(size),
    };
    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [cls[theme], className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

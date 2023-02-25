import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
    isOpen?: boolean;
}

export const LoginForm = (props: LoginFormProps) => {
    const { className, isOpen } = props;

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const usernameInput = useRef(null);

    useEffect(() => {
        usernameInput?.current?.focus();
    }, [isOpen]);

    const { t } = useTranslation();

    const onUserNameChange = (val: string) => {
        setUsername(val);
    };
    const onPasswordChange = (val: string) => {
        setPassword(val);
    };

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                ref={usernameInput}
                value={username}
                onChange={onUserNameChange}
                placeholder={t('Введите username')}
                autoFocus
            />
            <Input
                value={password}
                onChange={onPasswordChange}
                type="password"
                placeholder={t('Введите пароль')}
            />
            <Button className={cls.btn} size={ButtonSize.M}>
                {t('Войти')}
            </Button>
        </div>
    );
};

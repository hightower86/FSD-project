import {
    getPassword,
    getUsername,
} from 'features/AuthByUsername/model/selectors/getLoginData/getLoginData';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
    const { className } = props;

    const { t } = useTranslation();

    const dispatch = useDispatch();

    const username = useSelector(getUsername);
    const password = useSelector(getPassword);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch]
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch]
    );

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                value={username}
                onChange={onChangeUsername}
                placeholder={t('Введите username')}
                autoFocus
            />
            <Input
                value={password}
                onChange={onChangePassword}
                type="password"
                placeholder={t('Введите пароль')}
            />
            <Button
                className={cls.btn}
                size={ButtonSize.M}
                theme={ButtonTheme.OUTLINE}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});

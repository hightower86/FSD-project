import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

import { Loader } from 'shared/ui/Loader/Loader';
import { loginActions } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername';
import cls from './LoginForm.module.scss';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
    const { className } = props;

    const { t } = useTranslation();

    const dispatch = useDispatch();

    const { username, password, isLoading, error } = useSelector(getLoginState);

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

    const onLoginClick = useCallback(() => {
        if (!isLoading) {
            dispatch(loginByUsername({ username, password }));
        }
    }, [dispatch, isLoading, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            {error && <div>{error}</div>}
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
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});

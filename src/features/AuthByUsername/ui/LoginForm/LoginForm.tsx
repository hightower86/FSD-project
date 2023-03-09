import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername';
import cls from './LoginForm.module.scss';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';

export interface LoginFormProps {
    className?: string;
}

const LoginForm = memo((props: LoginFormProps) => {
    const { className } = props;

    const { t } = useTranslation();

    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    useEffect(() => {
        store.reducerManager.add('login', loginReducer);
        dispatch({ type: '@INIT loginForm reducer' });
        return () => {
            store.reducerManager.remove('login');
            dispatch({ type: '@DESTROY loginForm reducer' });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
            <Text theme={TextTheme.PRIMARY} title={t('loginForm')} />
            {error && (
                <Text
                    text={t('wrongPassword')}
                    theme={TextTheme.ERROR}
                    className={cls.errorMessage}
                />
            )}
            <Input
                value={username}
                onChange={onChangeUsername}
                placeholder={t('enterUsername')}
                autoFocus
            />
            <Input
                value={password}
                onChange={onChangePassword}
                type="password"
                placeholder={t('enterPassword')}
            />
            <Button
                className={cls.btn}
                size={ButtonSize.M}
                theme={ButtonTheme.OUTLINE}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('enter')}
            </Button>
        </div>
    );
});

export default LoginForm;

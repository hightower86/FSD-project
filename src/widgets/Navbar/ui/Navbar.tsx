/* eslint-disable i18next/no-literal-string */
import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onModalClose = useCallback(() => {
        setIsAuthOpen(false);
    }, []);

    const onModalOpen = useCallback(() => {
        setIsAuthOpen(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    console.log({ authData });

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button
                    className={cls.links}
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={onLogout}
                >
                    {t('logout')}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                className={cls.links}
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onModalOpen}
            >
                {t('login')}
            </Button>

            {isAuthOpen && (
                <LoginModal isOpen={isAuthOpen} onClose={onModalClose} />
            )}
        </div>
    );
});

/* eslint-disable i18next/no-literal-string */
import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false);

    const dispatch = useDispatch();

    const userAuthData = useSelector(getUserAuthData);

    useEffect(() => {
        if (userAuthData) {
            setIsAuthOpen(false);
        }
    }, [userAuthData]);

    const onToggleModal = useCallback(() => {
        setIsAuthOpen((prev) => !prev);
    }, []);

    const onLogoutClick = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                className={cls.links}
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={!userAuthData ? onToggleModal : onLogoutClick}
            >
                {!userAuthData ? t('login') : t('logout')}
            </Button>

            {isAuthOpen && (
                <LoginModal isOpen={isAuthOpen} onClose={onToggleModal} />
            )}
        </div>
    );
};

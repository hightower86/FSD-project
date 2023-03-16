import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonTheme, ButtonSize } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <div className={cls.menuItems}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main}
                    className={cls.link}
                >
                    <HomeIcon className={cls.icon} />
                    <span className={cls.text}>{t('mainPage')}</span>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.link}
                    to={RoutePath.about}
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.text}>{t('aboutMenu')}</span>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.link}
                    to={RoutePath.profile}
                >
                    <ProfileIcon className={cls.icon} />
                    <span className={cls.text}>{t('profile')}</span>
                </AppLink>
            </div>
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseButton}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {!collapsed ? '<' : '>'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </div>
    );
};

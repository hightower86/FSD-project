import React from 'react';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
    path: string;
    text: string;
    icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: 'mainPage',
        icon: HomeIcon,
    },
    {
        path: RoutePath.about,
        text: 'aboutMenu',
        icon: AboutIcon,
    },
    {
        path: RoutePath.profile,
        text: 'profile',
        icon: ProfileIcon,
    },
];

import React from 'react';
import HomeIcon from 'shared/assets/Icons/home.svg';
import AboutIcon from 'shared/assets/Icons/about.svg';
import ProfileIcon from 'shared/assets/Icons/profile.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: 'mainPage',
        Icon: HomeIcon,
    },
    {
        path: RoutePath.about,
        text: 'aboutMenu',
        Icon: AboutIcon,
    },
    {
        path: RoutePath.profile,
        text: 'profile',
        Icon: ProfileIcon,
    },
];

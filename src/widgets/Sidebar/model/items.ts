import React from 'react';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticleIcon from 'shared/assets/icons/article.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
    path: string;
    text: string;
    icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
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
        authOnly: true,
    },
    {
        path: RoutePath.articles,
        text: 'articles',
        icon: ArticleIcon,
        authOnly: true,
    },
];

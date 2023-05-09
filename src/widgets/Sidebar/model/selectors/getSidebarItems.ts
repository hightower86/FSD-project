import { createSelector } from '@reduxjs/toolkit';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticleIcon from 'shared/assets/icons/article.svg';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
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
    ];
    if (userData) {
        sidebarItemsList.push(
            {
                path: RoutePath.profile + userData.id,
                text: 'profile',
                icon: ProfileIcon,
                authOnly: true,
            },
            {
                path: RoutePath.articles,
                text: 'articles',
                icon: ArticleIcon,
                authOnly: true,
            }
        );
    }
    return sidebarItemsList;
});

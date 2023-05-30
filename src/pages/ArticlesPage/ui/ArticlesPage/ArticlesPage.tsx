/* eslint-disable max-len */
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import {
    Article,
    ArticleList,
    ArticleView,
    ArticleViewSelector,
} from 'entities/Article';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleLists } from 'pages/ArticlesPage/model/services/fetchArticleLists/fetchArticleLists';
import { useSelector } from 'react-redux';
import { get } from 'http';
import cls from './ArticlesPage.module.scss';
import {
    articlesPageActions,
    articlesPageReducer,
    getArticles,
} from '../../model/slices/articlePageSlice';
import {
    getArticlesPageIsLoading,
    getArticlesPageError,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const { t } = useTranslation('articles');
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlesPageActions.setView(view));
        },
        [dispatch]
    );

    useInitialEffect(() => {
        dispatch(articlesPageActions.initState());
        dispatch(fetchArticleLists({ page: 1 }));
    });

    return (
        <DynamicModuleLoader reducers={reducers}>
            <ArticleViewSelector view={view} onViewClick={onChangeView} />
            <div className={classNames(cls.ArticlesPage, {}, [className])}>
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);

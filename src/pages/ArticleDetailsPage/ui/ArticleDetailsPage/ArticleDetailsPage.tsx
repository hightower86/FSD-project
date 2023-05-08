import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { CommentList } from 'entities/Comment';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { AddCommentForm } from 'features/AddCommentForm';
import cls from './ArticleDetailsPage.module.scss';
import {
    articleDetailsCommentsReducer,
    getArticleComments,
} from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('articles');
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch]
    );

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    if (!id) {
        return (
            <div
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
            >
                {t('article-not-found')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
            >
                <ArticleDetails id={id} />
                <Text className={cls.commentTitle} title={t('comments')} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);

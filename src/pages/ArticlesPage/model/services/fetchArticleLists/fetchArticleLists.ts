import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesPageLimit } from '../../selectors/articlesPageSelectors';

interface FetchArticlesListProps {
    page?: number;
}

export const fetchArticleLists = createAsyncThunk<
    Article[],
    FetchArticlesListProps,
    ThunkConfig<string>
>('articlesPage/fetchArticleLists', async (props, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;
    const { page = 1 } = props;
    const limit = getArticlesPageLimit(getState());

    try {
        const response = await extra.api.get<Article[]>('/articles', {
            params: {
                _expand: 'user',
                _limit: limit,
                _page: page,
            },
        });

        if (!response.data) {
            throw new Error('No data');
        }

        return response.data;
    } catch (error) {
        return rejectWithValue('error');
    }
});

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { {{pascalCase}} } from '../../types/{{pascalCase}}';

export const fetch{{pascalCase}}Data = createAsyncThunk<
    {{pascalCase}},
    void,
    ThunkConfig<string>
>('profile/fetch{{pascalCase}}Data', async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
        const response = await extra.api.get<{{pascalCase}}>('/profile');

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
        return rejectWithValue('error');
    }
});

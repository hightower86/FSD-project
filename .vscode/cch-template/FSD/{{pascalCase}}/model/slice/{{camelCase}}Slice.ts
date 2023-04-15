import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetch{{pascalCase}}Data } from '../services/fetch{{pascalCase}}Data/fetch{{pascalCase}}Data';
import { {{pascalCase}}, {{pascalCase}}Schema } from '../types/profile';
import { update{{pascalCase}}Data } from '../services/update{{pascalCase}}Data/update{{pascalCase}}Data';

const initialState: {{pascalCase}}Schema = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadOnly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        cancelEdit: (state) => {
            state.readonly = true;
            state.validateErrors = undefined;
            state.form = state.data;
        },
        update{{pascalCase}}: (state, action: PayloadAction<{{pascalCase}}>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetch{{pascalCase}}Data.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetch{{pascalCase}}Data.fulfilled,
                (state, action: PayloadAction<{{pascalCase}}>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                    state.form = action.payload;
                }
            )
            .addCase(fetch{{pascalCase}}Data.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(update{{pascalCase}}Data.pending, (state) => {
                state.validateErrors = undefined;
                state.isLoading = true;
            })
            .addCase(
                update{{pascalCase}}Data.fulfilled,
                (state, action: PayloadAction<{{pascalCase}}>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                    state.form = action.payload;
                    state.readonly = true;
                    state.validateErrors = undefined;
                }
            )
            .addCase(update{{pascalCase}}Data.rejected, (state, action) => {
                state.isLoading = false;
                state.validateErrors = action.payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;

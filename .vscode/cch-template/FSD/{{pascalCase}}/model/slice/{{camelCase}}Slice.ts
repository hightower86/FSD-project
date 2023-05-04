import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetch{{pascalCase}}Data } from '../services/fetch{{pascalCase}}Data/fetch{{pascalCase}}Data';
import { {{pascalCase}}, {{pascalCase}}Schema } from '../types/{{pascalCase}}';
import { update{{pascalCase}}Data } from '../services/update{{pascalCase}}Data/update{{pascalCase}}Data';

const initialState: {{pascalCase}}Schema = {
    error: undefined,
};

export const {{pascalCase}}Slice = createSlice({
    name: '{{pascalCase}}',
    initialState,
    reducers: {
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
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
export const { actions:{{pascalCase}}Actions } ={{pascalCase}}Slice;
export const { reducer:{{pascalCase}}Reducer } ={{pascalCase}}Slice;

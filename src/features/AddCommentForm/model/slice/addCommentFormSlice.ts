import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/addCommentForm';

const initialState: AddCommentFormSchema = {
    text: '',
};

export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchAddCommentFormData.pending, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(
    //             fetchAddCommentFormData.fulfilled,
    //             (state, action: PayloadAction<AddCommentForm>) => {
    //                 state.isLoading = false;
    //                 state.data = action.payload;
    //                 state.form = action.payload;
    //             }
    //         )
    //         .addCase(fetchAddCommentFormData.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         })
    //         .addCase(updateAddCommentFormData.pending, (state) => {
    //             state.validateErrors = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(
    //             updateAddCommentFormData.fulfilled,
    //             (state, action: PayloadAction<AddCommentForm>) => {
    //                 state.isLoading = false;
    //                 state.data = action.payload;
    //                 state.form = action.payload;
    //                 state.readonly = true;
    //                 state.validateErrors = undefined;
    //             }
    //         )
    //         .addCase(updateAddCommentFormData.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.validateErrors = action.payload;
    //         });
    // },
});

// Action creators are generated for each case reducer function
export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;

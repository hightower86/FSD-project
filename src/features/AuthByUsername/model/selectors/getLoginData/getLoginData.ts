import { createSelector } from '@reduxjs/toolkit';
import { getLoginState } from '../getLoginState/getLoginState';

export const getUsername = createSelector(
    getLoginState,
    (loginState) => loginState.username
);

export const getPassword = createSelector(
    getLoginState,
    (loginState) => loginState.password
);

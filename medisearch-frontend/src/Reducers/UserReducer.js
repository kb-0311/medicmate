import { createReducer } from "@reduxjs/toolkit";
const initialState = { isAuthenticated: false };

export const userReducer = createReducer(initialState, {
        LoginRequest: (state) => {
            state.loading = true;
            state.isAuthenticated = false;
        },
        LoginSuccess: (state, action) => {
            state.loading = false;
            state.account = action.account;
            state.MetaMaskProvider = action.MetaMaskProvider;
            state.isAuthenticated = true;
        },
        LoginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.isAuthenticated = false;
        },
        LogoutUserRequest: (state) => {
            state.loading = true;
        },
        LogoutUserSuccess: (state) => {
            state.loading = false;
            state.account = undefined;
            state.MetaMaskProvider = undefined;
            state.isAuthenticated = false;
        },
        LogoutUserFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.isAuthenticated = true;
        },
    });
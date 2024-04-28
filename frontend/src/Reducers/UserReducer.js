import { createReducer } from "@reduxjs/toolkit";
const initialState = { isAuthenticated: false };

export const userReducer = createReducer(initialState, {
    LoadRequestRequest: (state)=>{
        state.loading = true;
    },
    LoadRequestSuccess: (state , action)=>{
        state.loading = false;
        state.pendingRequest= action.pendingRequest;
    },
    LoadRequestFailure: (state , action)=>{
        state.loading = false;
        state.error = action.payload;
        state.account = null;
    },
        LoadUserRequest: (state)=>{
            state.loading = true;
            state.isAuthenticated = false;
        },
        LoadUserSuccess: (state , action)=>{
            state.loading = false;
            state.account = action.account;
            state.isAuthenticated = true;
        },
        LoadUserFailure: (state , action)=>{
            state.loading = false;
            state.error = action.payload;
            state.isAuthenticated = false;
            state.account = null;
        },
        LoginRequest: (state) => {
            state.loading = true;
            state.isAuthenticated = false;
        },
        LoginSuccess: (state, action) => {
            state.loading = false;
            state.account = action.account;
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
        DiseasesRequest: (state) => {
            state.loading = true;
        },
        DiseasesSuccess: (state, action) => {
            state.loading = false;
            state.Diseases = action.data;
        },
        DiseasesFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        PrescriptionRequest: (state) => {
            state.loading = true;
        },
        PrescriptionSuccess: (state, action) => {
            state.loading = false;
            state.Prescription = action.data;
        },
        PrescriptionFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    });
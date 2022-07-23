import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import AuthenticationService from "../../../service/AuthenticationService";

import jwt_decode from "jwt-decode";
import storePersist from "../../storePersist";
const AUTH_ACCOUNT = process.env.REACT_APP_AUTH_ACCOUNT;

export const currentRoleAnonymous = () => {
    return {
        authority: "ANONYMOUS"
    }
}

export const initialState = {
    loading: 'idle',
    currentRequestId: undefined,
    isLoggedIn: false,
    authorities: [currentRoleAnonymous()],
    apiKey: undefined,
};

export const loginAccount = createAsyncThunk(
    "login",
    async (parametersData) => {
        const { reCAPTCHA, email, password } = parametersData;
        const response = await AuthenticationService.login(reCAPTCHA, email, password);
        return response;
    }
);

const authenticationSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        logout: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            return {
                ...state,
                isLoggedIn: false,
                authorities: [currentRoleAnonymous()],
                apiKey: undefined
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAccount.pending, (state, action) => {
                if (state.loading === 'idle') {
                    state.loading = 'pending'
                    state.currentRequestId = action.meta.requestId
                }
            })
            .addCase(loginAccount.fulfilled, (state, action) => {
                const { requestId } = action.meta
                if (
                    state.loading === 'pending' &&
                    state.currentRequestId === requestId
                ) {
                    let currentData = action.payload.data;
                    const { apiKey } = currentData;
                    const currentApiKeyEncoded = apiKey !== null ? apiKey : null;
                    const currentApiKeyDecoded = jwt_decode(currentApiKeyEncoded);
                    const isLoggedIn = true;
                    const authValueI = {
                        apiKey: currentApiKeyEncoded
                    }
                    storePersist.set(AUTH_ACCOUNT, authValueI)
                    return {
                        ...state,
                        loading: 'idle',
                        currentRequestId: undefined,
                        isLoggedIn: isLoggedIn,
                        authorities: currentApiKeyDecoded.authorities,
                        apiKey: currentApiKeyEncoded
                    }
                }
            })
            .addCase(loginAccount.rejected, (state, action) => {
                var status400 = 400;
                var status401 = 401;
                var status403 = 403;
                var status404 = 404;
                var status405 = 405;
                var status500 = 500;
                const { requestId } = action.meta
                const { message } = action.error;
                switch (message) {
                    case "Request failed with status code 400":
                        action.payload = { status: status400 }
                        break;
                    case "Request failed with status code 401":
                        action.payload = { status: status401 }
                        break;
                    case "Request failed with status code 403":
                        action.payload = { status: status403 }
                        break;
                    case "Request failed with status code 404":
                        action.payload = { status: status404 }
                        break;
                    case "Request failed with status code 405":
                        action.payload = { status: status405 }
                        break;
                    case "Request failed with status code 500":
                        action.payload = { status: status500 }
                        break;
                    default:
                }
                if (
                    state.loading === 'pending' &&
                    state.currentRequestId === requestId
                ) {
                    state.loading = 'idle'
                    state.error = action.error
                    state.currentRequestId = undefined
                }
            })
    },
});

export const { logout } = authenticationSlice.actions;

const { reducer } = authenticationSlice;

export default reducer;
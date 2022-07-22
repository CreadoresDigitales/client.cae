import { createSlice } from "@reduxjs/toolkit";

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
    token: undefined,
};

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
});

export const { logout } = authenticationSlice.actions;

const { reducer } = authenticationSlice;

export default reducer;
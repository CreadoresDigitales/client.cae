import {
    combineReducers
} from '@reduxjs/toolkit';

import authenticationReducer from './authentication/authenticationSlice';

const combinedReducer = combineReducers({
    authentication: authenticationReducer
});

export default (state, action) => {
    return combinedReducer(state, action);
};
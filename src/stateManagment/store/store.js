// file: store.js
import { configureStore } from '@reduxjs/toolkit';
// We'll use redux-logger just as an example of adding another middleware
// import logger from 'redux-logger';
import jwt_decode from "jwt-decode";

import rootReducer from '../features/rootReducer'

import storePersist from "../storePersist";

const AUTH_ACCOUNT = process.env.REACT_APP_AUTH_ACCOUNT;

const currentApiKey = storePersist.get(AUTH_ACCOUNT);

const authenticationInitialState = (currentApiKey) => {
    const { apiKey } = currentApiKey;

    const currentApiKeyEncoded = apiKey !== null ? apiKey : null;
    const currentApiKeyDecoded = jwt_decode(currentApiKeyEncoded);
    let _authorities = [];
    if (currentApiKeyDecoded.authorities.length > 1) {
        currentApiKeyDecoded.authorities.forEach(role => {
            _authorities.push(role.authority);
        });
    } else {
        const result = currentApiKeyDecoded.authorities.find(item => item.authority);
        _authorities.push({ authority: result.authority });
    }
    var AuthenticationInitialState = {
        isLoggedIn: true,
        apiKey: currentApiKeyEncoded,
        authorities: _authorities
    }
    return (AuthenticationInitialState)
}

const preloadedState = storePersist.get(AUTH_ACCOUNT)
    ? { authentication: authenticationInitialState(currentApiKey) }
    : {};

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
    // .concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState
})

export default store;
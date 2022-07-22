import React, { useEffect } from 'react';
import { Route, useLocation, withRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./stateManagment/store/store";
import LoginPage from './pages/LoginPage';

import App from './App';

const ScrollToTop = () => {

    let location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location]);

    switch (location.pathname) {
        case '/login':
            return <Provider store={store}>
                <Route path="/login" component={LoginPage} />
            </Provider>
        default:
            return <Provider store={store}>
                <App />
            </Provider>
    }
}

export default withRouter(ScrollToTop);

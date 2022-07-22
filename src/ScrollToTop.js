import React, { useEffect } from 'react';
import { useLocation, withRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./stateManagment/store/store";

import App from './App';

const ScrollToTop = () => {

    let location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location]);

    switch (location.pathname) {
        default:
            return <Provider store={store}>
                <App />
            </Provider>
    }
}

export default withRouter(ScrollToTop);

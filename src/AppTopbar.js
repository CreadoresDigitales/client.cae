import React, { Fragment, useState, useEffect, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { useDispatch, useSelector } from "react-redux";

import { addLocale } from 'primereact/api';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { StyleClass } from 'primereact/styleclass';
import { Ripple } from 'primereact/ripple';
import { Toast } from "primereact/toast";


import { logout } from "./stateManagment/features/authentication/authenticationSlice";

import storePersist from "./stateManagment/storePersist";

const AUTH_ACCOUNT = process.env.REACT_APP_AUTH_ACCOUNT;

const messageToast = (toast, severity, summary, detail) => {
    toast.current.show({ severity: severity, summary: summary, detail: detail, life: 3000 });
}

export const AppTopbar = (props) => {

    /* Initialize state to hold */
    const auth = useSelector((state) => state.authentication)
    let isLoggedIn = auth.isLoggedIn;
    const roles = auth.authorities;


    const toast = useRef(null);
    const [logoutAccountDialog, setLogoutAccountDialog] = useState(false);
    const [showNavDashboard, setShowNavDashboard] = useState(false);
    const [grantedAuthorities, setGrantedAuthorities] = useState('');
    const btnRef1 = useRef(null);

    const history = useHistory();
    // Access the pathname object with useLocation()
    const pathname = useLocation().pathname;
    // Access the dispatch object with useDispatch()
    const dispatch = useDispatch();

    const getComponent = () => {
        switch (pathname) {
            case '/dashboard':
                setShowNavDashboard(true);
                break;
            default:
        }
    }

    useEffect(() => {
        // first time to fetch data
        if (pathname !== "/dashboard") {
            setShowNavDashboard(false);
        } else {
            getComponent();
            if (isLoggedIn === false) {
            } else {

                if (roles.length > 0) {
                    let _authority;
                    if (roles.length > 1) {
                        _authority = [];
                        roles.forEach(role => {
                            _authority.push(role.authority);
                        });
                    } else {
                        const result = roles.find(item => item.authority);
                        _authority = result.authority;
                        switch (_authority) {
                            case "ROLE_ADMIN":
                                setGrantedAuthorities(_authority);
                                break;
                            case "ROLE_GUEST":
                                setGrantedAuthorities(_authority);
                                break;
                            default:
                            // do nothing
                        }
                    }
                }
            }
        }
    }, [pathname, isLoggedIn]); // eslint-disable-line react-hooks/exhaustive-deps

    const confirmLogoutButtonClick = () => {
        let item = storePersist.get(AUTH_ACCOUNT);
        if (item !== null) {
            history.push({
                pathname: '/'
            });
            storePersist.remove(AUTH_ACCOUNT)
            dispatch(logout());
            setLogoutAccountDialog(false);
            messageToast(toast, 'info', "Información", "Tu cuenta se ha cerrado sessión correctamente");
        }
    }

    const openLogoutAccountDialog = () => {
        setLogoutAccountDialog(true);
    }

    const hideLogoutAccountDialog = () => {
        setLogoutAccountDialog(false);
    }

    const logoutAccountDialogFooter = (
        <Fragment>
            <Button icon="pi pi-times" className="p-button-outlined p-button-danger" onClick={hideLogoutAccountDialog} />
            <Button icon="pi pi-check" className="p-button-outlined p-button-success" autoFocus onClick={confirmLogoutButtonClick} />
        </Fragment>
    )


    const scrollToDiv = (id) => {
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth'
        });
    }

    return (
        <Fragment>
            <div className="layout-topbar">

                <img src={props.layoutColorMode === 'light' ? 'assets/layout/images/logo.png' : 'assets/layout/images/logo.png'} alt="logo" height="60px" />

                {isLoggedIn === false ? (
                    <Fragment>
                    </Fragment>
                ) : (
                    <Fragment>
                        <button type="button" className="p-link  layout-menu-button layout-topbar-button" onClick={props.onToggleMenuClick}>
                            <i className="pi pi-bars" />
                        </button>
                    </Fragment>
                )}

                <button type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={props.onMobileTopbarMenuClick}>
                    <i className="pi pi-ellipsis-v" />
                </button>

                <ul className={classNames("layout-topbar-menu lg:flex origin-top", { 'layout-topbar-menu-mobile-active': props.mobileTopbarMenuActive })}>
                    {isLoggedIn === false ? (
                        <Fragment>
                            <li className="md:mr-0 lg:mr-4">
                                <Button className="layout-topbar-button-fix1 p-button-outlined p-button-secondary" onClick={() => scrollToDiv("home")}>
                                    <i className="pi pi-home px-2" style={props.layoutColorMode === 'light' ? { color: 'black' } : { color: 'white' }} />
                                    <span className="px-3" style={props.layoutColorMode === 'light' ? { color: 'black' } : { color: 'white' }}>Inicio</span>
                                </Button>
                            </li>
                            <li className="md:mr-0 lg:mr-4">
                                <Button className="layout-topbar-button-fix1 p-button-outlined p-button-secondary" onClick={() => scrollToDiv("features")}>
                                    <i className="pi pi-briefcase px-2" style={props.layoutColorMode === 'light' ? { color: 'black' } : { color: 'white' }} />
                                    <span className="px-3" style={props.layoutColorMode === 'light' ? { color: 'black' } : { color: 'white' }}>Características</span>
                                </Button>
                            </li>
                            <li className="md:mr-0 lg:mr-4">
                                <Button className="layout-topbar-button-fix1 p-button-outlined p-button-secondary" onClick={() => scrollToDiv("opinions")}>
                                    <i className="pi pi-comment px-2" style={props.layoutColorMode === 'light' ? { color: 'black' } : { color: 'white' }} />
                                    <span className="px-3" style={props.layoutColorMode === 'light' ? { color: 'black' } : { color: 'white' }}>Opiniones</span>
                                </Button>
                            </li>
                            <li className="md:mr-0 lg:mr-4">
                                <Button className="layout-topbar-button-fix1 p-button-outlined p-button-secondary" onClick={() => scrollToDiv("contact")}>
                                    <i className="pi pi-question-circle px-2" style={props.layoutColorMode === 'light' ? { color: 'black' } : { color: 'white' }} />
                                    <span className="px-3" style={props.layoutColorMode === 'light' ? { color: 'black' } : { color: 'white' }}>Contacto</span>
                                </Button>
                            </li>

                        </Fragment>
                    ) : (
                        <Fragment>
                            {showNavDashboard === false ? (
                                <Fragment>

                                </Fragment>
                            ) : (
                                <Fragment>
                                    <li className="md:mr-0 lg:mr-4">
                                        <Button className="layout-topbar-button-fix1 p-button-outlined p-button-secondary" onClick={() => scrollToDiv("app-index")}>
                                            <i className="pi pi-fw pi-home px-2" style={props.layoutColorMode === 'light' ? { color: 'black' } : { color: 'white' }} />
                                            <span className="px-3" style={props.layoutColorMode === 'light' ? { color: 'black' } : { color: 'white' }}>Inicio</span>
                                        </Button>
                                    </li>
                                    {(() => {
                                        switch (grantedAuthorities) {
                                            case 'ROLE_GUEST':
                                                return (
                                                    <Fragment>
                                                        <li className="md:mr-0 lg:mr-4">
                                                            <Button className="layout-topbar-button-fix1 p-button-outlined p-button-secondary" onClick={() => scrollToDiv("app-use")}>
                                                                <i className="pi pi-briefcase px-2" style={props.layoutColorMode === 'light' ? { color: 'black' } : { color: 'white' }} />
                                                                <span className="px-3" style={props.layoutColorMode === 'light' ? { color: 'black' } : { color: 'white' }}>Tutorial</span>
                                                            </Button>
                                                        </li>
                                                        <li className="md:mr-0 lg:mr-4">
                                                            <Button className="layout-topbar-button-fix1 p-button-outlined p-button-secondary" onClick={() => scrollToDiv("app-question")}>
                                                                <i className="pi pi-question-circle px-2" style={props.layoutColorMode === 'light' ? { color: 'black' } : { color: 'white' }} />
                                                                <span className="px-3" style={props.layoutColorMode === 'light' ? { color: 'black' } : { color: 'white' }}>Preguntas</span>
                                                            </Button>
                                                        </li>
                                                    </Fragment>
                                                );
                                            default:
                                        }
                                    })()}
                                </Fragment>
                            )}
                            <li className="md:mr-0 lg:mr-4">
                                <Button className="layout-topbar-button-fix1 p-button-outlined p-button-secondary" onClick={openLogoutAccountDialog}>
                                    <i className="pi pi-sign-out px-2" style={props.layoutColorMode === 'light' ? { color: 'black' } : { color: 'white' }} />
                                    <span className="px-3" style={props.layoutColorMode === 'light' ? { color: 'black' } : { color: 'white' }}>Características</span>
                                </Button>
                            </li>
                        </Fragment>
                    )}
                </ul>
            </div>
        </Fragment>
    );
}

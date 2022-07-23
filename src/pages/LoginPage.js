import React, { Fragment, useEffect, useRef, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";

import classNames from 'classnames';

import { addLocale } from 'primereact/api';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Divider } from 'primereact/divider';
import { Carousel } from 'primereact/carousel';
import { Menu } from 'primereact/menu';
import { Ripple } from 'primereact/ripple';
import { Toast } from 'primereact/toast';

import {
    loginAccount
} from '../stateManagment/features/authentication/authenticationSlice';

const RECAPTCHA_KEY = process.env.REACT_APP_RECAPTCHA_KEY;

const LoginPage = () => {

    const history = useHistory();
    // Access the pathname object with useLocation()
    const pathname = useLocation().pathname;
    const dispatch = useDispatch();
    const menu = useRef(null);
    const reCaptchaLoginRef = useRef();
    const [checked, setChecked] = useState(false);

    const features = [
        { title: 'Selecciona los cursos disponibles en la plataforma sin ninguna limitación.', image: 'live-collaboration.svg' },
        { title: 'Ten la confianza de que tus datos están seguros.', image: 'security.svg' }
    ];

    const items = [
        {
            label: 'Idiomas',
            items: [
                {
                    label: 'Inglés US',
                    template: (item, options) => {

                        return (
                            /* custom element */
                            // eslint-disable-next-line
                            <a className={options.className} target={item.target}>
                                <span className={classNames(options.iconClassName, 'fa fa-fw fas fa-language')}></span>
                                <span className={options.labelClassName}>{item.label}</span>
                            </a>
                        );
                    }
                },
                {
                    label: 'spanish',
                    template: (item, options) => {
                        return (
                            /* custom element */
                            // eslint-disable-next-line
                            <a className={options.className} target={item.target}>
                                <span className={classNames(options.iconClassName, 'fa fa-fw fas fa-language')}></span>
                                <span className={options.labelClassName}>{item.label}</span>
                            </a>

                        );
                    }
                }
            ]
        }
    ];

    const getComponent = () => {
        switch (pathname) {
            case '/login':
                document.documentElement.style.fontSize = 12 + 'px';
                break;
            default:
        }
    }

    useEffect(() => {
        // first time to fetch data
        if (pathname !== "/login") {
        } else {
            getComponent();
        }
    }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

    const handleOnSubmitLoginSocial = async () => {
        const email = "examplesocial@mail.com";
        const password = "Example1#";
        const reCAPTCHA = "reCAPTCHA";
        dispatch(loginAccount({ reCAPTCHA, email, password }))
            .then((response) => {
                let isErrorFetch = response.error !== undefined
                if (!isErrorFetch) {
                    history.push({
                        pathname: '/dashboard'
                    });
                } else {
                }
            })
            .catch(() => {
                console.log(
                    'No internet connection found. App is running in offline mode.'
                );
            });
    }

    return (
        <Fragment>
            <div className="px-4 py-8 md:px-6 lg:px-8">
                <div className="flex flex-wrap shadow-2">
                    <div className="w-full lg:w-6 px-0 py-4 lg:p-7 bg-blue-50">
                        <Button type="button" label={"Regresar a la página principal"} className="mb-6" onClick={() => history.push({ pathname: '/' })} />
                        <Carousel value={features} itemTemplate={(feature) =>
                            <div className="text-center mb-8">
                                <img src={`images/blocks/illustration/${feature.image}`} alt={"imageContent"} className="mb-6 w-6" />
                                <div className="mx-auto font-medium text-xl mb-4 text-blue-900">{feature.title}</div>
                            </div>} />
                    </div>
                    <div className="w-full lg:w-6 p-4 lg:p-7 surface-card">
                        <div className="flex align-items-center justify-content-between mb-7">
                            <span className="text-2xl font-medium text-900">Iniciar sessión</span>
                            <Menu model={items} popup ref={menu} id="popup_menu" />
                            <Button label={"Disponibles"} icon="pi pi-bars" onClick={(event) => menu.current.toggle(event)} aria-controls="popup_menu" aria-haspopup />
                        </div>
                        <div className="flex align-items-center justify-content-between mb-7">
                            <span className="text-2xl font-medium text-900">{"usuario"}</span>
                            <button className="p-ripple ml-2 w-6 font-medium border-1 surface-border surface-100 py-3 px-2 p-component hover:surface-200 active:surface-300 text-900 cursor-pointer transition-colors transition-duration-150 inline-flex align-items-center justify-content-center"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleOnSubmitLoginSocial();
                                }}>
                                <i className="pi pi-google text-pink-400 mr-2"></i>
                                <span>Iniciar sessión con cuenta de Goggle</span>
                                <Ripple />
                            </button>
                        </div>
                        <Divider align="center" className="my-4">
                            <span className="text-600 font-normal text-sm">o</span>
                        </Divider>
                        <div className="flex align-items-center justify-content-center mb-7">
                            <span className="text-2xl font-medium text-900">Como administrador</span>
                        </div>
                        <div className="p-grid p-fluid mb-4">
                            <div className="p-inputgroup">
                                <span className="p-float-label">
                                    <InputText id="email" name="email" autoComplete="off" />
                                    <label htmlFor="email"></label>
                                </span>
                            </div>
                        </div>
                        <div className="p-grid p-fluid mb-4">
                            <div className="p-inputgroup">
                                <span className="p-float-label">
                                    <InputText id="password" name="password" autoComplete="off"></InputText>
                                </span>
                                <Button type="button" icon={checked ? "fa fa-fw fa-eye" : "fa fa-fw fa-eye-slash"} className="p-d-none p-d-md-inline-flex" onClick={(e) => setChecked(currentChecked1 => !currentChecked1)} />
                            </div>
                        </div>
                        <div className="p-grid mb-4">
                            <div className="flex align-items-center justify-content-center ">
                            </div>
                        </div>
                        <div className="p-grid mb-6">
                            <div className="flex align-items-center justify-content-between mb-2">
                                <div className="flex align-items-center">
                                    <Checkbox id="rememberme" binary className="mr-2" />
                                    <label htmlFor="rememberme">Aceptar términos</label>
                                </div>
                                <a href="# " className="font-medium text-blue-500 hover:text-blue-700 cursor-pointer transition-colors transition-duration-150">¿Olvidaste tu contraseña?</a>
                            </div>
                        </div>
                        <Button type="button" label={"Iniciar sessión"} className="w-full py-3 font-medium" />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(LoginPage, comparisonFn);

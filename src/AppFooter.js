import React, { Fragment } from 'react';

import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

export const AppFooter = (props) => {

    return (
        <Fragment>
            <div className="layout-footer">
                <div className="card px-4 py-8 md:px-6 lg:px-8 m-0" style={{ borderRadius: '0px' }}>
                    <div className="grid -mr-3 -ml-3">
                        <div className="col-12 lg:col-4 p-3">
                            <span className="text-900 font-bold block border-bottom-1 surface-border py-4 mb-4" style={{ textTransform: 'uppercase' }}>cuenta</span>
                            <span className="text-500 block mt-4 line-height-3" style={{ textTransform: 'uppercase' }}>Obtenga información de actualizaciones de la plataforma</span>
                            <div className="p-inputgroup mt-3 mx-auto lg:mx-0" style={{ maxWidth: '30rem' }}>
                                <Button type="button" icon="pi pi-envelope" className="text-500 hover:text-90 surface-100 surface-border" />
                                <InputText placeholder="Correo electrónico" className="border-y-1 text-500 hover:text-90 border-x-none surface-border" />
                                <Button icon="pi pi-arrow-right" className="text-500 hover:text-90 surface-100 surface-border" />
                            </div>
                        </div>
                        <div className="col-12 lg:col-4 p-3">
                            <span className="text-900 font-bold block border-bottom-1 surface-border py-4 mb-4" style={{ textTransform: 'uppercase' }}>legal</span>
                            <ul className="list-none p-0">
                                <li className="mt-3">
                                    <span className="cursor-pointer text-500 block mt-4 line-height-3" style={{ textTransform: 'uppercase' }}>datos de privacidad</span>
                                </li>
                                <li className="mt-3">
                                    <span className="cursor-pointer text-500 block mt-4 line-height-3" style={{ textTransform: 'uppercase' }}>términos de servicio</span>
                                </li>
                                <li className="mt-3">
                                    <span className="cursor-pointer text-500 block mt-4 line-height-3" style={{ textTransform: 'uppercase' }}>información legal</span>
                                </li>
                            </ul>
                        </div>

                        <div className="col-12 lg:col-4 p-3">
                            <span className="text-900 font-bold block border-bottom-1 surface-border py-4 mb-4" style={{ textTransform: 'uppercase' }}>acerca de la plataforma</span>
                            <span className="text-500 mt-3">Urna molestie at elementum eu facilisis. Libero justo laoreet sit amet cursus. Ornare quam viverra orci sagittis eu volutpat odio. Id porta nibh venenatis cras sed felis eget velit. In hac habitasse platea dictumst quisque.</span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

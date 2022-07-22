import React, { Fragment } from 'react';

const Dashboard = () => {

    return (
        <Fragment>
            <div id="app-index" className="layout-section">
                <div className="section-topic-shadow">
                    <div className="section-topic">
                        Bienvenido Usuario
                    </div>
                </div>
                <div className="card mb-8" style={{ borderRadius: '8px' }}>
                    <div className="flex flex-wrap">
                        <div className="w-full xl:w-6 p-3 pr-5">
                            <span className="text-indigo-600 font-bold mb-4 block">Hola, un saludo cordial.</span>
                            <div className="font-bold text-900 text-5xl mb-4">A continuacion se te muestra un video, el cual que explica brevemente el contenido de la plataforma.</div>
                        </div>
                        <div className="w-full xl:w-6 p-3 flex align-items-center justify-content-center p-2 lg:p-4 mt-5 xl:mt-0" style={{ borderRadius: '30px' }}>
                            <div className="relative w-full" style={{ paddingBottom: '56.25%', height: '0' }}>
                                <video className="absolute top-0 left-0 w-full h-full" width="560" height="315"
                                    src={'videos/demo//Peaceful video intro5seg.mp4'} title="media player"
                                    frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
                                    controls controlsList="nodownload"
                                ></video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="app-question" className="layout-section">
                <div className="section-topic-shadow">
                    <div className="section-topic">Preguntas
                    </div>
                </div>
                <div className="card">
                    <div className="col-12 flex justify-content-center mb-3">
                        <span className="text-3xl block text-cyan-900 font-bold">Contactos de nuestras redes sociales</span>
                    </div>
                    <div className="flex flex-column md:flex-row md:justify-content-between xl:justify-content-evenly">
                        <span className="inline-flex align-items-center mb-3 md:mb-0 p-5 border-left-2 xl:border-left-none xl:border-top-2 border-blue-800">
                            <i className="pi pi-facebook text-base xl:text-2xl mr-3 text-blue-800 cursor-pointer"></i>
                            <span className="text-base  text-3xl md:text-2xl font-medium text-blue-800">Facebook</span>
                        </span>
                        <span className="inline-flex align-items-center mb-3 md:mb-0 p-5 border-left-2 xl:border-left-none xl:border-top-2 border-pink-700">
                            <i className="pi pi-instagram text-base xl:text-2xl mr-3 text-pink-700 cursor-pointer"></i>
                            <span className="text-base text-3xl md:text-2xl font-medium text-pink-700">Instagram</span>
                        </span>
                        <span className="inline-flex align-items-center mb-3 md:mb-0 p-5 border-left-2 xl:border-left-none xl:border-top-2 border-blue-400">
                            <i className="pi pi-twitter text-base xl:text-2xl mr-3 text-blue-400 cursor-pointer"></i>
                            <span className="text-base text-3xl md:text-2xl font-medium text-blue-400">Twitter</span>
                        </span>
                    </div>
                </div>

            </div>
        </Fragment >
    );
}

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(Dashboard, comparisonFn);

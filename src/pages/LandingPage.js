import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';

const LandingPage = () => {

    const history = useHistory();

    return (
        <Fragment>
            <div id="home" className="flex flex-column align-items-center mb-5">
                <div className="grid m-0">
                    <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                        <section>
                            <span className="block text-5xl font-bold mb-1">Esta plataforma fue creada para ayudarte</span>
                            <div className="text-5xl text-primary font-bold mb-3">y te preguntas porque usarla?</div>
                            <Button type="button" className="p-button-raised p-button p-component" onClick={() => history.push({
                                pathname: '/login'
                            })}>
                                <span className="p-button-label">"Ir a la pagina de inicia sesión</span>
                            </Button>
                        </section>
                    </div>
                    <div className="col-12 md:col-6">
                        <div className="col-12 lg:col-12">
                            <div className="card mt-3 mb-0">
                                <div className="text-900 text-5xl md:text-3xl font-medium">Capacitate a tu necesidades</div>
                                <div className="mt-3 text-800 text-xl font-medium md:text-justify">
                                    En esta plataforma contiene específicos cursos, los cuales tienen el formato MOOC (Curso Masivo Abierto y En Línea) Tiene por objeto ayudar a las mujeres mexicanas, que adquieran habilidades técnicas según su elección curso de capacitación para que puedan desenvolverse fácilmente en el sector al que pertenecen, potencial izando así la apertura a nuevas oportunidades.
                                </div>
                            </div>
                            <div className="card mt-3 mb-0">
                                <div className="text-900 text-5xl md:text-3xl font-medium">Requisitos</div>
                                <div className="mt-3 text-800 text-xl font-medium">Conocimientos básicos de navegación en internet.</div>
                                <div className="mt-3 text-800 text-xl font-medium">Teléfono o Computadora con conexión a internet.</div>
                                <div className="mt-3 text-800 text-xl font-medium">Tener una cuenta de red social (Google,Facebook).</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="features" className="layout-section">
                <div className="section-topic-shadow">
                    <div className="section-topic">Recursos</div>
                </div>
                <div className="px-3 xl:px-6 mb-6">
                    <div className="text-900 text-5xl md:text-3xl font-medium mb-3 text-center">Que ofrece esta plataforma de capacitacion laboral?</div>
                    <p className="text-700 mt-0 mb-4 text-3xl md:text-2xl text-center">
                        "Pone a disposición a las mujeres mexicanas una oferta de cursos en linea con una amplia e innovadoras soluciones para promover la profesionalización de las personas e impulsar su ingreso al campo laboral a través de:
                    </p>
                    <div className="grid">
                        <div className="col-12 lg:col-6 p-3">
                            <div style={{ borderRadius: '10px' }} className='shadow-2 surface-card p-4 border-2 border-transparent'>
                                <div className="flex align-items-center">
                                    <div className="mr-3">
                                        <span className="inline-flex justify-content-center align-items-center bg-blue-100" style={{ borderRadius: '4px', width: '45px', height: '45px' }}>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-900 text-xl mb-2 font-medium">Cursos en línea</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 lg:col-6 p-3">
                            <div style={{ borderRadius: '10px' }} className='shadow-2 surface-card p-4 border-2 border-transparent'>
                                <div className="flex align-items-center">
                                    <div className="mr-3">
                                        <span className="inline-flex justify-content-center align-items-center bg-blue-100" style={{ borderRadius: '4px', width: '45px', height: '45px' }}>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-900 text-xl mb-2 font-medium">Material didactico para cada capacitacion que escojas</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 lg:col-6 p-3">
                            <div style={{ borderRadius: '10px' }} className='shadow-2 surface-card p-4 border-2 border-transparent'>
                                <div className="flex align-items-center">
                                    <div className="mr-3">
                                        <span className="inline-flex justify-content-center align-items-center bg-blue-100" style={{ borderRadius: '4px', width: '45px', height: '45px' }}>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-900 text-xl mb-2 font-medium">Certificación de competencias laborales</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 lg:col-6 p-3">
                            <div style={{ borderRadius: '10px' }} className='shadow-2 surface-card p-4 border-2 border-transparent'>
                                <div className="flex align-items-center">
                                    <div className="mr-3">
                                        <span className="inline-flex justify-content-center align-items-center bg-blue-100" style={{ borderRadius: '4px', width: '45px', height: '45px' }}>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-900 text-xl mb-2 font-medium">Asesoriamiento de un tutor en línea</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-6">
                    <div className="text-900 text-5xl md:text-3xl font-medium mb-3 text-center">Beneficios al utilizar esta plataforma:</div>
                    <div className="grid">
                        <div className="col-12 lg:col-4">
                            <div className="p-4 text-center">
                                <img src="images/pages/landing/icon-gorgeous@2x.png" alt="content-courses" className="mx-auto block mb-4" />
                                <p className="mt-0 mb-4 text-900 text-xl font-medium">Cursos de capacitación 100% en linea, disponibles a cualquier hora del día.</p>
                                <Button label={"Ver más"} icon="pi pi-arrow-right p-button-rounded" />
                            </div>
                        </div>
                        <div className="col-12 lg:col-4">
                            <div className="p-4 text-center">
                                <img src="images/pages/landing/icon-you@2x.png" alt="access-account" className="mx-auto block mb-4" />
                                <p className="mt-0 mb-4 text-900 text-xl font-medium">Solo necesitas una cuenta de google o de una red social, sin necesidad de crear una cuenta para iniciar sección.</p>
                                <Button label={"Ver más"} icon="pi pi-arrow-right p-button-rounded" />
                            </div>
                        </div>
                        <div className="col-12 lg:col-4">
                            <div className="p-4 text-center">
                                <img src="images/pages/landing/icon-responsive@2x.png" alt="content-response" className="mx-auto block mb-4" />
                                <p className="mt-0 mb-4 text-900 text-xl font-medium">Puedes ingresar esta plataforma desde tu dispositivo celular o computadora</p>
                                <Button label={"Ver más"} icon="pi pi-arrow-right p-button-rounded" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="lg:py-5 md:px-6 lg:px-8 lg:w-8 md:mx-auto">
                        <div className="text-center">
                            <h3 className="mt-0 p-0 text-900 line-height-3 text-5xl md:text-3xl font-medium">A continuación te mostramos el proceso de ingresar a la plataforma:</h3>
                        </div>
                    </div>
                    <ul className="list-none p-0 m-0 flex flex-column md:flex-row">
                        <li className="relative mr-0 md:mr-8 flex-auto">
                            <div className="border-2 border-green-500 surface-card border-round p-3 flex flex-column md:flex-row align-items-center z-1">
                                <i className="pi pi-check-circle text-green-500 text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3"></i>
                                <div>
                                    <div className="mt-0 mb-1 text-900 text-xl font-medium">Tener una cuenta de red social</div>
                                </div>
                            </div>
                            <div className="w-full absolute top-50 left-100 surface-300 hidden md:block" style={{ transform: 'translateY(-50%)', height: '2px' }}></div>
                        </li>
                        <li className="relative mr-0 md:mr-8 flex-auto">
                            <div className="border-2 border-blue-500 surface-card border-round p-3 flex flex-column md:flex-row align-items-center z-1">
                                <i className="pi pi-users text-blue-600 text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3"></i>
                                <div>
                                    <div className="mt-0 mb-1 text-900 text-xl font-medium">Ir a la pagina de iniciar de seccion</div>
                                </div>
                            </div>
                            <div className="w-full absolute top-50 left-100 surface-300 hidden md:block" style={{ transform: 'translateY(-50%)', height: '2px' }}></div>
                        </li>
                        <li className="relative flex-auto">
                            <div className="border-2 border-black-500 surface-card border-round p-3 flex flex-column md:flex-row align-items-center z-1">
                                <i className="pi pi-check-circle text-600 text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3"></i>
                                <div>
                                    <div className="mt-0 mb-1 text-900 text-xl font-medium">Selecciona un curso y ve su contenido</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div id="opinions" className="layout-section">
                <div className="section-topic-shadow">
                    <div className="section-topic">Opiniones</div>
                </div>
                <div className="card">
                    <div className="grid">
                        <div className="col-12 lg:col-4">
                            <div className="font-medium text-xl text-900 mb-3">Comparte tu experiencia</div>
                            <Button label={"Escribe tu opinión"} className="p-button-rounded" />
                        </div>
                        <div className="col-12 lg:col-4 flex align-items-start justify-content-center py-5 lg:py-0">
                            <div>
                                <span className="text-5xl text-900 font-bold mr-2">190</span>
                                <span className="text-5xl text-600">Opiniones totales de usuarios</span>
                                <div className="mt-3 text-center">
                                    <i className="pi pi-star-fill text-yellow-500 text-2xl mr-1"></i>
                                    <i className="pi pi-star-fill text-yellow-500 text-2xl mr-1"></i>
                                    <i className="pi pi-star-fill text-yellow-500 text-2xl mr-1"></i>
                                    <i className="pi pi-star-fill text-yellow-500 text-2xl mr-1"></i>
                                    <i className="pi pi-star-fill text-300 text-2xl "></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 lg:col-4">
                            <ul className="list-none p-0 m-0">
                                <li className="flex align-items-center mb-2">
                                    <span className="text-900 font-medium mr-1 w-1rem">5</span>
                                    <i className="pi pi-star-fill text-yellow-500 mr-2"></i>
                                    <div style={{ height: '7px' }} className="border-round overflow-hidden flex-auto surface-300">
                                        <div className="h-full bg-yellow-500 w-11 border-round"></div>
                                    </div>
                                    <span className="text-500 font-medium ml-2">90%</span>
                                </li>
                                <li className="flex align-items-center mb-2">
                                    <span className="text-900 font-medium mr-1 w-1rem">4</span>
                                    <i className="pi pi-star-fill text-yellow-500 mr-2"></i>
                                    <div style={{ height: '7px' }} className="border-round overflow-hidden flex-auto surface-300">
                                        <div className="h-full bg-yellow-500 w-6"></div>
                                    </div>
                                    <span className="text-500 font-medium ml-2">50%</span>
                                </li>
                                <li className="flex align-items-center mb-2">
                                    <span className="text-900 font-medium mr-1 w-1rem">3</span>
                                    <i className="pi pi-star-fill text-yellow-500 mr-2"></i>
                                    <div style={{ height: '7px' }} className="border-round overflow-hidden flex-auto surface-300">
                                        <div className="h-full bg-yellow-500 w-2"></div>
                                    </div>
                                    <span className="text-500 font-medium ml-2">10%</span>
                                </li>
                                <li className="flex align-items-center mb-2">
                                    <span className="text-900 font-medium mr-1 w-1rem">2</span>
                                    <i className="pi pi-star-fill text-yellow-500 mr-2"></i>
                                    <div style={{ height: '7px' }} className="border-round overflow-hidden flex-auto surface-300">
                                        <div className="h-full bg-yellow-500 w-2"></div>
                                    </div>
                                    <span className="text-500 font-medium ml-2">10%</span>
                                </li>
                                <li className="flex align-items-center mb-2">
                                    <span className="text-900 font-medium mr-1 w-1rem">1</span>
                                    <i className="pi pi-star-fill text-yellow-500 mr-2"></i>
                                    <div style={{ height: '7px' }} className="border-round overflow-hidden flex-auto surface-300">
                                        <div className="h-full bg-yellow-500 w-1"></div>
                                    </div>
                                    <span className="text-500 font-medium ml-1">5%</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-5">
                        <ul className="list-none m-0 p-0">
                            <li className="py-5 border-top-1 surface-border">
                                <div className="flex align-items-center justify-content-between mb-3">
                                    <div className="flex align-items-center">
                                        <img src="images/avatar/annafali.png" alt="avatar1" className="w-3rem h-3rem flex-shrink-0 mr-3" />
                                        <div className="flex flex-column">
                                            <span className="text-900 font-medium mb-1">Ana Juarez</span>
                                            <span className="text-500 font-medium text-sm">Julio 21, 2022</span>
                                        </div>
                                    </div>
                                    <div className="flex align-items-center">
                                        <span className="mr-2">
                                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                            <i className="pi pi-star-fill text-yellow-500"></i>
                                        </span>
                                        <span className="font-medium">4</span>
                                    </div>
                                </div>
                                <p className="text-600 p-0 m-0 line-height-3">Es una buena alternativa para capacitarse!</p>
                            </li>
                            <li className="py-5 border-top-1 surface-border">
                                <div className="flex align-items-center justify-content-between mb-3">
                                    <div className="flex align-items-center">
                                        <img src="images/avatar/asiyajavayant.png" alt="avatar2" className="w-3rem h-3rem flex-shrink-0 mr-3" />
                                        <div className="flex flex-column">
                                            <span className="text-900 font-medium mb-1">Elena Fernandez</span>
                                            <span className="text-500 font-medium text-sm">Julio 21, 2022</span>
                                        </div>
                                    </div>
                                    <div className="flex align-items-center">
                                        <span className="mr-2">
                                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                            <i className="pi pi-star-fill text-yellow-500"></i>
                                        </span>
                                        <span className="font-medium">5</span>
                                    </div>
                                </div>
                                <p className="text-600 p-0 m-0 line-height-3">Excelente curso, la plataforma es muy intituivo y fasil de usar</p>
                            </li>
                            <li className="py-5 border-top-1 surface-border">
                                <div className="flex align-items-center justify-content-between mb-3">
                                    <div className="flex align-items-center">
                                        <img src="images/avatar/ionibowcher.png" alt="avatar3" className="w-3rem h-3rem flex-shrink-0 mr-3" />
                                        <div className="flex flex-column">
                                            <span className="text-900 font-medium mb-1">Anonimo</span>
                                            <span className="text-500 font-medium text-sm">Julio 21, 2022</span>
                                        </div>
                                    </div>
                                    <div className="flex align-items-center">
                                        <span className="mr-2">
                                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                            <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                                            <i className="pi pi-star-fill text-yellow-500"></i>
                                        </span>
                                        <span className="font-medium">5</span>
                                    </div>
                                </div>
                                <p className="text-600 p-0 m-0 line-height-3">Muy completo el contenido de la plataforma, he encontrado el curso que necesitaba aprender</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div id="contact" className="layout-section">
                <div className="section-topic-shadow">
                    <div className="section-topic">Contacto</div>
                </div>
                <div className="bg-gray-900">
                    <div className="grid grid-nogutter">
                        <div className="col-12 md:col-6 bg-no-repeat bg-cover p-8" style={{ backgroundImage: "url('images/blocks/contact/contact-2.jpg')" }}>
                            <div className="text-gray-300 line-height-3 mb-6">Puedes contactanos si tienes alguna duda.</div>
                            <div className="inline-flex align-items-center text-blue-300 font-bold no-underline cursor-pointer">
                                <span className="mr-3">Ve nuestra direccion en google maps</span>
                                <i className="pi pi-arrow-right"></i>
                            </div>
                            <ul className="list-none p-0 m-0 mt-6 text-white">
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-phone mr-2"></i>
                                    <span>+123456789</span>
                                </li>
                                <li className="flex align-items-center mb-3">
                                    <i className="pi pi-twitter mr-2"></i>
                                    <span>ecursomedia</span>
                                </li>
                                <li className="flex align-items-center">
                                    <i className="pi pi-inbox mr-2"></i>
                                    <span>ecursomedia@com.mx</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 md:col-6">
                            <div className="p-fluid formgrid grid px-4 py-8 md:px-6 lg:px-8">
                                <div className="field col-12 lg:col-6 p-float-label mb-4">
                                    <InputText id="firstname" type="text" autoComplete="off" className="py-3 px-2 text-lg" placeholder={"Nombre"} />
                                </div>
                                <div className="field col-12 lg:col-6 p-float-label mb-4">
                                    <InputText id="lastname" type="text" autoComplete="off" className="py-3 px-2 text-lg" placeholder={"Apellido"} />
                                </div>
                                <div className="field col-12 mb-4">
                                    <InputText id="email" type="text" autoComplete="off" className="py-3 px-2 text-lg" placeholder={"Correo electrónico"} />
                                </div>
                                <div className="field col-12 mb-4">
                                    <InputText id="phone" type="text" autoComplete="off" className="py-3 px-2 text-lg" placeholder={"Número de teléfono"} />
                                </div>
                                <div className="field col-12 mb-4">
                                    <InputTextarea id="message" rows="3" autoComplete="off" autoResize className="py-3 px-2 text-lg" placeholder={"Mensage"} />
                                </div>
                                <div className="col-12 text-right">
                                    <Button type="button" label={"Enviar"} autoComplete="off" icon="pi pi-envelope" className="px-5 py-3 w-auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(LandingPage, comparisonFn);

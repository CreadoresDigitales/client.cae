import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom'
import ScrollToTop from './ScrollToTop';

import { locale, addLocale } from 'primereact/api';

locale('es');

addLocale('es', {
    firstDayOfWeek: 1,
    dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
    dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
    dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
    monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
    monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
    today: 'Hoy',
    clear: 'Limpiar',
    apply: 'Aplicar',
    matchAll: 'Coincidir en todos',
    matchAny: 'Coincidir en cualquiera',
    addRule: 'Agregar condicion',
    removeRule: 'Remover condicion',

    accept: 'Si',
    reject: 'No',
    choose: 'Escoger',
    upload: 'Subir',
    cancel: 'Cancelar',

    startsWith: 'Comenzar con',
    contains: 'Contiene',
    notContains: 'No Contiene',
    endsWith: 'Termina en',
    equals: 'Igual a',
    notEquals: 'No igual a',
    noFilter: 'Sin Filtrar',

    dateIs: 'Fecha de hoy',
    dateIsNot: 'Sin fecha de hoy',
    dateBefore: 'Fecha anterior',
    dateAfter: 'Fecha posterior',

});

ReactDOM.render(
    <HashRouter>
        <ScrollToTop>
        </ScrollToTop>
    </HashRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
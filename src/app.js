// import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import {setTextFilter} from "./actions/filters";
import {addExpence} from "./actions/expences";
import moment from 'moment';
import getVisibleExpences from './selectors/expences';

const store = configureStore();
store.dispatch(addExpence({description:'Water bill', amount: 1000, createdAt: moment().subtract(1, 'days').valueOf()}));
store.dispatch(addExpence({description:'Gas bill', amount: 500, createdAt: moment().subtract(2, 'days').valueOf()}));
store.dispatch(addExpence({description:'Rent', amount: 1500, createdAt: moment().subtract(3, 'days').valueOf()}));
//store.dispatch(setTextFilter('bill'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('gas'));
// }, 3000);

//console.log(store.getState());
//console.log(getVisibleExpences(store.getState().expences, store.getState().filters));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

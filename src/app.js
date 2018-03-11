// import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, {history} from './routers/AppRouter';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import {startSetExpences} from "./actions/expences";
import {firebase} from './firebase/firebase';
import {login, logout} from "./actions/auth";
import LoadingPage from "./components/loading-page";

// import './playground/promises';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}
ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
   if (user) {
       store.dispatch(login(user.uid));
       console.log('uid', user.uid);
       store.dispatch(startSetExpences()).then(() => {
           renderApp();
           if (history.location.pathname === '/') {
               history.push('/dashboard');
           }
       });
   } else {
       store.dispatch(logout());
       renderApp();
       history.push('/');
       console.log('log out')
   }
});
import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';
import expencesReducer from '../reducers/expences';
import filtersReducer from '../reducers/filters';
import authReducer from "../reducers/auth";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => createStore(
        combineReducers({
            expences: expencesReducer,
            filters: filtersReducer,
            auth: authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );


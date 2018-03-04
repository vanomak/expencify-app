import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import expencesReducer from '../reducers/expences';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => createStore(
        combineReducers({
            expences: expencesReducer,
            filters: filtersReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );


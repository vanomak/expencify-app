import {combineReducers, createStore} from "redux";
import expencesReducer from '../reducers/expences';
import filtersReducer from '../reducers/filters';

export default () => createStore(
        combineReducers({
            expences: expencesReducer,
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );


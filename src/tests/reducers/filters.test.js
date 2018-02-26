import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '$$INIT' });
    const filtersReducerDefaultState = {
        text: '',
        sortBy: 'date', // or amount
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };
    expect(state).toEqual(filtersReducerDefaultState);
});

test('should set sort by amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sort by date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount', // or amount
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };
    const action = {
        type: 'SORT_BY_DATE'
    };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const currentState = {
        text: '',
        sortBy: 'amount', // or amount
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };
    const action = {
        type: 'SET_TEXT_FILTER',
        filter: 'test'
    };
    const state = filtersReducer(currentState, action);
    expect(state.text).toBe('test');
});

test('should set start date filter', () => {
    const currentState = {
        text: '',
        sortBy: 'amount', // or amount
        startDate: undefined,
        endDate: moment().endOf('month')
    };
    const action = {
        type: 'SET_START_DATE',
        startDate: moment().startOf('month')
    };
    const state = filtersReducer(currentState, action);
    expect(state.startDate).toEqual(moment().startOf('month'));
});

test('should set end filter', () => {
    const currentState = {
        text: '',
        sortBy: 'amount', // or amount
        startDate: undefined,
        endDate: undefined
    };
    const action = {
        type: 'SET_END_DATE',
        endDate: moment().endOf('month')
    };
    const state = filtersReducer(currentState, action);
    expect(state.endDate).toEqual(moment().endOf('month'));
});

import {createStore, combineReducers } from 'redux';

store.subscribe(() => {
    const state = store.getState();
    const visibleExpences = getVisibleExpences(state.expences, state.filters);
    console.log(visibleExpences);
});

const exp1 = store.dispatch(addExpence({description:'rent description', amount: 1000, createdAt: -21000}));
const exp2 = store.dispatch(addExpence({description:'Coffee', amount: 300, createdAt: -1000}));
//
// store.dispatch(removeExpence(exp1.expence.id));
// store.dispatch(editExpence(exp2.expence.id, {amount: 500}));
store.dispatch(setTextFilter('e'));
// store.dispatch(setTextFilter());
//
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
//store.dispatch(setStartDate(1325));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(0));
//store.dispatch(setEndDate());

// console.log(exp1.expence.id);
//
// const demoState = {
//     expences: [{
//         id: 'dfsdf',
//         description: 'January Rent',
//         note: 'This is a final payment for tahet address',
//         amount: 25252,
//         createdAt: 0
//     }],
//     filters: {
//         text: 'rent',
//         sortBy: 'date', // or amount
//         startDate: undefined,
//         endDate: undefined
//     }
// };
//
// const user = {
//     name: 'Ivan',
//     age: 39
// };
//
// console.log({
//     ...user,
//     location: 'Khabarovsk',
//     age: 38
// });

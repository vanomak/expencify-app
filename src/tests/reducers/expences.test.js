import expencesReducer from '../../reducers/expences';
import expences from '../fixtures/expences';
import moment from "moment/moment";
import uuid from "uuid";

test('should setup default expences values', () => {
    const state = expencesReducer(undefined, { type: '$$INIT' });
    expect(state).toEqual([]);
});

test('should remove expence by id', () => {
    const action = {
        type: 'REMOVE_EXPENCE',
        id:expences[1].id
    };
    const state = expencesReducer(expences, action);
    expect(state).toEqual([expences[0], expences[2]]);
});


test('should not remove expence by unknown id', () => {
    const action = {
        type: 'REMOVE_EXPENCE',
        id: -1
    };
    const state = expencesReducer(expences, action);
    expect(state).toEqual([expences[0], expences[1], expences[2]]);
});

test('should add expence', () => {
    const newItem = {
        id: uuid(),
        description: 'test desc',
        note: 'note test',
        amount: 34000,
        createdAt: moment().valueOf()
    };
    const action = {
        type: 'ADD_EXPENCE',
        expence: newItem
    };
    const state = expencesReducer(expences, action);
    expect(state).toEqual([...expences, newItem]);
});

test('should edit expence by id', () => {
    const updates = {
        description: 'test desc',
        note: 'note test',
        amount: 34000,
        createdAt: moment().valueOf()
    };
    const action = {
        type: 'EDIT_EXPENCE',
        id: expences[1].id,
        updates
    };
    const state = expencesReducer(expences, action);
    expect(state).toEqual([expences[0], {...updates, id: expences[1].id}, expences[2]]);
});

test('should not edit expence by unknown id', () => {
    const updates = {
        description: 'test desc',
        note: 'note test',
        amount: 34000,
        createdAt: moment().valueOf()
    };
    const action = {
        type: 'EDIT_EXPENCE',
        id: -1,
        updates
    };
    const state = expencesReducer(expences, action);
    expect(state).toEqual([...expences]);
});


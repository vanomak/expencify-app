import {addExpence, editExpence, removeExpence} from "../../actions/expences";

test('should setup remove expence action object', () => {
    const action = removeExpence('123abc');
    expect(action).toEqual({
        type: 'REMOVE_EXPENCE',
        id: '123abc'
    });
});

test('should setup edit expence action object', () => {
    const action = editExpence('123abc', {note: 'simple note'});
    expect(action).toEqual({
        type: 'EDIT_EXPENCE',
        id: '123abc',
        updates: {
            note: 'simple note'
        }
    });
});

test('should setup add expence action object with provided values', () => {
    const data = {
        description: 'Rent',
        amount: 1000,
        note: 'January rent',
        createdAt: 10000
    };
    const action = addExpence(data);
    expect(action).toEqual({
        type: 'ADD_EXPENCE',
        expence: {
            ...data,
            id: expect.any(String)
        }
    });
});

test('should setup add expence action object with default values', () => {
    const action = addExpence();
    expect(action).toEqual({
        type: 'ADD_EXPENCE',
        expence: {
            description: '',
            note: '',
            amount: 0,
            id: expect.any(String),
            createdAt: 0
        }
    });
});

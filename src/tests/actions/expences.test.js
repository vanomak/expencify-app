import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    addExpence, editExpence, removeExpence, setExpences, startAddExpence,
    startSetExpences
} from "../../actions/expences";
import expences from '../fixtures/expences';
import db from '../../firebase/firebase';


const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expencesData = {};
    expences.forEach(({ id, note, amount, createdAt, description}) => {
        expencesData[id] = { note, amount, createdAt, description };
    });
    db.ref('expences').set(expencesData).then(() => {
        done();
    })
});

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
    const action = addExpence(expences[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENCE',
        expence: expences[2]
    });
});

test('should setup set expence action object with provided values', () => {
    const action = setExpences(expences);
    expect(action).toEqual({
        type: 'SET_EXPENCES',
        expences: expences
    });
});

test('should add expence to db and store', (done) => {
    const store = createMockStore({});
    const expenceData = {
        amount: expences[1].amount,
        createdAt: expences[1].createdAt,
        note: expences[1].note,
        description: expences[1].description
    };
    store.dispatch(startAddExpence(expenceData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENCE',
            expence: {
                ...expenceData,
                id: expect.any(String)
            }
        });
        return db.ref(`expences/${actions[0].expence.id}`).once('value');
    }).then((snap) => {
        expect(snap.val()).toEqual(expenceData);
        done();
    });
});

test('should add default expence to db and store', (done) => {
    const store = createMockStore({});
    const expenceDefaults = {
        amount: 0,
        createdAt: 0,
        note: '',
        description: ''
    };
    store.dispatch(startAddExpence({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENCE',
            expence: {
                ...expenceDefaults,
                id: expect.any(String)
            }
        });
        return db.ref(`expences/${actions[0].expence.id}`).once('value');
    }).then((snap) => {
        expect(snap.val()).toEqual(expenceDefaults);
        done();
    });
});

test('should fetch expences from firebase', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpences()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENCES',
            expences
        });
        done();
    })
});

// test('should set up add expence action object with default values', () => {
//     const action = addExpence();
//     expect(action).toEqual({
//         type: 'ADD_EXPENCE',
//         expence: {
//             description: '',
//             note: '',
//             amount: 0,
//             id: expect.any(String),
//             createdAt: 0
//         }
//     });
// });

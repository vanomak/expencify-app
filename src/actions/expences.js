import uuid from "uuid";
import db from '../firebase/firebase';

export const addExpence = (expence) => ({
    type: 'ADD_EXPENCE',
    expence
});

export const startAddExpence = (expenceData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenceData;
        const expence = {description, note, amount, createdAt};
        return db.ref('expences').push(expence).then((ref) => {
            dispatch(addExpence({
                id: ref.key,
                ...expence
            }))
        });
    }

};

export const removeExpence = ( id ) => ({
    type: 'REMOVE_EXPENCE',
    id
});

export const startRemoveExpence = ( id ) => {
    return (dispatch) => {
        return db.ref(`expences/${id}`).remove().then((snap) => {
            dispatch(removeExpence(id));
        })
    }
};

export const editExpence = (id, updates ) => ({
    type: 'EDIT_EXPENCE',
    id,
    updates
});

export const startEditExpence = (id, updates ) => {
    return (dispatch) => {
        return db.ref(`expences/${id}`).update(updates).then((snap) => {
            dispatch(editExpence(id, updates));
        })
    };
};

export const setExpences = (expences) => ({
    type: 'SET_EXPENCES',
    expences
});

export const startSetExpences = () => {
    return (dispatch) => {
        return db.ref('expences').once('value').then((snap) => {
            const values = [];
            snap.forEach((el) => {
                values.push({
                    id: el.key,
                    ...el.val()
                })
            });
            dispatch(setExpences(values));
        })
    }
};
import uuid from "uuid";
import db from '../firebase/firebase';

export const addExpence = (expence) => ({
    type: 'ADD_EXPENCE',
    expence
});

export const startAddExpence = (expenceData = {}) => {
    return (dispatch, getState) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenceData;
        const uid = getState().auth.uid;
        const expence = {description, note, amount, createdAt};
        return db.ref(`users/${uid}/expences`).push(expence).then((ref) => {
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
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return db.ref(`users/${uid}/expences/${id}`).remove().then((snap) => {
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
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return db.ref(`users/${uid}/expences/${id}`).update(updates).then((snap) => {
            dispatch(editExpence(id, updates));
        })
    };
};

export const setExpences = (expences) => ({
    type: 'SET_EXPENCES',
    expences
});

export const startSetExpences = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return db.ref(`users/${uid}/expences`).once('value').then((snap) => {
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
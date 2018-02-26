import uuid from "uuid";

export const addExpence = ({
                        description = '',
                        note = '',
                        amount = 0,
                        createdAt = 0
                    } = {}) => ({
    type: 'ADD_EXPENCE',
    expence: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

export const removeExpence = ( id ) => ({
    type: 'REMOVE_EXPENCE',
    id
});

export const editExpence = (id, updates ) => ({
    type: 'EDIT_EXPENCE',
    id,
    updates
});
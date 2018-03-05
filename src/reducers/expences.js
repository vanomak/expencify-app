// Expences reducer
const expencesReducerDefaultState = [];

export default (state = expencesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENCE':
            return [
                ...state,
                action.expence
            ];
        case 'SET_EXPENCES':
            return [
                ...action.expences
            ];
        case 'EDIT_EXPENCE':
            return state.map((expence) => {
                if (expence.id === action.id) {
                    return {
                        ...expence,
                        ...action.updates
                    }
                }
                else
                    return expence;
            });
        case 'REMOVE_EXPENCE':
            return state.filter(({ id }) => id !== action.id);
        default:
            return state;
    }
};


import authReducer from "../../reducers/auth";

test('should login user', () => {
    const uid = 'dsafsdf';
    const action = {
        type: 'LOGIN',
        uid
    };
    const state = authReducer ({}, action);
    expect(state).toEqual({
        uid
    });
});

test('should logout user', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer ({ sdf: 'sdaf'}, action);
    expect(state).toEqual({});
});


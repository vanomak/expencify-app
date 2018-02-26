import React from 'react';
import { shallow } from 'enzyme';
import { EditExpencePage } from "../../components/edit-expence-page";
import expences from '../fixtures/expences';

let editExpence, removeExpence, history, wrapper;

beforeEach(() => {
    editExpence = jest.fn();
    removeExpence = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpencePage expence={expences[1]} editExpence={editExpence} removeExpence={removeExpence} history={history} />);
});

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpence', () => {
    wrapper.find('ExpenceForm').prop('onSubmit')(expences[1]);
    expect(editExpence).toHaveBeenLastCalledWith(expences[1].id, expences[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle removeExpence', () => {
    wrapper.find('button').simulate('click');
    expect(removeExpence).toHaveBeenLastCalledWith(expences[1].id);
    expect(history.push).toHaveBeenLastCalledWith('/');
});

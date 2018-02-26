import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from "../../components/add-expense-page";
import expences from '../fixtures/expences';

let addExpence, history, wrapper;

beforeEach(() => {
    addExpence = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage addExpence={addExpence} history={history} />);
});

test('should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit AddExpensePage', () => {
    wrapper.find('ExpenceForm').prop('onSubmit')(expences[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpence).toHaveBeenLastCalledWith(expences[1]);
});

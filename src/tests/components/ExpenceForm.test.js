import React from 'react';
import { shallow } from 'enzyme';
import ExpenceForm from '../../components/expence-form';
import expences from '../fixtures/expences';
import moment from 'moment';

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenceForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with expence data', () => {
    const wrapper = shallow(<ExpenceForm expence={expences[1]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render error with incomplete data ExpenseForm', () => {
    const wrapper = shallow(<ExpenceForm />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should change description ExpenseForm on input change', () => {
    const value = "Test description";
    const wrapper = shallow(<ExpenceForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: {
            value
        }
    });
    expect(wrapper.state('description')).toBe(value);
});

test('should change note ExpenseForm on textarea change', () => {
    const value = "Test note";
    const wrapper = shallow(<ExpenceForm />);
    wrapper.find('textarea').at(0).simulate('change', {
        target: {
            value
        }
    });
    expect(wrapper.state('note')).toBe(value);
});

test('should set amount with valid data ExpenseForm', () => {
    const value = "12.23";
    const wrapper = shallow(<ExpenceForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: {
            value
        }
    });
    expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount with invalid data ExpenseForm', () => {
    const value = "12.2333";
    const wrapper = shallow(<ExpenceForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: {
            value
        }
    });
    expect(wrapper.state('amount')).toBe("");
});

test('should call onSubmit for valid form submission ExpenseForm', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenceForm expence={expences[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe(undefined);
    expect(onSubmitSpy).toHaveBeenCalledWith({
        description: expences[0].description,
        amount: expences[0].amount,
        createdAt: expences[0].createdAt.valueOf(),
        note: expences[0].note
    });
});

test('should set new date on date change ExpenseForm', () => {
    // const onSubmitSpy = jest.fn();
    const now = moment();
    const wrapper = shallow(<ExpenceForm />);
    wrapper.find('#datePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendare focus on change ExpenseForm', () => {
    const wrapper = shallow(<ExpenceForm />);
    const focused = {
        focused: true
    };
    wrapper.find('#datePicker').prop('onFocusChange')(focused);
    expect(wrapper.state('calendarFocused')).toEqual(true);
});


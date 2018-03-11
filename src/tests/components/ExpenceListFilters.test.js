import React from 'react';
import { shallow } from 'enzyme';
import { ExpenceListFilters } from "../../components/expence-list-filters";
import expences from '../fixtures/expences';
import {filters, altfilters} from "../fixtures/filters";
import moment from "../__mocks__/moment";

let wrapper, setTextFilter, setStartDate, setEndDate, sortByDate, sortByAmount;

beforeEach(() => {
    setTextFilter = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    wrapper = shallow(
        <ExpenceListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
        />);
});

test('should render ExpenceListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenceListFilters with altfilters correctly', () => {
    wrapper.setProps({
        filters: altfilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change ExpenceListFilters', () => {
    const value = "Test str";
    wrapper.find('input').prop('onChange')({ target: { value }});
    expect(setTextFilter).toHaveBeenLastCalledWith( value );
});

test('should sort by date ExpenceListFilters', () => {
    const value = "date";
    wrapper.find('select').prop('onChange')({ target: { value }});
    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount ExpenceListFilters', () => {
    const value = "amount";
    wrapper.find('select').prop('onChange')({ target: { value }});
    expect(sortByAmount).toHaveBeenCalled();
});

test('should set start date ExpenceListFilters', () => {
    const startDate = moment(0).add(5, 'days');
    const endDate = moment(0).add(7, 'days');
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate, endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle focus change ExpenceListFilters', () => {
    const focused = "startDate";
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(focused);
    expect(wrapper.state('calendarFocused')).toBe(focused);
});


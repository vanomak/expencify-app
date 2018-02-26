import selectExpences from "../../selectors/expences";
import expences from '../fixtures/expences';
import moment from 'moment';

test('should filter by text sorted by date', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined,
    };
    const result = selectExpences(expences, filters);
    expect(result).toEqual([expences[2], expences[1]]);

});

test('should filter by start date sorted by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined,
    };
    const result = selectExpences(expences, filters);
    expect(result).toEqual([expences[2], expences[0]]);
});

test('should filter by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0),
    };
    const result = selectExpences(expences, filters);
    expect(result).toEqual([expences[0], expences[1]]);
});


test('should sort by date', () => {
    const filters = {
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined,
        text: ''
    };
    const result = selectExpences(expences, filters);
    expect(result).toEqual([expences[2], expences[0], expences[1]]);
});

test('should sort by amount', () => {
    const filters = {
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined,
        text: ''
    };
    const result = selectExpences(expences, filters);
    expect(result).toEqual([expences[2], expences[0], expences[1]]);
});

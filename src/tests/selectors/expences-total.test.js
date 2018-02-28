import getExpencesTotal from '../../selectors/expences-total';
import expences from '../fixtures/expences';

test('should return 0 if no expences', () => {
    expect(getExpencesTotal([])).toBe(0);
});

test('should sum up one expence', () => {
    expect(getExpencesTotal([expences[1]])).toBe(100);
});

test('should sum up multiple expences', () => {
    expect(getExpencesTotal(expences)).toBe(expences[0].amount + expences[1].amount + expences[2].amount);
});

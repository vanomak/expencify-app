import moment from "moment/moment";

export const filters = {
    text: '',
    sortBy: 'date', // or amount
    startDate: undefined,
    endDate: undefined
};

export const altfilters = {
    text: 'rent',
    sortBy: 'amount', // or amount
    startDate: moment(0),
    endDate: moment(0).add(3, 'days')
};


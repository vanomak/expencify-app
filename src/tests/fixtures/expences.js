import moment from "moment/moment";

export default [
    {
        id: '1',
        description: 'Gum',
        note: '',
        amount: 770,
        createdAt: moment(0).valueOf()
    },
    {
        id: '2',
        description: 'Rent',
        note: '',
        amount: 100,
        createdAt: moment(0).subtract(2, 'days').valueOf()
    },
    {
        id: '3',
        description: 'Credit card',
        note: '',
        amount: 10000,
        createdAt: moment(0).add(2, 'days').valueOf()
    }
];

export const expences2 = [
    {
        id: '3',
        description: 'Gum',
        note: '',
        amount: 7730,
        createdAt: moment(0).valueOf()
    },
    {
        id: '5',
        description: 'Rent',
        note: '',
        amount: 1030,
        createdAt: moment(0).subtract(2, 'days').valueOf()
    },
    {
        id: '6',
        description: 'Credit card',
        note: '',
        amount: 100030,
        createdAt: moment(0).add(2, 'days').valueOf()
    }
];
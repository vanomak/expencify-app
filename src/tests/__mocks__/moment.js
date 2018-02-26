const moment = require.requireActual('moment');
// console.log('inside mock');
export default (timestamp = 0) => {
    return moment(timestamp);
};
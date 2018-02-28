// Get total expences
export default (expences = []) => {
    let total = 0;
    expences.map((el) => {
        total += el.amount;
    });
    return total;
};

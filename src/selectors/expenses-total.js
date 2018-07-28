export default (expenses) => {
    if (expenses.length === 0) {
        return 0;
    }
    const amounts = expenses.map((expense, index) => {
        return expense.amount;
    });
    const reducer = (total, num) => total + num;
    return amounts.reduce(reducer);
};
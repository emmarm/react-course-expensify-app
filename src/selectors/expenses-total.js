export default (expenses) => {
  const expensesTotal = expenses.reduce((total, expense) => total + expense.amount, 0) / 100;
  return expensesTotal;
};
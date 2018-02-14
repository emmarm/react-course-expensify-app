import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Should return 0 for no expenses', () => {
  const emptyExpenses = [];
  const total = getExpensesTotal(emptyExpenses);
  expect(total).toBe(0);
});

test('Should correctly add up a single expense', () => {
  const singleExpense = [expenses[0]];
  const singleExpenseAmount = expenses[0].amount / 100;
  const total = getExpensesTotal(singleExpense);
  expect(total).toBe(singleExpenseAmount);
});

test('Should correctly add up multiple expenses', () => {
  const expensesAmount = 10.00;
  const total = getExpensesTotal(expenses);
  expect(total).toBe(expensesAmount);
});
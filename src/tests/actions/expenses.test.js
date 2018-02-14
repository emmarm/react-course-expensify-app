import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should set up "Remove Expense" action object', () => {
  const action = removeExpense({ id: '8675309' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '8675309'
  });
});

test('Should set up "Edit Expense" action object', () => {
  const action = editExpense('8675309', { description: 'Edited' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '8675309',
    updates: {
      description: 'Edited'
    }
  });
});

test('Should set up the "Add Expense" action object with provided values', () => {
  const expenseData = {
    description: 'Expense',
    amount: 100,
    createdAt: 1999999,
    note: 'A note!'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('Should set up the "Add Expense" action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      amount: 0,
      createdAt: 0,
      note: '',
      id: expect.any(String)
    }
  });
});
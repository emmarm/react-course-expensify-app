import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('Should remove expense with valid ID', () => {
  const action = { type: 'REMOVE_EXPENSE', id: '2' };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2], expenses[3]]);
});

test('Should NOT remove expense with invalid ID', () => {
  const action = { type: 'REMOVE_EXPENSE', id: '@@' };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('Should add an expense', () => {
  const newExpense = {
    description: 'React Course',
    note: 'Awesome!',
    amount: 1000,
    createdAt: moment(0)
  };
  const action = { type: 'ADD_EXPENSE', expense: newExpense };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([
    ...expenses,
    {
      description: 'React Course',
      note: 'Awesome!',
      amount: 1000,
      createdAt: moment(0)
    }
  ]);
});

test('Should edit expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '2', updates: { note: 'Yummy' }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([
    expenses[0],
    {
      id: '2',
      description: 'Banana',
      note: 'Yummy',
      amount: 200,
      createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    expenses[2],
    expenses[3]
  ]);
});

test('Should NOT edit expense with invalid ID', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '@@', updates: { note: 'Yummy' }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('Should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[0]]
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0]]);
});
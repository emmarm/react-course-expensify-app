import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

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
  const action = addExpense(expenses[0]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[0]
  });
});

test('Should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Shoes',
    amount: 7295,
    createdAt: 1513728000000,
    note: 'comfy'
  };

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });

    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});

test('Should add expense with default values to database and store', (done) => {
  const store = createMockStore({});
  const expenseDefaults = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  };

  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseDefaults
      }
    });

    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseDefaults);
    done();
  });
});

// test('Should set up the "Add Expense" action object with default values', () => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       description: '',
//       amount: 0,
//       createdAt: 0,
//       note: '',
//       id: expect.any(String)
//     }
//   });
// });
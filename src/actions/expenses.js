import database from '../firebase/firebase';

// Add Expense
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = '',
      amount = 0,
      createdAt = 0,
      category = 'general',
      note = ''
    } = expenseData;
    const expense = { description, amount, createdAt, category, note };
    
    return database.ref(`users/${uid}/expenses`).push(expense)
    .then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  };
};

// Remove Expense
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database.ref(`users/${uid}/expenses/${id}`).remove()
    .then(() => {
      dispatch(removeExpense({ id }));
    });
  };
};

// Edit Expense
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database.ref(`users/${uid}/expenses/${id}`).update(updates)
    .then(() => {
      dispatch(editExpense(id, updates));
    });
  };
};

// Set Expenses
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

// const startSetExpenses;
export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database.ref(`users/${uid}/expenses`)
    .once('value')
    .then ((snapshot) => {
      const expenses = [];
      
      snapshot.forEach((child) => {
        expenses.push({
          id: child.key,
          ...child.val()
        });
      });

      dispatch(setExpenses(expenses));
    });
  };
};
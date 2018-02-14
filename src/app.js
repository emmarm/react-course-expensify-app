import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
});

store.dispatch(addExpense({
  description: 'Water Bill', 
  amount: 3000,
  createdAt: 100
}));
store.dispatch(addExpense({
  description: 'Gas Bill',
  amount: 2500,
  createdAt: -25
}));
store.dispatch(addExpense({
  description: 'Groceries',
  amount: 1250,
  createdAt: 0
}));
store.dispatch(addExpense({
  description: 'Internet',
  amount: 4000,
  createdAt: 50
}));
store.dispatch(addExpense({
  description: 'Eating Out',
  amount: 1700,
  createdAt: 10
}));
store.dispatch(addExpense({
  description: 'Car Repair',
  amount: 7200,
  createdAt: -50
}));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
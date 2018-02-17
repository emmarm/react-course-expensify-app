import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let startEditExpense, startRemoveExpense, history, wrapper;
const expense = expenses[0];

beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      startEditExpense={startEditExpense}
      startRemoveExpense={startRemoveExpense}
      history={history}
      expense={expenses[0]}
    />);
});

test('Should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Should handle startEditExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expense);
  expect(history.push).toHaveBeenLastCalledWith('/dashboard');
  expect(startEditExpense).toHaveBeenLastCalledWith(expense.id, expense);
});

test('Should handle startRemoveExpense', () => {
  const expense = expenses[0];
  wrapper.find('button').prop('onClick')();
  expect(history.push).toHaveBeenLastCalledWith('/dashboard');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expense.id });
});
import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpenseList = (props) => {
  const numberOfVisible = props.visibleExpenses.length;
  const s = props.visibleExpenses.length !== 1 ? 's' : '';
  const total = getExpensesTotal(props.visibleExpenses);
  const formattedTotal = numeral(total).format('$0,0.00');
  const numberOfHidden = props.expenses.length - numberOfVisible;
  return (
    <div className="content-container--narrow mobile-full-width">
      <div className="list-header">
        <p className="list-header__summary">Showing <span>{numberOfVisible}</span> expense{s} ({numberOfHidden} hidden)</p>
        <p className="list-header__summary">Total: <span>{formattedTotal}</span></p>
      </div>
      <div className="list-body">
        {props.visibleExpenses.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No expenses</span>
          </div>
        ) : (
          props.visibleExpenses.map((expense) =>
            <ExpenseListItem
              key={expense.id}
              {...expense}
            />
          )
        )}
      </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    visibleExpenses: getVisibleExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
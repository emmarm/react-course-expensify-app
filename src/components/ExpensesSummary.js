import React from 'react';
import { connect } from 'react-redux';
import getVisibleExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

const ExpensesSummary = (props) => (
  <div>
    <p>Viewing {props.expenses.length} expense{props.expenses.length !== 1 ? 's' : ''} totalling {numeral(getExpensesTotal(props.expenses)).format('$0,0.00')}</p>
  </div>
);

const mapStateToProps = (state) => ({
  expenses: getVisibleExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);
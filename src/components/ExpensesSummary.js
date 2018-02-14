import React from 'react';
import { connect } from 'react-redux';
import getVisibleExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => {
  const numberOf = props.expenses.length;
  const s = props.expenses.length !== 1 ? 's' : '';
  const total = getExpensesTotal(props.expenses);
  const formattedTotal = numeral(total).format('$0,0.00');
  return (
    <div>
      <p>Viewing {numberOf} expense{s} totalling {formattedTotal}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  expenses: getVisibleExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getVisibleExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => {
  const numberOf = props.expenses.length;
  const s = props.expenses.length !== 1 ? 's' : '';
  const total = getExpensesTotal(props.expenses);
  const formattedTotal = numeral(total).format('$0,0.00');
  return (
    <div className="page-header">
      <div className="content-container">
        <h2 className="page-header__title">Viewing <span>{numberOf}</span> expense{s} totalling <span>{formattedTotal}</span></h2>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  expenses: getVisibleExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);
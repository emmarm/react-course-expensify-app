import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import { CategorySelect } from './CategorySelect';

export default class ExpenseForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      amount: props.expense ? parseFloat(props.expense.amount / 100).toFixed(2) : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      category: props.expense ? props.expense.category : 'general',
      note: props.expense ? props.expense.note : '',
      error: ''
    };
  }
  onSubmit = (e) => {
    e.preventDefault();

    if(!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: 'Please include a description and amount.'
      }));
    } else {
      this.setState(() => ({
        error: ''
      }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        category: this.state.category,
        note: this.state.note
      });
    }
  };
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({
      description
    }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;
    const toTwoDecimalPlaces = /^\d+(\.\d{0,2})?$/;
    if (!amount || amount.match(toTwoDecimalPlaces)) {
      this.setState(() => ({
        amount
      }));
    }
  };
  onAmountBlur = (e) => {
    const amountEntered = e.target.value;
    let amount;
    if (amountEntered) {
      amount = parseFloat(amountEntered).toFixed(2);
    } else {
      amount = '';
    }
    this.setState(() => ({ amount }));
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({
        createdAt
      }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({
      calendarFocused: focused
    }));
  };
  onCategoryChange = (category) => {
    this.setState(() => ({ category }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({
      note
    }));
  };
  render () {
    return (
      <form 
        className="form"
        onSubmit={this.onSubmit}
      >
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          type='text'
          className="text-input"
          placeholder='Description'
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <input
          type='text'
          className="text-input"
          placeholder='Amount'
          value={this.state.amount}
          onChange={this.onAmountChange}
          onBlur={this.onAmountBlur}
        />
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <CategorySelect
          value={this.state.category}
          onCategoryChange={this.onCategoryChange}
        />
        <textarea
          className="textarea"
          placeholder='Add a note about this expense (optional)'
          value={this.state.note}
          onChange={this.onNoteChange}
        >
        </textarea>
        <div>
          <button className="button">
            {this.props.expense ? 'Save Expense' : 'Add Expense'}
          </button>
        </div>
        <div>
          <Link to="/dashboard" className="button button--secondary">
            Cancel
          </Link>
        </div>
      </form>
    )
  };
};
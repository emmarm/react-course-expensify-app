import React from 'react';
import { connect } from 'react-redux';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';

export default class ExpenseForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      amount: props.expense ?(props.expense.amount / 100).toFixed(2) : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
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
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({
      note
    }));
  };
  render () {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type='text'
            placeholder='Description'
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type='text'
            placeholder='Amount'
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder='Add a note about this expense (optional)'
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button>
            {this.props.expense ? 'Edit Expense' : 'Add Expense'}
          </button>
        </form>
      </div>
    )
  };
};
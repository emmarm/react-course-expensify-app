import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, setCategory } from '../actions/filters';
import { DateRangePicker } from 'react-dates';
import CategorySelect from './CategorySelect';

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,
    filtersHidden: true
  };
  toggleHidden = () => {
    this.setState((prevState) => ({
      filtersHidden: !prevState.filtersHidden
    }));
  };
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value)
  };
  onSortChange = (e) => {
    if (e.target.value === 'date') {
      this.props.sortByDate();
    } else if (e.target.value === 'amount') {
      this.props.sortByAmount();
    }
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({
      calendarFocused
    }));
  };
  onCategoryChange = (category) => {
    this.props.setCategory(category);
  };
  render() {
    return (
      <div className="input-wrapper">
        <button 
          className="button button--toggle"
          onClick={this.toggleHidden}
        >
          {this.state.filtersHidden === true ? 'Show filters ⇓' : 'Hide filters ⇑'}
        </button>
        <div className={this.state.filtersHidden === true ? 'hidden' : null}>
          <div className="input-group">
            <div className="input-group__item">
              <input
                type="text"
                className="text-input text-input--narrow"
                placeholder="Search in expenses"
                value={this.props.filters.text}
                onChange={this.onTextChange}
              />
            </div>
            <div className="input-group__row">
              <div className="input-group__item">
                <select
                  className="select"
                  value={this.props.filters.sortBy}
                  onChange={this.onSortChange}
                >
                  <option value='date'>
                    Date
                  </option>
                  <option value='amount'>
                    Amount
                  </option>
                </select>
              </div>
              <div className="input-group__item">
                <DateRangePicker
                  startDate={this.props.filters.startDate}
                  endDate={this.props.filters.endDate}
                  onDatesChange={this.onDatesChange}
                  focusedInput={this.state.calendarFocused}
                  onFocusChange={this.onFocusChange}
                  showClearDates={true}
                  numberOfMonths={1}
                  isOutsideRange={() => false}
                />
              </div>
              <div className="input-group__item">
                <CategorySelect
                  value={this.props.filters.category}
                  onCategoryChange={this.onCategoryChange}
                  filter={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
  setCategory: (category) => dispatch(setCategory(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
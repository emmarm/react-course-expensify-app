import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { defaultFilters, appliedFilters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, setCategory, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  setCategory = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={defaultFilters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      setCategory={setCategory}
    />
  );
});

test('Should render ExpenseListFilters correctly using default filters', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseListFilters correctly using applied filters', () => {
  wrapper.setProps({
    filters: appliedFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test('Should handle text change', () => {
  const value = 'hi';
  wrapper.find('input').simulate('change', {
    target: { value }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('Should sort by date', () => {
  const value = 'date';
  wrapper.setProps({
    filters: appliedFilters
  });
  wrapper.find('select').simulate('change', {
    target: { value }
  });
  expect(sortByDate).toHaveBeenCalled();
});

test('Should sort by amount', () => {
  const value = 'amount';
  wrapper.find('select').simulate('change', {
    target: { value }
  });
  expect(sortByAmount).toHaveBeenCalled();
});

test('Should handle date changes', () => {
  const startDate = moment(0);
  const endDate = moment(0).add(1, 'days');
  wrapper.find('DateRangePicker').prop('onDatesChange')({
    startDate: startDate,
    endDate: endDate
  });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('Should handle date picker focus changes', () => {
  const calendarFocused = 'endDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});

// test('Should update category on category change', () => {
//   const category = 'transportation';
//   wrapper.find('CategorySelect').prop('onCategoryChange')(category);
//   expect(wrapper.state('category')).toBe(category);
// });
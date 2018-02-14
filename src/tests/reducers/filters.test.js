import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('Should set up default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('Should set "Sort By" to "amount"', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('Should set "Sort By" to "date"', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('Should set "Text" filter', () => {
  const action = { type: 'SET_TEXT_FILTER', text: 'hi' };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe('hi');
});

test('Should set "Start Date" filter', () => {
  const action = { type: 'SET_START_DATE', startDate: 1000 };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toBe(1000);
});

test('Should set "End Date" filter', () => {
  const action = { type: 'SET_END_DATE', endDate: 1000 };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toBe(1000);
});
import moment from 'moment';

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month'),
  category: 'All'
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
      break;
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
      break;
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
      break;
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
      break;
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
      break;
    case 'SET_CATEGORY':
      return {
        ...state,
        category: action.category
      };
      break;
    default:
      return state;
  };
};
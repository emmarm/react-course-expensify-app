import moment from 'moment';

export default [
  {
    id: '1',
    description: 'Pineapple',
    note: '',
    amount: 100,
    createdAt: 0
  },
  {
    id: '2',
    description: 'Banana',
    note: '',
    amount: 200,
    createdAt: moment(0).subtract(4, 'days').valueOf()
  },
  {
    id: '3',
    description: 'Apple',
    note: '',
    amount: 300,
    createdAt: moment(0).add(4, 'days').valueOf()
  },
  {
    id: '4',
    description: 'Mango',
    note: '',
    amount: 400,
    createdAt: moment(0).subtract(10, 'days').valueOf()
  },
];
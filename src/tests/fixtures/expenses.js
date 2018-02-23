import moment from 'moment';

export default [
  {
    id: '1',
    description: 'Pineapple',
    note: '',
    amount: 100,
    createdAt: 0,
    category: 'food'
  },
  {
    id: '2',
    description: 'Banana',
    note: '',
    amount: 200,
    createdAt: moment(0).subtract(4, 'days').valueOf(),
    category: 'general'
  },
  {
    id: '3',
    description: 'Apple',
    note: '',
    amount: 300,
    createdAt: moment(0).add(4, 'days').valueOf(),
    category: 'transportation'
  },
  {
    id: '4',
    description: 'Mango',
    note: '',
    amount: 400,
    createdAt: moment(0).subtract(10, 'days').valueOf(),
    category: 'personal'
  },
];
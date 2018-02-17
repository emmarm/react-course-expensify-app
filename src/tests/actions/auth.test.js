import { login, logout } from '../../actions/auth';

test('Should set up login action object with uid', () => {
  const uid = '62442';
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  });
});

test('Should set up logout action object', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});
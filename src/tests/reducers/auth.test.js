import authReducer from '../../reducers/auth';

test('Should log user in', () => {
  const uid = '62442';
  const action = { type: 'LOGIN', uid };
  const state = authReducer(undefined, action);
  expect(state).toEqual({ uid });
});

test('Should log user out', () => {
  const user = { uid: '62442' };
  const action = { type: 'LOGOUT' };
  const state = authReducer(user, action);
  expect(state).toEqual({});
});
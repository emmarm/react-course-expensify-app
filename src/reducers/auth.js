const authReducerDefaultState = {};

export default (state = authReducerDefaultState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid
      };
      break;
    case 'LOGOUT':
      return {};
      break;
    default:
      return state;
      break;
  }
};
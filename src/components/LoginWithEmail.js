import React from 'react';

import LoginForm from './LoginForm';
import PasswordForgetLink from './PasswordForgetLink';

const LoginWithEmail = ({ history }) => (
  <div>
    <LoginForm history={history} />
    <PasswordForgetLink />
  </div>
);

export default LoginWithEmail;
import React from 'react';

import PasswordForgetForm from './PasswordForgetForm';
import LoginLink from './LoginLink';

const PasswordForgetPage = () => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <PasswordForgetForm />
      <LoginLink
        text="Return to "
      />
    </div>
  </div>
);

export default PasswordForgetPage;
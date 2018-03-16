import React from 'react';
import { Link } from 'react-router-dom';

const SignUpLink = () => (
  <p>
    Don't have an account?
    {' '}
    <Link to={'/signup'}>Sign Up</Link>
  </p>
);

export default SignUpLink;
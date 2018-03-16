import React from 'react';
import { Link } from 'react-router-dom';

const LoginLink = (props) => (
  <p>
    {props.text}
    {' '}
    <Link to={'/'}>Log in</Link>
  </p>
);

export default LoginLink;
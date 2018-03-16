import React from 'react';
import { Link } from 'react-router-dom';

import { startResetPassword } from '../actions/auth';

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = (event) => {
    const { email } = this.state;
    startResetPassword(email)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(() => ({
          error
        }));
      });
    event.preventDefault();
  }
  onEmailChange = (e) => {
    const email = e.target.value;
    this.setState(() => ({
      email
    }));
  }
  render() {
    const {
      email,
      error,
    } = this.state;
    const isInvalid = email === '';
    return (
      <form onSubmit={this.onSubmit} className="form">
        <input
          value={this.state.email}
          onChange={this.onEmailChange}
          type="text"
          placeholder="Email Address"
          className="text-input"
        />
        <button disabled={isInvalid} type="submit" className="button">
          Reset My Password
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
};

export default PasswordForgetForm;
import React from 'react';
import { startLoginWithEmail } from '../actions/auth';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null
};

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = (event) => {
    const {
      email,
      password
    } = this.state;
    startLoginWithEmail(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        props.history.push('/');
      })
      .catch(error => {
        this.setState(() => ({
          error
        }));
      });
    event.preventDefault();
  }
  onEmailChange = (event) => {
    const email = event.target.value;
    this.setState(() => ({
      email
    }));
  }
  onPasswordChange = (event) => {
    const password = event.target.value;
    this.setState(() => ({
      password
    }));
  }
  render() {
    const {
      email,
      password,
      error
    } = this.state;
    const isInvalid =
      password === '' ||
      email === '';
    return (
      <form onSubmit={this.onSubmit} className="form">
        <input
          value={email}
          onChange={this.onEmailChange}
          type="text"
          placeholder="Email Address"
          className="text-input"
        />
        <input
          value={password}
          onChange={this.onPasswordChange}
          type="password"
          placeholder="Password"
          className="text-input"
        />
        <button disabled={isInvalid} type="submit" className="button">
          Log in
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
};

export default LoginForm;
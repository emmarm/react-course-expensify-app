import React from 'react';
import { startCreateUserWithEmail } from '../actions/auth';

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  };
  onSubmit = (event) => {
    const {
      username,
      email,
      passwordOne,
    } = this.state;
    const {
      history,
    } = this.props;
    startCreateUserWithEmail(email, passwordOne)
      .then(authUser => {
        db.doCreateUser(authUser.uid, username, email)
          .then(authUser => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push('/');
          })
          .catch(error => {
            this.setState(() => ({
              error
            }));
          });
      })
      .catch(error => {
        this.setState(() => ({
          error
        }));
      });
    event.preventDefault();
  };
  onUsernameChange = (event) => {
    const username = event.target.value;
    this.setState(() => ({
      username
    }));
  };
  onEmailChange = (event) => {
    const email = event.target.value;
    this.setState(() => ({
      email
    }));
  };
  onPasswordOneChange = (event) => {
    const passwordOne = event.target.value;
    this.setState(() => ({
      passwordOne
    }));
  };
  onPasswordTwoChange = (event) => {
    const passwordTwo = event.target.value;
    this.setState(() => ({
      passwordTwo
    }));
  };
  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';
    return (
      <form onSubmit={this.onSubmit} className="form">
        <input
          value={username}
          onChange={this.onUsernameChange}
          type="text"
          placeholder="First Name"
          className="text-input"
        />
        <input
          value={email}
          onChange={this.onEmailChange}
          type="text"
          placeholder="Email Address"
          className="text-input"
        />
        <input
          value={passwordOne}
          onChange={this.onPasswordOneChange}
          type="password"
          placeholder="Password"
          className="text-input"
        />
        <input
          value={passwordTwo}
          onChange={this.onPasswordTwoChange}
          type="password"
          placeholder="Confirm Password"
          className="text-input"
        />
        <button disabled={isInvalid} type="submit" className="button">
          Sign Up
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
};

export default SignUpForm;
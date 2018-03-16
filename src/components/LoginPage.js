import React from 'react';
import { connect } from 'react-redux';
import FacebookLoginButton from 'react-social-login-buttons/lib/buttons/FacebookLoginButton';
import GoogleLoginButton from 'react-social-login-buttons/lib/buttons/GoogleLoginButton';

import { startLoginWithAuthProvider } from '../actions/auth';
import LoginWithEmail from './LoginWithEmail';
import SignUpLink from './SignUpLink';

export class LoginPage extends React.Component {
  startLoginWithGoogle = () => {
    this.props.startLoginWithAuthProvider('google');
  }
  startLoginWithFacebook = () => {
    this.props.startLoginWithAuthProvider('facebook')
  }
  render () {
    return (
      <div className="box-layout">
        <div className="box-layout__box">
          <h1 className="box-layout__title">Expensify</h1>
          <LoginWithEmail />
          <GoogleLoginButton 
            onClick={this.startLoginWithGoogle}
            text={"Log in with Google"}
          />
          <FacebookLoginButton 
            onClick={this.startLoginWithFacebook}
            text={"Log in with Facebook"}
          />
          <SignUpLink />
        </div>
      </div>
    )
  };
};

const mapDispatchToProps = (dispatch) => ({
  startLoginWithAuthProvider: (authProvider) => dispatch(startLoginWithAuthProvider(authProvider))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
import React from 'react';
import { Link } from 'react-router';

import LoginForm from './login/login_form';


const LoginPage = React.createClass({
  render: function() {
    return (
      <div>
        <p>Login or Create an Account</p>
        <LoginForm loginAction={this.props.loginAction}/>
        <Link to={'/sign_up'}>Register</Link>
      </div>
    );
  }
});

export default LoginPage;

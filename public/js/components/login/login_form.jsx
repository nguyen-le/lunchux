import React from 'react';

import LoginMixins from '../mixins/login_mixins';

const LoginForm = React.createClass({
  mixins: [LoginMixins],
  render: function() {
    return (
      <form onSubmit={this._onSubmit}>
        <p>Login form</p>
        <label htmlFor='login-email'>Email Address</label>
        <input id='login-email' type='text' value={this.state.email} onChange={this._onChangeEmail}/>
        <label htmlFor='login-pw'>Password</label>
        <input id='login-pw' type='password' value={this.state.password} onChange={this._onChangePw}/>
        <input type='submit' />
      </form>
    );
  },
  _onSubmit: function(event) {
    event.preventDefault();
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/loginget');
    xhr.onreadystatechange = () => {
      if (xhr.status === 200 && xhr.readyState === XMLHttpRequest.DONE) {
        this.props.loginAction();
      }
    };
    xhr.send();
  }
});

export default LoginForm;

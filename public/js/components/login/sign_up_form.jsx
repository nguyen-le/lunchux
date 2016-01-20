import React from 'react';

import LoginMixins from '../mixins/login_mixins';


const SignUpForm = React.createClass({
  mixins: [LoginMixins],
  render: function() {
    return (
      <form onSubmit={this._onSubmit}>
        <p>Sign up form</p>
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
    xhr.open('POST', '/sign_up');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          //this.props.signUpAction();
          this.props.actions.login();
        } else {
          console.log('login Failed');
          console.log(this.state);
        }
      }
    };
    xhr.send(JSON.stringify(this.state));
  }
});

export default SignUpForm;
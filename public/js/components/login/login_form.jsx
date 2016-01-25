//import Divider from 'material-ui/lib/divider';
import Color from 'material-ui/lib/styles/colors';
import RaisedButton from 'material-ui/lib/raised-button';
import React from 'react';
import TextField from 'material-ui/lib/text-field';


const LoginForm = React.createClass({
  getInitialState: function() {
    return {email: '', password: '', errors: new Map};
  },
  render: function() {
    const emailError = this.state.errors.get('email');
    const passwordError = this.state.errors.get('password');

    return (
      <form onSubmit={this._onSubmit}>
        <TextField
          type='text'
          value={this.state.email}
          autoFocus={true}
          errorText={emailError ? 'made mistake' : null}
          floatingLabelStyle={emailError ? {color: Color.red500} : null}
          floatingLabelText='Email'
          onChange={this._onChangeEmail} />
        <br />
        <TextField
          type='password'
          value={this.state.password}
          errorText={passwordError ? passwordError : null}
          floatingLabelStyle={passwordError ? {color: Color.red500} : null}
          floatingLabelText='Password'
          onChange={this._onChangePassword} />
        <br />
        <RaisedButton
          label='Log In'
          onClick={this._onSubmit} />
      </form>
    );
  },
  _onChangeEmail: function(event) {
    this.setState({email: event.target.value});
  },
  _onChangePassword: function(event) {
    this.setState({password: event.target.value});
  },
  _onSubmit: function(event) {
    event.preventDefault();

    const payload = {
      email: this.state.email,
      password: this.state.password
    };
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/login');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.status === 200 && xhr.readyState === XMLHttpRequest.DONE) {
        this.props.loginAction();
      } else {
        // signal error messaging
      }
    };
    xhr.send(JSON.stringify(payload));
  }
});

export default LoginForm;

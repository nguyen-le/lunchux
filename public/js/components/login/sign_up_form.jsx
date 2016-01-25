import Color from 'material-ui/lib/styles/colors';
import RaisedButton from 'material-ui/lib/raised-button';
import React from 'react';
import TextField from 'material-ui/lib/text-field';


const SignUpForm = React.createClass({
  getInitialState: function() {
    return {email: '', password: '', errors: new Map};
  },
  render: function() {
    const emailError = false;
    const passwordError = false;
    return (
      <form onSubmit={this._onSubmit}>
        <TextField
          type='text'
          value={this.state.email}
          errorText={emailError ? 'mistake' : null}
          floatingLabelStyle={emailError ? {color: Color.red500} : null}
          floatingLabelText='Email'
          onChange={this._onChangeEmail} />
        <br/>
        <TextField
          type='password'
          value={this.state.password}
          errorText={passwordError ? 'mistake' : null}
          floatingLabelStyle={passwordError ? {color: Color.red500} : null}
          floatingLabelText='Password'
          onChange={this._onChangePassword} />
        <br/>
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
    xhr.open('POST', '/user');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          //this.props.signUpAction();
          this.props.actions.login();
        } else {
          // signal error messaging
        }
      }
    };
    xhr.send(JSON.stringify(payload));
  }
});

export default SignUpForm;

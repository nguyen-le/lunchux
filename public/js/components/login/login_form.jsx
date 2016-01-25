import React from 'react';
//import Divider from 'material-ui/lib/divider';
import Color from 'material-ui/lib/styles/colors';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';


const LoginForm = React.createClass({
  getInitialState: function() {
    return {email: '', password: '', errors: new Map};
  },
  render: function() {
    const emailError = this.state.errors.get('email');
    const passwordError = this.state.errors.get('password');

    return (
      <div>
        <form onSubmit={this._onSubmit}>
          <TextField
            onChange={this._onChangeEmail}
            type='text'
            floatingLabelStyle={ emailError ? {color: Color.red500} : null}
            floatingLabelText='Email'
            errorText={ emailError ? 'made mistake' : null }
            autoFocus={true}/>
          <br />
          <TextField
            onChange={this._onChangePassword}
            type='password'
            floatingLabelStyle={ passwordError ? {color: Color.red500} : null }
            floatingLabelText='Password'
            errorText={ passwordError ? passwordError : null }
          />
          <br />
          <RaisedButton
            onClick={this._onSubmit}
            label='Log In'
            backgroundColor={Color.red100}/>
        </form>
      </div>
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

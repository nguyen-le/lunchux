import Color from 'material-ui/lib/styles/colors';
import RaisedButton from 'material-ui/lib/raised-button';
import React from 'react';
import TextField from 'material-ui/lib/text-field';


const LunchFormIntro = React.createClass({
  getInitialState: function() {
    return {email: '', password: '', errors: new Map};
  },
  render: function() {
    const emailError = this.state.errors.get('email');
    const passwordError = this.state.errors.get('password');

    return (
      <div>
        <h1> Lunch Form Intro </h1>
        <TextField
          type='text'
          value={this.state.email}
          errorText={emailError ? 'made mistake' : null}
          floatingLabelStyle={emailError ? {color: Color.red500} : null}
          floatingLabelText='Email'
          onChange={this._onChangeEmail} />
        <TextField
          type='password'
          value={this.state.password}
          errorText={passwordError ? passwordError : null}
          floatingLabelStyle={passwordError ? {color: Color.red500} : null}
          floatingLabelText='Password'
          onChange={this._onChangePassword} />
        <RaisedButton
          label='continue'
          secondary={true}
          onClick={this._onSubmit} />
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
    return;
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
        const user = JSON.parse(xhr.response).data;
        this.props.loginAction(user);
      } else {
        // signal error messaging
      }
    };
    xhr.send(JSON.stringify(payload));
  }
});

export default LunchFormIntro;

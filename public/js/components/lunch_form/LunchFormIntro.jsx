import Color from 'material-ui/lib/styles/colors';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';
import React from 'react';
import SelectField from 'material-ui/lib/select-field';
import TextField from 'material-ui/lib/text-field';

import Translate from '../../translate';


const LunchFormIntro = React.createClass({
  getInitialState: function() {
    return {
      email: '',
      errors: new Map,
      language: {key: 1, name: 'English'},
      password: '',
      phone: ''
    };
  },
  render: function() {
    const emailError = this.state.errors.get('email');
    const firstNameError = this.state.errors.get('first_name');
    const lastNameError = this.state.errors.get('first_name');
    const phoneError = this.state.errors.get('phone');

    return (
      <div>
        <h1> Lunch Form Intro </h1>
        <span>Preferred language:</span>
        <SelectField floatingLabelText='Language' value={this.state.language.key} onChange={this._onChangeLanguage}>
          <MenuItem value={1} primaryText='English' />
          <MenuItem value={2} primaryText='Español' />
        </SelectField>
        <div>
          <TextField
            type='text'
            value={this.state.first_name}
            errorText={firstNameError ? 'made mistake' : null}
            floatingLabelStyle={emailError ? {color: Color.red500} : null}
            floatingLabelText={Translate.get('first_name')}
            onChange={this._onChangeFirstName} />
          <TextField
            type='text'
            value={this.state.last_name}
            errorText={lastNameError ? 'made mistake' : null}
            floatingLabelStyle={emailError ? {color: Color.red500} : null}
            floatingLabelText={Translate.get('last_name')}
            onChange={this._onChangeLastName} />
        </div>
        <TextField
          style={{display: 'block'}}
          type='text'
          value={this.state.phone}
          errorText={phoneError ? 'made mistake' : null}
          floatingLabelStyle={phoneError ? {color: Color.red500} : null}
          floatingLabelText={Translate.get('phone')}
          onChange={this._onChangePhone} />
        <TextField
          style={{display: 'block'}}
          type='text'
          value={this.state.email}
          errorText={emailError ? 'made mistake' : null}
          floatingLabelStyle={emailError ? {color: Color.red500} : null}
          floatingLabelText={Translate.get('email')}
          onChange={this._onChangeEmail} />
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
  _onChangeFirstName: function(event) {
    this.setState({first_name: event.target.value});
  },
  _onChangeLastName: function(event) {
    this.setState({last_name: event.target.value});
  },
  _onChangeLanguage: function(event, index, value) {
    this.setState({language: {key: value, name: event.target.innerText}});
    Translate.useLanguage(event.target.innerText);
  },
  _onChangePhone: function(event) {
    this.setState({phone: event.target.value});
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

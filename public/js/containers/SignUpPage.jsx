import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SignUpForm from '../components/SignUpForm';
import LoginActions from '../actions/login';


function mapStateToProps(state) {
  return {
    logged_in: state.logged_in,
    lunch_form_data: state.lunch_form_data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(LoginActions, dispatch)
  };
}

const ConnectedSignUpPage = connect(mapStateToProps, mapDispatchToProps)(SignUpForm);

export default ConnectedSignUpPage;

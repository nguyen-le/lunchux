import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import login_actions from '../actions/login_actions';
import SignUpForm from '../components/SignUpForm';


function mapStateToProps(state) {
  return {
    logged_in: state.logged_in,
    lunch_form_data: state.lunch_form_data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(login_actions, dispatch)
  };
}

const ConnectedSignUpPage = connect(mapStateToProps, mapDispatchToProps)(SignUpForm);

export default ConnectedSignUpPage;

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import { Link } from 'react-router';

import Actions from '../actions/login';
import LunchFormIntro from '../components/lunch_form/LunchFormIntro';


const LunchFormPage = React.createClass({
  render: function() {
    return (
      <div>
        <h1> Lunch Form Page </h1>
        <LunchFormIntro />
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}
const ConnectedLunchFormPage = connect(mapStateToProps, mapDispatchToProps)(LunchFormPage);

export default ConnectedLunchFormPage;

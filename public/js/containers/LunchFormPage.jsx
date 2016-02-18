import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import { Link } from 'react-router';

import Actions from '../actions/actions';
import LunchFormIntro from '../components/lunch_form/LunchFormIntro';


const LunchFormPage = React.createClass({
  render: function() {
    return (
      <div style={{
        backgroundColor: 'white',
        width: '60%',
        padding: '30px',
        borderRadius: '5px',
        marginRight: 'auto',
        marginLeft: 'auto'}}>
        <h1> Lunch Form Page </h1>
        <LunchFormIntro changeLanguage={this.props.actions.changeLanguage}/>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    user: state.user,
    lunch_form_data: state.lunch_form_data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}
const ConnectedLunchFormPage = connect(mapStateToProps, mapDispatchToProps)(LunchFormPage);

export default ConnectedLunchFormPage;

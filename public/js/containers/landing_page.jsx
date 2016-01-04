import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Login from '../components/login';
import Actions from '../actions/actions';

const LandingPage = React.createClass({
  render: function() {
    //const lunch_form_data = this.props.lunch_form_data;
    const actions = this.props.actions;
    return (
      <div>
        <p>LandingPage</p>
        <Login loginAction={actions.login} history={this.props.history}/>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    logged_in: state.logged_in,
    lunch_form_data: state.lunch_form_data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}
const ConnectedLandingPage = connect(mapStateToProps, mapDispatchToProps)(LandingPage);

export default ConnectedLandingPage;

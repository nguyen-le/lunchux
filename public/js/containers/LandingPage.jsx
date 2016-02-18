import Color from 'material-ui/lib/styles/colors';
import RaisedButton from 'material-ui/lib/raised-button';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import LoginForm from '../components/LoginForm';
import login_actions from '../actions/login_actions';


const LandingPage = React.createClass({
  render: function() {
    //const lunch_form_data = this.props.lunch_form_data;
    const actions = this.props.actions;
    return (
      <div>
        <h1>Continue or Start a new application</h1>
        <LoginForm loginAction={actions.login} history={this.props.history}/>
        <Link to={'/lunch_form'}>
          <RaisedButton
            label='Start new application'
            labelStyle={{color: 'white'}}
            backgroundColor={Color.green500} />
        </Link>
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
    actions: bindActionCreators(login_actions, dispatch)
  };
}
const ConnectedLandingPage = connect(mapStateToProps, mapDispatchToProps)(LandingPage);

export default ConnectedLandingPage;

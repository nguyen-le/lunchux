import AppBar from 'material-ui/lib/app-bar';
import Paper from 'material-ui/lib/paper';
import React from 'react';
import { classNames } from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import { Link } from 'react-router';

import Actions from '../actions/actions';
import LunchFormIntro from '../components/lunch_form/LunchFormIntro';


const LunchFormPage = React.createClass({
  render: function() {
    //backgroundColor: 'white',
    return (
      <div style={{
        width: '100%',
        height: '100%',
        marginRight: 'auto',
        marginLeft: 'auto'}}
        className={'grad'}>
        <AppBar
          style={{
            backgroundColor: '#000033'
          }}
        />
        <Paper
          style={{
            width: '60%',
            padding: '40px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
          zDepth={1}
        >
          <LunchFormIntro changeLanguage={this.props.actions.changeLanguage}/>
        </Paper>
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

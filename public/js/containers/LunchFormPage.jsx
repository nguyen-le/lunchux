import AppBar from 'material-ui/lib/app-bar';
import Paper from 'material-ui/lib/paper';
import React from 'react';
import { classNames } from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import { Link } from 'react-router';

import Actions from '../actions/actions';
import LunchFormInfo from '../components/lunch_form/LunchFormInfo';
import LunchFormIntro from '../components/lunch_form/LunchFormIntro';


const LunchFormPage = React.createClass({
  getInitialState: function() {
    return {page: 0};
  },
  render: function() {
    let page;
    switch (this.state.page) {
    case 0:
      page = <LunchFormInfo nextPage={this.switchPage.bind(this, 1)}/>;
      break;
    case 1:
      page = <LunchFormIntro changeLanguage={this.props.actions.changeLanguage}/>;
      break;
    }
    return (
      <div style={{
        width: '100%',
        height: '100%',
        marginRight: 'auto',
        marginLeft: 'auto'}}
        className={'grad'}>
        <AppBar
          style={{
            backgroundColor: 'rgba(0,0,0,0)'
          }}
          zDepth={0}
        />
        <Paper
          style={{
            width: '60%',
            padding: '40px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
          zDepth={1}
        >{page}</Paper>
      </div>
    );
  },
  switchPage: function(num) {
    this.setState({page: num});
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

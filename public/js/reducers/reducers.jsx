import Immutable from 'immutable';
import { combineReducers } from 'redux';

import action_types from '../constants/action_types';


const map = Immutable.Map();
const lunch_form_map = Immutable.Map();

function loginReducer(state=map, action) {
  switch (action.type) {
  case 'LOG_IN':
    console.log('loginReducer');
    return state.set('user', action.user);

  default:
    return state;
  }
}

function lunchFormReducer(state=lunch_form_map, action) {
  switch (action.type) {
  case action_types.CHANGE_LANGUAGE:
    console.log('changin lanugage');
    return state;
  case 'INPUT':
    //TODO
    break;

  default:
    return state;
  }
}

const finalReducer = combineReducers({
  user: loginReducer,
  lunch_form_data: lunchFormReducer
});

module.exports = finalReducer;

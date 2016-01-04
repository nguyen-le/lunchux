var Redux = require('redux');


function loginReducer(state, action) {
  state = state || false;
  switch (action.type) {
    case 'LOG_IN':
      //TODO
      console.log('loginFormReducer');
      return state;

    default:
      return state;
  }
}

function lunchFormReducer(state, action) {
  state = state || {};
  switch (action.type) {
    case 'DATA' :
      console.log('lunchFormReducer');
      return state;
    case 'INPUT':
      //TODO
      break;

    default:
      return state;
  }
}

var finalReducer = Redux.combineReducers({
  logged_in: loginReducer,
  lunch_form_data: lunchFormReducer
});

module.exports = finalReducer;

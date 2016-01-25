const Immutable = require('immutable');
const Redux = require('redux');


const map = Immutable.Map();
function loginReducer(state=map, action) {
  switch (action.type) {
  case 'LOG_IN':
    console.log('loginReducer');
    return state.set('user', action.user);

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

const finalReducer = Redux.combineReducers({
  user: loginReducer,
  lunch_form_data: lunchFormReducer
});

module.exports = finalReducer;

import ActionTypes from '../constants/action_types';


function login(user) {
  return {
    type: ActionTypes.LOG_IN,
    user: user
  };
}

const LoginActions = {
  login: login
};

export default LoginActions;

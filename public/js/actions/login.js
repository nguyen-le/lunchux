import ActionTypes from '../constants/action_types';


function login(user_data) {
  return {
    type: ActionTypes.LOG_IN,
    user_data: user_data
  };
}

const LoginActions = {
  login: login
};

export default LoginActions;

import ActionTypes from '../constants/action_types';


function changeLanguage(language) {
  return {
    type: ActionTypes.CHANGE_LANGUAGE,
    language: language
  };
}

const form_actions = {
  changeLanguage: changeLanguage
};

export default form_actions;

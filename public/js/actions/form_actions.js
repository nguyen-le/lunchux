import ActionTypes from '../constants/action_types';


function change_language(language) {
  return {
    type: ActionTypes.CHANGE_LANGUAGE,
    language: language
  };
}

const form_actions = {
  change_language: change_language
};

export default form_actions;

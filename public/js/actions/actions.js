import objectAssign from 'object-assign';

import login_actions from './login_actions';
import form_actions from './form_actions';


const Actions = objectAssign({}, login_actions, form_actions);
export default Actions;

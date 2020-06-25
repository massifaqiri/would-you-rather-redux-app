// combine the reducers and export them
import { combineReducers } from 'redux';

import authedUser from './authedUser';
import questions from './questions';
import users from './users';
import currentTab from './currentTab';

export default combineReducers({
  users,
  questions,
  authedUser,
  currentTab
});

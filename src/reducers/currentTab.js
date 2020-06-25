import { SET_CURRENT_TAB } from '../actions/currentTab';

export default function currentTab(state = 'null', action) {
  if (action.type === SET_CURRENT_TAB) {
    return action.currentTab;
  } else {
    return state;
  }
}

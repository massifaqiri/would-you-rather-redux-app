export const SET_CURRENT_TAB = 'SET_CURRENT_TAB';

export function setCurrentTab(currentTab) {
  return {
    type: SET_CURRENT_TAB,
    currentTab,
  };
}

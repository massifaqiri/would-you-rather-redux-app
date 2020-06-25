export default function logger(store) {
  return function (next) {
    return function (action) {
      console.group(action.type);
      console.log('Current state (aka store) is: ', store.getState());
      const nextState = next(action);
      console.log('New state is: ', store.getState());
      console.groupEnd();
      return nextState;
    };
  };
}

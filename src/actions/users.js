export const ADD_USER = 'ADD_USER';
export const RECEIVE_USER = 'RECEIVE_USER';

export function receiveUsers(users) {
  return {
    type: RECEIVE_USER,
    users,
  };
}

function addUser(name, username, password, avatarURL) {
  return {
    type: ADD_USER,
    name,
    username,
    password,
    avatarURL,
  };
}

export function handleAddUser(name, username, password, avatarURL) {
  return dispatch => {
    dispatch(addUser(name, username, password, avatarURL));
  };
}

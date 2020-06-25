import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../styles/NavAvatar.css';

/**
 * Functional component representing the avatars on navbar.
 * @param Refer to PropTypes below.
 */
function NavAvatar(props) {
  const { authedUser, users } = props;
  const authedUserName = users[authedUser].name;
  const authedUserAvatarURL = users[authedUser].avatarURL;
  return (
    <span>
      {authedUserName}
      <img src={authedUserAvatarURL} alt='User Avatar' width='50' height='50' />
    </span>
  );
}

NavAvatar.propTypes = {
  authedUser: PropTypes.string.isRequired,
  users: PropTypes.object.isRequired,
};

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  };
}

export default connect(mapStateToProps)(NavAvatar);

import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/TeaserAvatar.css';

/**
 * Functional component representing the avatars on TeaserCard on homepage.
 * @param Refer to PropTypes below.
 */
function TeaserAvatar(props) {
  const { author, avatarURL } = props;
  return (
    <div className='avatar-container'>
      <img src={avatarURL} alt='User Avatar' width='80' height='80' />
      <div>{author}</div>
    </div>
  );
}

TeaserAvatar.propTypes = {
  author: PropTypes.string.isRequired,
  avatarURL: PropTypes.string.isRequired,
};

export default TeaserAvatar;

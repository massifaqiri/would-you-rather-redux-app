import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../styles/TeaserCard.css';
import TeaserAvatar from './TeaserAvatar';

/**
 * Functional component representing the TeaserCard on the home page.
 * @param Refer to PropTypes below.
 */
function TeaserCard(props) {
  const { questionId, author, avatarURL, optionOne } = props;
  return (
    <div className='row'>
      <div className='column left'>
        <TeaserAvatar author={author} avatarURL={avatarURL} />
      </div>
      <div className='column right'>
        <div className='card-title'>Would You Rather</div>
        <div className='question-teaser'>{optionOne} or ...</div>
        <Link
          to={`/questions/${questionId}`}
          style={{ textDecoration: 'none' }}
        >
          <button className='view-poll-btn'>VIEW POLL</button>
        </Link>
      </div>
    </div>
  );
}

TeaserCard.propTypes = {
  questionId: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  avatarURL: PropTypes.string.isRequired,
  optionOne: PropTypes.string,
};

export default TeaserCard;

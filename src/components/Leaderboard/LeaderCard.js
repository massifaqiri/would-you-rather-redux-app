import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/LeaderCard.css';

/**
 * Functional component representing each card containing users on leaderboard
 * @param Refer to PropTypes below
 */
function LeaderCard(props) {
  const { name, avatarURL, answersNumber, questionsNumber, score } = props;
  return (
    <div className='leadercard-row'>
      <div className='leadercard-column leader-avatar'>
        <img src={avatarURL} alt='User avatar' width='91' height='91' />
        <h1>{name}</h1>
      </div>
      <div className='leadercard-column leader-numbers'>
        <div>{answersNumber}</div>
        <p>Answered Questions</p>
        <div>{questionsNumber}</div>
        <p>Created Questions</p>
      </div>
      <div className='leadercard-column leader-score'>
        <div className='scorecard'>
          <h5>Score</h5>
          <h1>{score}</h1>
        </div>
      </div>
    </div>
  );
}

LeaderCard.propTypes = {
  name: PropTypes.string.isRequired,
  avatarURL: PropTypes.string.isRequired,
  answersNumber: PropTypes.number.isRequired,
  questionsNumber: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default LeaderCard;

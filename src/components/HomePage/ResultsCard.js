import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../styles/ResultsCard.css';
import TeaserAvatar from './TeaserAvatar';

/**
 * Function representing ResultsCard component showing the number of votes for each option.
 * @param Refer to PropTypes below.
 */
function ResultsCard(props) {
  const {
    name,
    avatarURL,
    optionOneText,
    optionOneVotesNumber,
    optionTwoText,
    optionTwoVotesNumber,
    votedOption,
  } = props;
  const totalVotes = optionOneVotesNumber + optionTwoVotesNumber;
  const optionOnePercent = Math.round(
    (optionOneVotesNumber / totalVotes) * 100
  );
  const optionTwoPercent = Math.round(
    (optionTwoVotesNumber / totalVotes) * 100
  );

  return (
    <div className='results-row'>
      <div className='results-column results-left'>
        <TeaserAvatar author={name} avatarURL={avatarURL} />
      </div>
      <div className='results-column results-right'>
        <div className='results-card-title'>Results</div>
        <div
          className='option-one-result-container'
          style={
            votedOption === 'optionOne'
              ? { background: '#3473df' }
              : { background: '#30444e' }
          }
        >
          {votedOption === 'optionOne' && (
            <div className='badge'>Your Vote</div>
          )}
          <p className='answer-text'>{optionOneText}</p>
          <div className='progress-bar-container'>
            <div
              className='progress-bar'
              style={{ width: `${optionOnePercent}%` }}
            ></div>
          </div>
          <div className='vote-count-container'>
            <p className='votes-count'>
              {optionOneVotesNumber} out of {totalVotes} votes
            </p>
            <p className='percentage'>{optionOnePercent}%</p>
          </div>
        </div>
        <div
          className='option-two-result-container'
          style={
            votedOption === 'optionTwo'
              ? { background: '#3473df' }
              : { background: '#30444e' }
          }
        >
          {votedOption === 'optionTwo' && (
            <div className='badge'>Your Vote</div>
          )}
          <p className='answer-text'>{optionTwoText}</p>

          <div className='progress-bar-container'>
            <div
              className='progress-bar'
              style={{ width: `${optionTwoPercent}%` }}
            ></div>
          </div>
          <div className='vote-count-container'>
            <p className='votes-count'>
              {optionTwoVotesNumber} out of {totalVotes} votes
            </p>
            <p className='percentage'>{optionTwoPercent}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

ResultsCard.propTypes = {
  name: PropTypes.string.isRequired,
  avatarURL: PropTypes.string.isRequired,
  optionOneText: PropTypes.string.isRequired,
  optionOneVotesNumber: PropTypes.number,
  optionTwoText: PropTypes.string.isRequired,
  optionTwoVotesNumber: PropTypes.number,
  votedOption: PropTypes.string.isRequired,
};

function mapStateToProps({ questions, users, authedUser }, ownProps) {
  const { question_id } = ownProps;
  const { author } = questions[question_id];
  const { name, avatarURL } = users[author];
  const optionOneText = questions[question_id].optionOne.text;
  const optionOneVotesNumber = questions[question_id].optionOne.votes.length;
  const optionTwoText = questions[question_id].optionTwo.text;
  const optionTwoVotesNumber = questions[question_id].optionTwo.votes.length;
  const votedOption = users[authedUser].answers[question_id];
  return {
    name,
    avatarURL,
    optionOneText,
    optionOneVotesNumber,
    optionTwoText,
    optionTwoVotesNumber,
    votedOption,
  };
}

export default connect(mapStateToProps)(ResultsCard);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleSaveQuestionAnswer } from '../../actions/questions';
import '../../styles/QuestionCard.css';
import TeaserAvatar from './TeaserAvatar';

/**
 * Class representing QuestionCard component shown on homepage.
 * @extends Component
 */
class QuestionCard extends Component {
  state = {
    vote: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { authedUser, question_id, author } = this.props;
    const { vote } = this.state;
    if (vote === '') {
      alert('You cannot leave it blank. Please choose one option!');
    } else {
      this.props.dispatch(
        handleSaveQuestionAnswer(authedUser, question_id, vote, author)
      );
    }
  };

  render() {
    const { name, avatarURL, optionOneText, optionTwoText } = this.props;

    return (
      <div className='qcard-row'>
        <div className='qcard-column qcard-left'>
          <TeaserAvatar author={name} avatarURL={avatarURL} />
        </div>
        <div className='qcard-column qcard-right'>
          <div className='qcard-card-title'>Would You Rather</div>
          <div>
            <input
              type='radio'
              id='optionOne'
              name='options'
              value='optionOne'
              onChange={() => this.setState({ vote: 'optionOne' })}
            ></input>
            {optionOneText}
          </div>
          <div>
            <input
              type='radio'
              id='optionTwo'
              name='options'
              value='optionTwo'
              onChange={() => this.setState({ vote: 'optionTwo' })}
            ></input>
            {optionTwoText}
          </div>
          <div className='qcard-btn-container'>
            <button
              className='qcard-submit-btn'
              onClick={this.handleSubmit}
              disabled={this.state.vote === ''}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    );
  }
}

QuestionCard.propTypes = {
  authedUser: PropTypes.string.isRequired,
  question_id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatarURL: PropTypes.string.isRequired,
  optionOneText: PropTypes.string.isRequired,
  optionTwoText: PropTypes.string.isRequired,
};

function mapStateToProps({ users, questions, authedUser }, ownProps) {
  const { question_id } = ownProps;
  const { author } = questions[question_id];
  const { name, avatarURL } = users[author];
  const optionOneText = questions[question_id].optionOne.text;
  const optionTwoText = questions[question_id].optionTwo.text;
  return {
    authedUser,
    question_id,
    author,
    name,
    avatarURL,
    optionOneText,
    optionTwoText,
  };
}

export default connect(mapStateToProps)(QuestionCard);

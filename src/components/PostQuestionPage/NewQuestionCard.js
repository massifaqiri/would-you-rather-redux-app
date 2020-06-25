import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../styles/NewQuestionCard.css';
import { handleAddQuestion } from '../../actions/questions';
import { setCurrentTab } from '../../actions/currentTab';

/**
 * Class component representing the 'Post Your Question' page's submission card.
 * @extends Component
 */
class NewQuestionCard extends Component {
  state = {};

  handleInput = (option, value) => {
    this.setState({ [option]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { authedUser } = this.props;
    const { optionOne, optionTwo } = this.state;
    if (!optionOne || !optionTwo) {
      alert('You cannot leave any field blank. Please fill both!');
    } else {
      this.props.dispatch(handleAddQuestion(optionOne, optionTwo, authedUser));
      this.props.dispatch(setCurrentTab('home'));
      this.props.history.push('/questions');
    }
    this.setState({ optionOne: '', optionTwo: '' });
  };

  render() {
    return (
      <div className='new-question-container'>
        <div className='new-question-title'>Would You Rather</div>
        <input
          type='text'
          placeholder='Type your option one here...'
          className='new-question-input'
          onChange={event => this.handleInput('optionOne', event.target.value)}
          value={this.state.optionOne || ''}
        ></input>
        <div className='new-question-ortext'>OR</div>
        <input
          type='text'
          placeholder='Type your option two here...'
          className='new-question-input'
          onChange={event => this.handleInput('optionTwo', event.target.value)}
          value={this.state.optionTwo || ''}
        ></input>
        <div className='submit-btn-container'>
          <button
            type='submit'
            className='new-question-submit'
            onClick={this.handleSubmit}
          >
            SUBMIT
          </button>
        </div>
      </div>
    );
  }
}

NewQuestionCard.propTypes = {
  authedUser: PropTypes.string.isRequired,
};

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(NewQuestionCard);

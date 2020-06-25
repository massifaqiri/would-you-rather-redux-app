import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../styles/Tabs.css';
import TeaserCard from './TeaserCard';

/**
 * Class component representing the questions on both tabs of the home page.
 * @extends Component
 */
class Tabs extends Component {
  state = {
    currentTab: 'unansweredQuestions',
  };

  fetchQuestions() {
    const { users, questions, authedUser } = this.props;
    const answeredQuestions = Object.keys(users[authedUser].answers);
    const unansweredQuestions = Object.keys(questions).filter(
      id => !answeredQuestions.includes(id)
    );

    let unansweredQuestionsArray = [];
    unansweredQuestions.map(questionId =>
      unansweredQuestionsArray.push({
        questionId,
        author: users[questions[questionId].author].name,
        avatarURL: users[questions[questionId].author].avatarURL,
        optionOne: questions[questionId].optionOne.text,
        optionTwo: questions[questionId].optionTwo.text,
        timestamp: questions[questionId].timestamp,
      })
    );
    unansweredQuestionsArray.sort((a, b) => b.timestamp - a.timestamp);

    let answeredQuestionsArray = [];
    answeredQuestions.map(questionId =>
      answeredQuestionsArray.push({
        questionId,
        author: users[questions[questionId].author].name,
        avatarURL: users[questions[questionId].author].avatarURL,
        optionOne: questions[questionId].optionOne.text,
        optionTwo: questions[questionId].optionTwo.text,
        timestamp: questions[questionId].timestamp,
      })
    );
    answeredQuestionsArray.sort((a, b) => b.timestamp - a.timestamp);

    return {
      unansweredQuestions: unansweredQuestionsArray,
      answeredQuestions: answeredQuestionsArray,
    };
  }

  render() {
    const { unansweredQuestions, answeredQuestions } = this.fetchQuestions();
    const { currentTab } = this.state;

    return (
      <div className='content-container'>
        <div className='content-header'>
          <div className='card-column card-left'>
            <button
              className={`tab-title ${
                currentTab === 'unansweredQuestions' && 'active-tab'
              }`}
              onClick={() =>
                this.setState({ currentTab: 'unansweredQuestions' })
              }
            >
              UNANSWERED QUESTIONS
            </button>
          </div>
          <div className='card-column card-right'>
            <button
              className={`tab-title ${
                currentTab === 'answeredQuestions' && 'active-tab'
              }`}
              onClick={() => this.setState({ currentTab: 'answeredQuestions' })}
            >
              ANSWERED QUESTIONS
            </button>
          </div>
        </div>
        <div className='content-body'>
          {currentTab === 'unansweredQuestions' &&
            unansweredQuestions.map((question, index) => (
              <div key={index}>
                <TeaserCard
                  questionId={question.questionId}
                  author={question.author}
                  avatarURL={question.avatarURL}
                  optionOne={question.optionOne}
                />
              </div>
            ))}
          {currentTab === 'answeredQuestions' &&
            answeredQuestions.map((question, index) => (
              <div key={index}>
                <TeaserCard
                  questionId={question.questionId}
                  author={question.author}
                  avatarURL={question.avatarURL}
                  optionOne={question.optionOne}
                />
              </div>
            ))}
        </div>
      </div>
    );
  }
}

Tabs.propType = {
  users: PropTypes.object.isRequired,
  questions: PropTypes.object.isRequired,
  authedUser: PropTypes.string.isRequired,
};

function mapStateToProps({ users, questions, authedUser }) {
  return {
    users,
    questions,
    authedUser,
  };
}

export default connect(mapStateToProps)(Tabs);

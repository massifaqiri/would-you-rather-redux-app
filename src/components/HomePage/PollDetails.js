import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ResultsCard from './ResultsCard';
import QuestionCard from './QuestionCard';
import NotFoundPage from '../NotFoundPage';

/**
 * Functional component representing poll details component.
 * @param Refer to PropTypes
 */
function PollDetails(props) {
  const {
    match: { params },
  } = props;
  const { question_id } = params;
  const { authedUser, users, questions } = props;

  return (
    <div>
      {questions[question_id] ? (
        <div>
          {Object.keys(users[authedUser].answers).includes(question_id) ? (
            <ResultsCard question_id={question_id} />
          ) : (
            <QuestionCard question_id={question_id} />
          )}
        </div>
      ) : (
        <NotFoundPage />
      )}
    </div>
  );
}

PollDetails.propTypes = {
  authedUser: PropTypes.string.isRequired,
  users: PropTypes.object.isRequired,
  questions: PropTypes.object.isRequired,
};

function mapStateToProps({ authedUser, users, questions }) {
  return {
    authedUser,
    users,
    questions,
  };
}

export default connect(mapStateToProps)(PollDetails);

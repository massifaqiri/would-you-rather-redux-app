import {
  _saveQuestionAnswer,
  _saveQuestion,
  _verifyUser,
  _verifyQuestion,
  formatQuestion,
} from '../_DATA';
export const ADD_QUESTION = 'ADD_QUESTION';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function saveQuestionAnswer(authedUser, qid, answer) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer,
  };
}

export function handleSaveQuestionAnswer(authedUser, qid, answer, author) {
  return dispatch => {
    dispatch(saveQuestionAnswer(authedUser, qid, answer));
    if (
      _verifyUser(author) &&
      _verifyUser(authedUser) &&
      _verifyQuestion(qid)
    ) {
      return _saveQuestionAnswer({ authedUser, qid, answer });
    } else {
      console.log(
        'It looks like the user or the question is not in the backend but still exists in the local storage. So, your answer is stored in local storage. Upon refresh, you might lose it.'
      );
    }
  };
}

function addQuestion(formattedQuestion) {
  return {
    type: ADD_QUESTION,
    formattedQuestion,
  };
}

export function handleAddQuestion(optionOneText, optionTwoText, author) {
  return dispatch => {
    dispatch(
      addQuestion(formatQuestion({ optionOneText, optionTwoText, author }))
    );
    if (_verifyUser(author)) {
      return _saveQuestion({ optionOneText, optionTwoText, author });
    } else {
      console.log(
        'There was a problem adding question to the backend, probably because the user is not in the backend while persisted in the local storage.'
      );
    }
  };
}

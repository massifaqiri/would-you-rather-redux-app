import { ADD_USER, RECEIVE_USER } from '../actions/users';
import { SAVE_QUESTION_ANSWER, ADD_QUESTION } from '../actions/questions';

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USER:
      return {
        ...state,
        ...action.users,
      };
    case ADD_USER:
      return {
        ...state,
        [action.username]: {
          id: action.username,
          password: action.password,
          name: action.name,
          avatarURL: action.avatarURL,
          answers: {},
          questions: [],
        },
      };
    case SAVE_QUESTION_ANSWER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer,
          },
        },
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.formattedQuestion.author]: {
          ...state[action.formattedQuestion.author],
          questions: state[action.formattedQuestion.author].questions.concat([
            action.formattedQuestion.id,
          ]),
        },
      };
    default:
      return state;
  }
}

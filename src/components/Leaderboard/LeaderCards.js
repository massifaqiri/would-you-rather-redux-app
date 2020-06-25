import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LeaderCard from './LeaderCard';
import '../../styles/LeaderCards.css';

/**
 * Functional component representing the cards on LeaderBoard page.
 * @param Refer to PropTypes below.
 */
function LeaderCards(props) {
  const organizeLeaders = () => {
    const { users } = props;
    let organizedUsersList = [];
    const usersList = Object.keys(users);
    usersList.forEach(user => {
      let userInfo = users[user];
      const { name, avatarURL } = userInfo;
      const answersNumber = Object.keys(userInfo.answers).length;
      const questionsNumber = userInfo.questions.length;
      const score = answersNumber + questionsNumber;
      organizedUsersList.push({
        name,
        avatarURL,
        answersNumber,
        questionsNumber,
        score,
      });
    });
    organizedUsersList.sort((a, b) => b.score - a.score);
    return organizedUsersList;
  };

  const organizedUsersList = organizeLeaders();

  return (
    <div className='leadercards-container'>
      <div className='leadercard-container'>
        {organizedUsersList.map((user, index) => (
          <LeaderCard
            name={user.name}
            avatarURL={user.avatarURL}
            answersNumber={user.answersNumber}
            questionsNumber={user.questionsNumber}
            score={user.score}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

LeaderCards.propTypes = {
  users: PropTypes.object,
};

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(LeaderCards);

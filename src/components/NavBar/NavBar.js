import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAuthedUser } from '../../actions/authedUser';
import { setCurrentTab } from '../../actions/currentTab';
import NavAvatar from './NavAvatar';
import '../../styles/NavBar.css';

/**
 * Functional component representing the navbar.
 * @param Refer to PropTypes below.
 */
function NavBar(props) {
  const handleClick = tab => {
    props.dispatch(setCurrentTab(tab));
  };

  const handleLogOut = () => {
    props.dispatch(setAuthedUser('null'));
    props.dispatch(setCurrentTab('null'));
  };

  const { currentTab, authedUser } = props;
  return (
    <div className='navbar'>
      <Link
        to='/questions'
        onClick={() => handleClick('home')}
        className={`navbar-home-button ${
          currentTab === 'home' ? 'active' : 'passive'
        }`}
      >
        HOME
      </Link>
      <Link
        to='/add'
        onClick={() => handleClick('newQuestion')}
        className={`navbar-post-button ${
          currentTab === 'newQuestion' ? 'active' : 'passive'
        }`}
      >
        POST YOUR QUESTION
      </Link>
      <Link
        to='/leaderboard'
        onClick={() => handleClick('leaderboard')}
        className={`navbar-leaderboard-button ${
          currentTab === 'leaderboard' ? 'active' : 'passive'
        }`}
      >
        LEADERBOARD
      </Link>
      {authedUser !== 'null' && (
        <div>
          <NavAvatar />
          <Link
            to='/signin'
            style={{ textDecoration: 'none' }}
            onClick={handleLogOut}
          >
            <button className='logout-button'>LOG OUT</button>
          </Link>
        </div>
      )}
    </div>
  );
}

NavBar.propTypes = {
  currentTab: PropTypes.string.isRequired,
  authedUser: PropTypes.string.isRequired,
};

function mapStateToProps({ currentTab, authedUser }) {
  return {
    currentTab,
    authedUser,
  };
}

export default connect(mapStateToProps)(NavBar);

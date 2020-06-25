import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import handleReceiveData from '../actions/shared';
import LandingPage from './LandingPage/LandingPage';
import SignUpPage from './LandingPage/SignUpPage';
import SignInPage from './LandingPage/SignInPage';
import NewQuestionCard from './PostQuestionPage/NewQuestionCard';
import LeaderCards from './Leaderboard/LeaderCards';
import PollDetails from './HomePage/PollDetails';
import NavBar from './NavBar/NavBar';
import Tabs from './HomePage/Tabs';
import NotFoundPage from './NotFoundPage';
import '../styles/App.css';

/**
 * Class component representing the App component containing all other components and responsible for routing.
 * @extends Component
 */
class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleReceiveData());
  }
  render() {
    const { authedUser } = this.props;
    return (
      <div>
        {authedUser === 'null' ? (
          <div>
            <Route exact path='/' component={LandingPage} />
            <Route path='/signup' component={SignUpPage} />
            <Route path='/signin' component={SignInPage} />
            <Route exact path='/questions' component={NotFoundPage} />
            <Route path='/questions/:question_id' component={NotFoundPage} />
            <Route path='/add' component={NotFoundPage} />
            <Route path='/leaderboard' component={NotFoundPage} />
          </div>
        ) : (
          <div>
            <NavBar />
            <Route exact path='/questions' component={Tabs} />
            <Route path='/questions/:question_id' component={PollDetails} />
            <Route path='/add' component={NewQuestionCard} />
            <Route path='/leaderboard' component={LeaderCards} />
          </div>
        )}
      </div>
    );
  }
}

App.propTypes = {
  authedUser: PropTypes.string,
};

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(App);

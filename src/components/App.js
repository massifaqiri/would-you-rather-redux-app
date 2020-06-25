import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import { Route, Switch } from 'react-router-dom';
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
        <LoadingBar />
        {authedUser === 'null' ? (
          <div>
            <NavBar />
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/user/signup/form' component={SignUpPage} />
            <Route exact path='/:param' component={SignInPage} />
            <Route exact path='/:param/:param2' component={SignInPage} />
          </div>
        ) : (
          <div>
            <NavBar />
            <Switch>
              <Route exact path='/questions' component={Tabs} />
              <Route path='/questions/:question_id' component={PollDetails} />
              <Route path='/add' component={NewQuestionCard} />
              <Route path='/leaderboard' component={LeaderCards} />
              <Route component={NotFoundPage} />
            </Switch>
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

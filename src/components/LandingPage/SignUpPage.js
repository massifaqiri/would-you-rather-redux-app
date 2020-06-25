import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SignInputBox from './SignInputBox';
import '../../styles/SignUpPage.css';
import { handleAddUser } from '../../actions/users';
import avatar1 from '../../assets/avatars/avatar1.svg';
import avatar2 from '../../assets/avatars/avatar2.svg';
import avatar3 from '../../assets/avatars/avatar3.svg';
import avatar4 from '../../assets/avatars/avatar4.svg';
import avatar5 from '../../assets/avatars/avatar5.svg';

/**
 * Class component representing the Sign up page.
 * @extends Component
 */
class SignUpPage extends Component {
  state = {
    name: '',
    username: '',
    password: '',
    repeatPassword: '',
    nonMatchingPasswords: false,
    usernameTaken: false,
    successfulAccount: false,
    anyBlankField: false,
  };

  pickRandomAvatar = () => {
    // Credits: avataaars.io
    const avatarNames = [avatar1, avatar2, avatar3, avatar4, avatar5];
    return avatarNames[Math.floor(Math.random() * avatarNames.length)];
  };

  handleInput = (inputType, inputValue) => {
    switch (inputType) {
      case 'name':
        this.setState({
          name: inputValue,
        });
        break;
      case 'username':
        this.setState({
          username: inputValue,
        });
        break;
      case 'password':
        this.setState({
          password: inputValue,
        });
        break;
      case 'repeatPassword':
        this.setState({
          repeatPassword: inputValue,
        });
        break;
      default:
        break;
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, username, password, repeatPassword } = this.state;
    const { users } = this.props;
    if (!name || !username || !password || !repeatPassword) {
      this.setState({
        anyBlankField: true,
        nonMatchingPasswords: false,
        usernameTaken: false,
        successfulAccount: false,
        name: '',
        username: '',
        password: '',
        repeatPassword: '',
      });
    } else if (password !== repeatPassword) {
      this.setState({
        nonMatchingPasswords: true,
        anyBlankField: false,
        usernameTaken: false,
        successfulAccount: false,
        name: '',
        username: '',
        password: '',
        repeatPassword: '',
      });
    } else {
      if (username in users) {
        this.setState({
          usernameTaken: true,
          nonMatchingPasswords: false,
          successfulAccount: false,
          anyBlankField: false,
          name: '',
          username: '',
          password: '',
          repeatPassword: '',
        });
      } else {
        this.setState({
          successfulAccount: true,
          usernameTaken: false,
          nonMatchingPasswords: false,
          anyBlankField: false,
          name: '',
          username: '',
          password: '',
          repeatPassword: '',
        });
        const randomAvatarURL = this.pickRandomAvatar();
        this.props.dispatch(
          handleAddUser(name, username, password, randomAvatarURL)
        );
      }
    }
  };

  render() {
    const {
      name,
      username,
      password,
      repeatPassword,
      nonMatchingPasswords,
      usernameTaken,
      successfulAccount,
      anyBlankField,
    } = this.state;
    return (
      <div className='signup-form-box'>
        <div className='name-input'>
          <SignInputBox
            label='Name:'
            inputName='name'
            onChange={this.handleInput}
            value={name}
          />
        </div>
        <div className='username-input'>
          <SignInputBox
            label='Username:'
            inputName='username'
            onChange={this.handleInput}
            value={username}
          />
        </div>
        <div className='password-input'>
          <SignInputBox
            label='Password:'
            inputName='password'
            onChange={this.handleInput}
            value={password}
          />
        </div>
        <div className='repeat-password-input'>
          <SignInputBox
            label='Repeat Password:'
            inputName='repeatPassword'
            onChange={this.handleInput}
            value={repeatPassword}
          />
        </div>
        <div>
          <button className='signup-signup-button' onClick={this.handleSubmit}>
            SIGN UP
          </button>
        </div>
        {nonMatchingPasswords && (
          <p className='account-creation-message'>
            The passwords did not match. Please try again!
          </p>
        )}
        {usernameTaken && (
          <p className='account-creation-message'>
            The username is already taken. Please try another username!
          </p>
        )}
        {successfulAccount && (
          <p className='account-creation-message'>
            Account was created successfully. &nbsp;
            <Link
              to='/signin'
              style={{ textDecoration: 'none', color: 'white' }}
            >
              Please click here to log in!
            </Link>
          </p>
        )}
        {anyBlankField && (
          <p className='account-creation-message'>
            You cannot leave any field blank. Please try again!
          </p>
        )}
      </div>
    );
  }
}

SignUpPage.propTypes = {
  users: PropTypes.object.isRequired,
};

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(SignUpPage);

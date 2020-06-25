import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/LandingPage.css';

/**
 * Functional component representing the landing page on /.
 */
function LandingPage(props) {
  return (
    <div>
      <div className='would-you-rather-text'>Would You Rather</div>
      <Link to='/signup'>
        <button className='landing-signup-button'>Sign Up</button>
      </Link>
      <span className='orText'>OR</span>
      <Link to='/signin'>
        <button className='landing-signin-button'>Sign In</button>
      </Link>
    </div>
  );
}

export default LandingPage;

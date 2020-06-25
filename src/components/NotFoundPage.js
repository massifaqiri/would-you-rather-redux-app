import React from 'react';
import '../styles/NotFoundPage.css';
import notFoundPic from '../assets/images/404.svg';

function NotFoundPage(props) {
  return (
    <div className='not-found-container'>
      <img src={notFoundPic} alt='404 error' />
    </div>
  );
}

export default NotFoundPage;

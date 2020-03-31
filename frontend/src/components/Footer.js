import React from 'react';

const Footer = () => {
  return (
    <footer className='page-footer text-center font-small mt-4 wow fadeIn'>
      <hr className='my-4' />

      <div className='pb-4'>
        <a
          href='https://github.com/leafarz'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-github mr-3'></i>
        </a>

        <a
          href='https://www.linkedin.com/in/rafformes/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-linkedin mr-3'></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

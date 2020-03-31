import React from 'react';

const BodyNav = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark mdb-color lighten-3 mt-3 mb-5'>
      <span className='navbar-brand'>Categories:</span>

      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#basicExampleNav'
        aria-controls='basicExampleNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='basicExampleNav'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <a className='nav-link page-item'>All</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link page-item'>Shirts</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link page-item'>Sport wears</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link page-item'>Outwears</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default BodyNav;

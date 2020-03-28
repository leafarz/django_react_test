import { Link } from 'react-router-dom';
import React from 'react';

const NavBar = () => {
  return (
    <nav className='navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar'>
      <div className='container'>
        {/* <!-- Brand --> */}
        <Link to='/' className='navbar-brand waves-effect'>
          <strong className='blue-text'>ECommerce Test</strong>
        </Link>

        {/* <!-- Collapse --> */}
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        {/* <!-- Links --> */}
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          {/* <!-- Left --> */}
          <ul className='navbar-nav mr-auto'>
            <Link to='/'>
              <li className='nav-item active'>
                <div className='nav-link waves-effect'>
                  Home
                  <span className='sr-only'>(current)</span>
                </div>
              </li>
            </Link>
            <Link to='/products'>
              <li className='nav-item'>
                <div className='nav-link waves-effect'>Products</div>
              </li>
            </Link>
            <Link to='/checkout'>
              <li className='nav-item'>
                <div className='nav-link waves-effect'>Checkout</div>
              </li>
            </Link>
          </ul>

          {/* <!-- Right --> */}
          <ul className='navbar-nav nav-flex-icons'>
            <Link to='/checkout'>
              <li className='nav-item'>
                <div className='nav-link waves-effect'>
                  <span className='badge red z-depth-1 mr-1'> 1 </span>
                  <i className='fas fa-shopping-cart'></i>
                  <span className='clearfix d-none d-sm-inline-block'>
                    {' '}
                    Cart{' '}
                  </span>
                </div>
              </li>
            </Link>
            <Link to='/login'>
              <li className='nav-item'>
                <div className='nav-link waves-effect'>
                  <span className='clearfix d-none d-sm-inline-block'>
                    Login
                  </span>
                </div>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

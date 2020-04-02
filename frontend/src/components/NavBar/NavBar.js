import './NavBar.css';

import { Link, NavLink } from 'react-router-dom';

import React from 'react';

const NavBar = () => {
  let closeEl;
  const onHandleSubmit = e => {
    e.preventDefault();
    closeEl.click(); // HAXXX
  };
  return (
    <div>
      <form
        className='modal fade needs-validation'
        novalidate
        id='modalLoginForm'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='myModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header text-center'>
              <h4 className='modal-title w-100 font-weight-bold'>Sign in</h4>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
                ref={close => (closeEl = close)}
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body mx-3'>
              <div className='md-form mb-5'>
                <i className='fas fa-user prefix grey-text'></i>
                <input
                  type='text'
                  id='defaultForm-user'
                  className='form-control'
                />
                <label htmlFor='defaultForm-user'>Your username</label>
              </div>

              <div className='md-form mb-4'>
                <i className='fas fa-lock prefix grey-text'></i>
                <input
                  type='password'
                  id='defaultForm-pass'
                  className='form-control'
                />
                <label htmlFor='defaultForm-pass'>Your password</label>
              </div>
            </div>
            <div className='modal-footer d-flex justify-content-center'>
              <button className='btn btn-default' onClick={onHandleSubmit}>
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
      <nav className='navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar'>
        <div className='container'>
          {/* <!-- Brand --> */}
          <Link to='/' className='navbar-brand waves-effect'>
            <strong className='blue-text'>Django-React Test</strong>
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
              <NavLink to='/' exact activeClassName='active-link'>
                <li className='nav-item'>
                  <div className='nav-link waves-effect'>Home</div>
                </li>
              </NavLink>
              <NavLink to='/products' exact activeClassName='active-link'>
                <li className='nav-item'>
                  <div className='nav-link waves-effect'>Products</div>
                </li>
              </NavLink>
              <NavLink to='/checkout' exact activeClassName='active-link'>
                <li className='nav-item'>
                  <div className='nav-link waves-effect'>Checkout</div>
                </li>
              </NavLink>
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
              {/* <Link to='/login'> */}
              <li className='nav-item'>
                <div className='nav-link waves-effect'>
                  <span className='clearfix d-none d-sm-inline-block'>
                    <a data-toggle='modal' data-target='#modalLoginForm'>
                      Login
                    </a>
                  </span>
                </div>
              </li>
              {/* </Link> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

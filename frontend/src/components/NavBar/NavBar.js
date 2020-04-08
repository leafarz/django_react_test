import './NavBar.css';

import { Link, NavLink } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import {
  authSelector,
  fetchUserDetail,
  login,
  logout,
  signUp,
} from './../../slices/auth';
import { cartSelector, clearCartDispatch } from './../../slices/cart';
import { useDispatch, useSelector } from 'react-redux';

const buttonStyle = {
  border: 'none',
  background: 'none',
  outline: 'none',
  fontWeight: 300,
  padding: 0,
};

const NavBar = (props) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    username: '',
    password: '',
    password2: '',
    email: '',
  });
  const { username, loading, hasErrors } = useSelector(authSelector);
  const { cart } = useSelector(cartSelector);
  const loginCloseRef = useRef(null);
  const signUpCloseRef = useRef(null);

  useEffect(() => {
    if (username) {
      loginCloseRef.current.click();
      signUpCloseRef.current.click();
    }
  }, [username]);

  useEffect(() => {
    if (loading) {
      return;
    }
    if (!hasErrors) {
      setState({ username: '', password: '', password2: '', email: '' });
    }
  }, [loading, hasErrors]);

  useEffect(() => {
    dispatch(
      fetchUserDetail(`${process.env.REACT_APP_BASEURL}/api/auth/user/`)
    );
  }, [dispatch]);

  const onHandleLogin = (e) => {
    e.preventDefault();
    dispatch(
      login(
        state.username,
        state.password,
        `${process.env.REACT_APP_BASEURL}/api/auth/login/`
      )
    );
  };

  const onHandleSignUp = (e) => {
    e.preventDefault();
    dispatch(
      signUp(
        state.username,
        state.password,
        state.password2,
        state.email,
        `${process.env.REACT_APP_BASEURL}/api/auth/registration/`
      )
    );
  };

  const onHandleLogout = (e) => {
    dispatch(logout(`${process.env.REACT_APP_BASEURL}/api/auth/logout/`));
    dispatch(clearCartDispatch());
  };

  const onHandleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const renderLogin = () => {
    return username ? (
      <React.Fragment>
        <li className='nav-item'>
          <div className='nav-link waves-effect'>
            <span className='clearfix d-none d-sm-inline-flex'>
              <div className='px-2'>
                Hi <b>{username}</b>!
              </div>
            </span>
          </div>
        </li>
        <li className='nav-item pr-4'>
          <div className='nav-link waves-effect'>
            <span className='clearfix d-none d-sm-inline-flex'>
              <button onClick={onHandleLogout} style={buttonStyle}>
                Logout
              </button>
            </span>
          </div>
        </li>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <li className='nav-item pr-4'>
          <div className='nav-link waves-effect'>
            <span className='clearfix d-none d-sm-inline-block'>
              <button
                data-toggle='modal'
                data-target='#modalLoginForm'
                style={buttonStyle}
              >
                Login
              </button>
            </span>
          </div>
        </li>
        <li className='nav-item pr-4'>
          <div className='nav-link waves-effect'>
            <span className='clearfix d-none d-sm-inline-block'>
              <button
                data-toggle='modal'
                data-target='#modalSignUpForm'
                style={buttonStyle}
              >
                SignUp
              </button>
            </span>
          </div>
        </li>
      </React.Fragment>
    );
  };

  return (
    <div>
      <form
        className='modal fade'
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
                ref={loginCloseRef}
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body mx-3'>
              <div className='md-form mb-5'>
                <i className='fas fa-user prefix grey-text'></i>
                <input
                  type='text'
                  id='defaultForm-user-login'
                  className='form-control'
                  name='username'
                  value={state.username}
                  onChange={onHandleChange}
                />
                <label htmlFor='defaultForm-user-login'>Your username</label>
              </div>

              <div className='md-form mb-4'>
                <i className='fas fa-lock prefix grey-text'></i>
                <input
                  type='password'
                  id='defaultForm-pass-login'
                  className='form-control'
                  name='password'
                  value={state.password}
                  onChange={onHandleChange}
                />
                <label htmlFor='defaultForm-pass-login'>Your password</label>
              </div>
            </div>

            <div className='modal-footer d-flex justify-content-center'>
              <button className='btn btn-default' onClick={onHandleLogin}>
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
      <form
        className='modal fade'
        id='modalSignUpForm'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='myModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header text-center'>
              <h4 className='modal-title w-100 font-weight-bold'>Sign up</h4>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
                ref={signUpCloseRef}
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body mx-3'>
              <div className='md-form mb-4'>
                <i className='fas fa-user prefix grey-text'></i>
                <input
                  type='text'
                  id='defaultForm-user-signup'
                  className='form-control'
                  name='username'
                  value={state.username}
                  onChange={onHandleChange}
                />
                <label htmlFor='defaultForm-user-signup'>Your username</label>
              </div>
              <div className='md-form mb-4'>
                <i className='fas fa-envelope prefix grey-text'></i>
                <input
                  type='text'
                  id='defaultForm-email'
                  className='form-control'
                  name='email'
                  value={state.email}
                  onChange={onHandleChange}
                />
                <label htmlFor='defaultForm-user'>Your email</label>
              </div>

              <div className='md-form mb-4'>
                <i className='fas fa-lock prefix grey-text'></i>
                <input
                  type='password'
                  id='defaultForm-pass-signup'
                  className='form-control'
                  name='password'
                  value={state.password}
                  onChange={onHandleChange}
                />
                <label htmlFor='defaultForm-pass-signup'>Your password</label>
              </div>

              <div className='md-form mb-4'>
                <i className='fas fa-lock prefix grey-text'></i>
                <input
                  type='password'
                  id='defaultForm-pass2'
                  className='form-control'
                  name='password2'
                  value={state.password2}
                  onChange={onHandleChange}
                />
                <label htmlFor='defaultForm-pass2'>Repeat password</label>
              </div>
            </div>

            <div className='modal-footer d-flex justify-content-center'>
              <button className='btn btn-default' onClick={onHandleSignUp}>
                Sign Up
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
              {username && (
                <NavLink to='/checkout' exact activeClassName='active-link'>
                  <li className='nav-item'>
                    <div className='nav-link waves-effect'>Checkout</div>
                  </li>
                </NavLink>
              )}
            </ul>

            {/* <!-- Right --> */}
            <ul className='navbar-nav nav-flex-icons'>
              {renderLogin()}
              {username && (
                <Link to='/checkout'>
                  <li className='nav-item'>
                    <div className='nav-link waves-effect'>
                      <span className='badge red z-depth-1 mr-1'>
                        {' '}
                        {cart.reduce((total, x) => total + x.quantity, 0)}{' '}
                      </span>
                      <i className='fas fa-shopping-cart'></i>
                      <span className='clearfix d-none d-sm-inline-block'>
                        {' '}
                        Cart{' '}
                      </span>
                    </div>
                  </li>
                </Link>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

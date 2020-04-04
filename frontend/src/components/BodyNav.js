import { categorySelector, setCategoryDispatch } from './../slices/category';
import { useDispatch, useSelector } from 'react-redux';

import React from 'react';
import { setPageDispatch } from './../slices/page';

const buttons = ['All', 'Shirt', 'Sport Wear', 'Outwear'];
const BodyNav = () => {
  const dispatch = useDispatch();
  const currCategory = useSelector(categorySelector);

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
          {buttons.map((category) => (
            <li key={category} className='nav-item active'>
              <button
                className={`nav-link btn ${
                  category === currCategory ? 'btn-mdb-color' : ''
                }`}
                onClick={() => {
                  dispatch(setCategoryDispatch(category));
                  dispatch(setPageDispatch(0));
                }}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default BodyNav;

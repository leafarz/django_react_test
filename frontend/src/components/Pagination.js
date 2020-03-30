import { pageSelector, setPageDispatch } from './../slices/page';
import { useDispatch, useSelector } from 'react-redux';

import React from 'react';

const Pagination = props => {
  const dispatch = useDispatch();
  const page = useSelector(pageSelector);

  return (
    <nav className='d-flex justify-content-center wow fadeIn'>
      <ul className='pagination pg-blue'>
        <li className='page-item disabled'>
          <a className='page-link' href='#' aria-label='Previous'>
            <span aria-hidden='true'>&laquo;</span>
            <span className='sr-only'>Previous</span>
          </a>
        </li>
        {[...Array(Math.ceil(props.data / 8)).keys()].map(i => {
          return (
            <li className={`page-item ${i == page ? 'active' : ''}`}>
              <a
                onClick={() => dispatch(setPageDispatch(i))}
                className='page-link'
                href='#'
              >
                {i + 1}
                <span className='sr-only'>(current)</span>
              </a>
            </li>
          );
        })}

        <li className='page-item'>
          <a className='page-link' href='#' aria-label='Next'>
            <span aria-hidden='true'>&raquo;</span>
            <span className='sr-only'>Next</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

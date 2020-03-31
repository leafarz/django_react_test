import { pageSelector, setPageDispatch } from './../slices/page';
import { useDispatch, useSelector } from 'react-redux';

import React from 'react';

const Pagination = props => {
  const dispatch = useDispatch();
  const currPage = useSelector(pageSelector);
  const maxPages = Math.ceil(props.data.length / props.data.displayCount);

  return (
    <nav className='d-flex justify-content-center wow fadeIn'>
      <ul className='pagination pg-blue'>
        <li className={`page-item ${currPage === 0 ? 'disabled' : ''}`}>
          <button
            className='page-link'
            onClick={() => dispatch(setPageDispatch(0))}
            aria-label='Previous'
          >
            <span aria-hidden='true'>&laquo;</span>
            <span className='sr-only'>Previous</span>
          </button>
        </li>
        {[...Array(maxPages).keys()].map(i => {
          return (
            <li
              className={`page-item ${i === currPage ? 'active' : ''}`}
              key={`pagination_${i}`}
            >
              <button
                className='page-link'
                onClick={() => dispatch(setPageDispatch(i))}
              >
                {i + 1}
                <span className='sr-only'>(current)</span>
              </button>
            </li>
          );
        })}

        <li
          className={`page-item ${currPage === maxPages - 1 ? 'disabled' : ''}`}
        >
          <button
            className='page-link'
            onClick={() => dispatch(setPageDispatch(maxPages - 1))}
            aria-label='Next'
          >
            <span aria-hidden='true'>&raquo;</span>
            <span className='sr-only'>Next</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

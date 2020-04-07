import React, { useEffect } from 'react';

import { authSelector } from './../slices/auth';
import { useSelector } from 'react-redux';

const Unauthorized = (props) => {
  const { username } = useSelector(authSelector);

  useEffect(() => {
    if (username) {
      props.history.push('/');
    }
  }, [username]);

  return (
    <div>
      <main className='mt-5 pt-4'>
        <div className='container wow fadeIn'>
          <h2 className='my-5 h2 text-center'>
            Unauthorized. You are not logged in.
          </h2>
        </div>
      </main>
    </div>
  );
};

export default Unauthorized;

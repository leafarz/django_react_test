import { Link } from 'react-router-dom';
import React from 'react';

const Card = (props) => {
  return (
    <div className='col-lg-3 col-md-6 mb-4'>
      <div className='card'>
        <div className='view overlay'>
          <img src={props.data.image_url} className='card-img-top' alt='' />
          <Link to={`/product/${props.data.id}`}>
            <div className='mask rgba-white-slight'></div>
          </Link>
        </div>

        <div className='card-body text-center'>
          <Link to={`/product/${props.data.id}`} className='grey-text'>
            <h5>{props.data.category}</h5>
          </Link>
          <h5>
            <strong>
              <Link to={`/product/${props.data.id}`} className='dark-grey-text'>
                {props.data.label}

                {props.data.tag && (
                  <span className={`badge badge-pill ${props.data.tag}-color`}>
                    {props.data.tag_display}
                  </span>
                )}
              </Link>
            </strong>
          </h5>

          <h4 className='font-weight-bold blue-text'>
            <strong>{props.data.curr_price}$</strong>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Card;

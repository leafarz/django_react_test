import React from 'react';

const Card = props => {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card">
        <div className="view overlay">
          <img src={props.data.url} className="card-img-top" alt="" />
          <a>
            <div className="mask rgba-white-slight"></div>
          </a>
        </div>

        <div className="card-body text-center">
          <a href="" className="grey-text">
            <h5>{props.data.category}</h5>
          </a>
          <h5>
            <strong>
              <a href="" className="dark-grey-text">
                {props.data.label}
                {props.data.tag && (
                  <span className={`badge badge-pill ${props.data.tag}-color`}>
                    {props.data.tagDisplay}
                  </span>
                )}
              </a>
            </strong>
          </h5>

          <h4 className="font-weight-bold blue-text">
            <strong>{props.data.price}$</strong>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Card;

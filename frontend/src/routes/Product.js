import React, { useEffect, useState } from 'react';
import { fetchItem, itemSelector } from './../slices/item';
import { useDispatch, useSelector } from 'react-redux';

import { addToCart } from './../slices/cart';
import { authSelector } from './../slices/auth';
import { useParams } from 'react-router-dom';

const Product = () => {
  const params = useParams();
  const { item, loading } = useSelector(itemSelector);
  const { username } = useSelector(authSelector);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    dispatch(fetchItem(params.slug));
  }, [dispatch, params.slug]);

  const renderPrice = () => {
    let components = [];
    if (item.curr_price !== item.original_price) {
      components = [
        ...components,
        <span key='deleted-price' className='mr-1'>
          <del>${item.original_price}</del>
        </span>,
      ];
    }
    components = [
      ...components,
      <span key='original-price'>${item.curr_price}</span>,
    ];
    return React.createElement(React.Fragment, null, components);
  };

  const onHandleChange = (e) => {
    setAmount(Math.max(1, e.target.value));
  };

  const onHandleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(parseInt(params.slug), amount));
  };

  return (
    !loading && (
      <div>
        <main className='mt-5 pt-4'>
          <div className='container dark-grey-text mt-5'>
            <div className='row wow fadeIn'>
              <div className='col-md-6 mb-4 text-center'>
                <img src={item.image_url} className='img-fluid' alt='' />
              </div>

              <div className='col-md-6 mb-4'>
                <div className='p-4'>
                  <h3>{item.category}</h3>
                  <h3>
                    <strong>{item.label}</strong>
                  </h3>
                  {item.tag && (
                    <div className='mb-3'>
                      <span className={`badge badge-pill ${item.tag}-color`}>
                        {item.tag_display}
                      </span>
                    </div>
                  )}

                  <p className='lead'>{renderPrice()}</p>

                  <p className='lead font-weight-bold'>Description</p>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    dolor suscipit libero eos atque quia ipsa sint voluptatibus!
                    Beatae sit assumenda asperiores iure at maxime atque
                    repellendus maiores quia sapiente.
                  </p>

                  {username && (
                    <form className='d-flex justify-content-left'>
                      <input
                        type='number'
                        value={amount}
                        onChange={onHandleChange}
                        aria-label='Search'
                        className='form-control'
                        style={{ width: '100px' }}
                      />
                      <button
                        className='btn btn-primary btn-md my-0 p'
                        type='submit'
                        onClick={onHandleAddToCart}
                      >
                        Add to cart
                        <i className='fas fa-shopping-cart ml-1'></i>
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>

            <hr />

            <div className='row d-flex justify-content-center wow fadeIn'>
              <div className='col-md-6 text-center'>
                <h4 className='my-4 h4'>Additional information</h4>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  suscipit modi sapiente illo soluta odit voluptates, quibusdam
                  officia. Neque quibusdam quas a quis porro? Molestias illo
                  neque eum in laborum.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  );
};

export default Product;

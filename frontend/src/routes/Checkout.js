import { cartSelector, clearCartDispatch } from './../slices/cart';
import { useDispatch, useSelector } from 'react-redux';

import React from 'react';

const Checkout = () => {
  const { cart } = useSelector(cartSelector);
  const dispatch = useDispatch();

  const getCart = () => {
    let components = [];
    let totalPrice = 0;

    cart.forEach((c) => {
      let price = c.item.curr_price * c.quantity;
      totalPrice += price;
      components = [
        ...components,
        <li
          className='list-group-item d-flex justify-content-between lh-condensed'
          key={`${c.item.label}_${c.item.category}`}
        >
          <div>
            <h6 className='my-0'>
              {c.item.label} ({c.quantity})
            </h6>
            <small className='text-muted'>{c.item.category}</small>
          </div>
          <span className='text-muted'>${price}</span>
        </li>,
      ];
    });
    components = [
      ...components,
      <li
        className='list-group-item d-flex justify-content-between'
        key='total_price'
      >
        <span>Total (USD)</span>
        <strong>${totalPrice}</strong>
      </li>,
    ];
    return React.createElement(React.Fragment, null, components);
  };

  const onHandleCheckout = (e) => {
    e.preventDefault();
    dispatch(clearCartDispatch());
  };
  return (
    <div>
      <main className='mt-5 pt-4'>
        <div className='container wow fadeIn'>
          <h2 className='my-5 h2 text-center'>Checkout form</h2>

          <div className='row'>
            <div className='col-md-8 mb-4'>
              <div className='card'>
                <form className='card-body'>
                  <p className='text-danger'>
                    * Form not required to be filled up
                  </p>
                  <div className='row'>
                    <div className='col-md-6 mb-2'>
                      <div className='md-form '>
                        <input
                          type='text'
                          id='firstName'
                          className='form-control'
                        />
                        <label htmlFor='firstName' className=''>
                          First name
                        </label>
                      </div>
                    </div>
                    <div className='col-md-6 mb-2'>
                      <div className='md-form'>
                        <input
                          type='text'
                          id='lastName'
                          className='form-control'
                        />
                        <label htmlFor='lastName' className=''>
                          Last name
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className='md-form input-group pl-0 mb-5'>
                    <div className='input-group-prepend'>
                      <span className='input-group-text' id='basic-addon1'>
                        @
                      </span>
                    </div>
                    <input
                      type='text'
                      className='form-control py-0'
                      aria-describedby='basic-addon1'
                    />
                  </div>
                  <div className='md-form mb-5'>
                    <input type='text' id='email' className='form-control' />
                    <label htmlFor='email' className=''>
                      Email (optional)
                    </label>
                  </div>
                  <div className='md-form mb-5'>
                    <input type='text' id='address' className='form-control' />
                    <label htmlFor='address' className=''>
                      Address
                    </label>
                  </div>
                  <div className='md-form mb-5'>
                    <input
                      type='text'
                      id='address-2'
                      className='form-control'
                    />
                    <label htmlFor='address-2' className=''>
                      Address 2 (optional)
                    </label>
                  </div>
                  <div className='row'>
                    <div className='col-lg-4 col-md-12 mb-4'>
                      <label htmlFor='country'>Country</label>
                      <select
                        className='custom-select d-block w-100'
                        id='country'
                      >
                        <option value=''>Choose...</option>
                        <option>United States</option>
                      </select>
                      <div className='invalid-feedback'>
                        Please select a valid country.
                      </div>
                    </div>

                    <div className='col-lg-4 col-md-6 mb-4'>
                      <label htmlFor='state'>State</label>
                      <select
                        className='custom-select d-block w-100'
                        id='state'
                      >
                        <option value=''>Choose...</option>
                        <option>California</option>
                      </select>
                      <div className='invalid-feedback'>
                        Please provide a valid state.
                      </div>
                    </div>

                    <div className='col-lg-4 col-md-6 mb-4'>
                      <label htmlFor='zip'>Zip</label>
                      <input type='text' className='form-control' id='zip' />
                      <div className='invalid-feedback'>Zip code required.</div>
                    </div>
                  </div>
                  <hr />
                  <div className='custom-control custom-checkbox'>
                    <input
                      type='checkbox'
                      className='custom-control-input'
                      id='same-address'
                    />
                    <label
                      className='custom-control-label'
                      htmlFor='same-address'
                    >
                      Shipping address is the same as my billing address
                    </label>
                  </div>
                  <div className='custom-control custom-checkbox'>
                    <input
                      type='checkbox'
                      className='custom-control-input'
                      id='save-info'
                    />
                    <label className='custom-control-label' htmlFor='save-info'>
                      Save this information for next time
                    </label>
                  </div>
                  <hr />
                  <hr className='mb-4' />
                  <button
                    className='btn btn-primary btn-lg btn-block'
                    type='submit'
                    onClick={onHandleCheckout}
                  >
                    Continue to checkout
                  </button>
                </form>
              </div>
            </div>

            <div className='col-md-4 mb-4'>
              <h4 className='d-flex justify-content-between align-items-center mb-3'>
                <span className='text-muted'>Your cart</span>
                <span className='badge badge-secondary badge-pill'>
                  {cart.reduce((total, x) => total + x.quantity, 0)}
                </span>
              </h4>

              <ul className='list-group mb-3 z-depth-1'>{getCart()}</ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;

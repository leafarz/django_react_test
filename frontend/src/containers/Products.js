import React from 'react';

const Product = () => {
  return (
    <div>
      <main class='mt-5 pt-4'>
        <div class='container dark-grey-text mt-5'>
          <div class='row wow fadeIn'>
            <div class='col-md-6 mb-4'>
              <img
                src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/14.jpg'
                class='img-fluid'
                alt=''
              />
            </div>

            <div class='col-md-6 mb-4'>
              <div class='p-4'>
                <div class='mb-3'>
                  <a href=''>
                    <span class='badge purple mr-1'>Category 2</span>
                  </a>
                  <a href=''>
                    <span class='badge blue mr-1'>New</span>
                  </a>
                  <a href=''>
                    <span class='badge red mr-1'>Bestseller</span>
                  </a>
                </div>

                <p class='lead'>
                  <span class='mr-1'>
                    <del>$200</del>
                  </span>
                  <span>$100</span>
                </p>

                <p class='lead font-weight-bold'>Description</p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  dolor suscipit libero eos atque quia ipsa sint voluptatibus!
                  Beatae sit assumenda asperiores iure at maxime atque
                  repellendus maiores quia sapiente.
                </p>

                <form class='d-flex justify-content-left'>
                  <input
                    type='number'
                    value='1'
                    aria-label='Search'
                    class='form-control'
                    style={{ width: '100px' }}
                  />
                  <button class='btn btn-primary btn-md my-0 p' type='submit'>
                    Add to cart
                    <i class='fas fa-shopping-cart ml-1'></i>
                  </button>
                </form>
              </div>
            </div>
          </div>

          <hr />

          <div class='row d-flex justify-content-center wow fadeIn'>
            <div class='col-md-6 text-center'>
              <h4 class='my-4 h4'>Additional information</h4>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                suscipit modi sapiente illo soluta odit voluptates, quibusdam
                officia. Neque quibusdam quas a quis porro? Molestias illo neque
                eum in laborum.
              </p>
            </div>
          </div>

          <div class='row wow fadeIn'>
            <div class='col-lg-4 col-md-12 mb-4'>
              <img
                src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/11.jpg'
                class='img-fluid'
                alt=''
              />
            </div>

            <div class='col-lg-4 col-md-6 mb-4'>
              <img
                src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/12.jpg'
                class='img-fluid'
                alt=''
              />
            </div>

            <div class='col-lg-4 col-md-6 mb-4'>
              <img
                src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg'
                class='img-fluid'
                alt=''
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Product;

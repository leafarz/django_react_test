import React from 'react';

const style1 = {
  backgroundImage:
    "url('https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/8-col/img%282%29.jpg')",
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
};

const style2 = {
  backgroundImage:
    "url('https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/8-col/img%283%29.jpg')",
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
};

const style3 = {
  backgroundImage:
    "url('https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/8-col/img%285%29.jpg')",
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
};

const Carousel = () => {
  return (
    <div
      id="carousel-example-1z"
      className="carousel slide carousel-fade pt-4"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carousel-example-1z"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carousel-example-1z" data-slide-to="1"></li>
        <li data-target="#carousel-example-1z" data-slide-to="2"></li>
      </ol>

      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <div className="view" style={{ style1 }}>
            <div className="mask rgba-black-strong d-flex justify-content-center align-items-center">
              <div className="text-center white-text mx-5 wow fadeIn">
                <h1 className="mb-4">
                  <strong>Learn Bootstrap 4 with MDB</strong>
                </h1>

                <p>
                  <strong>Best & free guide of responsive web design</strong>
                </p>

                <p className="mb-4 d-none d-md-block">
                  <strong>
                    The most comprehensive tutorial for the Bootstrap 4. Loved
                    by over 500 000 users. Video and written versions available.
                    Create your own, stunning website.
                  </strong>
                </p>

                <a
                  target="_blank"
                  href="https://mdbootstrap.com/education/bootstrap/"
                  className="btn btn-outline-white btn-lg"
                >
                  Start free tutorial
                  <i className="fas fa-graduation-cap ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="view" style={{ style1 }}>
            <div className="mask rgba-black-strong d-flex justify-content-center align-items-center">
              <div className="text-center white-text mx-5 wow fadeIn">
                <h1 className="mb-4">
                  <strong>Learn Bootstrap 4 with MDB</strong>
                </h1>

                <p>
                  <strong>Best & free guide of responsive web design</strong>
                </p>

                <p className="mb-4 d-none d-md-block">
                  <strong>
                    The most comprehensive tutorial for the Bootstrap 4. Loved
                    by over 500 000 users. Video and written versions available.
                    Create your own, stunning website.
                  </strong>
                </p>

                <a
                  target="_blank"
                  href="https://mdbootstrap.com/education/bootstrap/"
                  className="btn btn-outline-white btn-lg"
                >
                  Start free tutorial
                  <i className="fas fa-graduation-cap ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="view" style={{ style1 }}>
            <div className="mask rgba-black-strong d-flex justify-content-center align-items-center">
              <div className="text-center white-text mx-5 wow fadeIn">
                <h1 className="mb-4">
                  <strong>Learn Bootstrap 4 with MDB</strong>
                </h1>

                <p>
                  <strong>Best & free guide of responsive web design</strong>
                </p>

                <p className="mb-4 d-none d-md-block">
                  <strong>
                    The most comprehensive tutorial for the Bootstrap 4. Loved
                    by over 500 000 users. Video and written versions available.
                    Create your own, stunning website.
                  </strong>
                </p>

                <a
                  target="_blank"
                  href="https://mdbootstrap.com/education/bootstrap/"
                  className="btn btn-outline-white btn-lg"
                >
                  Start free tutorial
                  <i className="fas fa-graduation-cap ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        className="carousel-control-prev"
        href="#carousel-example-1z"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carousel-example-1z"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;

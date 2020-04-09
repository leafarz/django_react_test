import { Link } from 'react-router-dom';
import React from 'react';

const Carousel = (props) => {
  const getPages = () => {
    return props.itemsToDisplay.map((_, i) => (
      <li
        key={`cbutton_${i}`}
        data-target='#carousel-example-1z'
        data-slide-to={`${i}`}
        className={i === 0 ? 'active' : ''}
      ></li>
    ));
  };

  const getSlides = () => {
    let components = [];
    props.itemsToDisplay.forEach((item, i) => {
      const item_id = item[0];
      const item_url = item[1];

      components.push(
        <div
          key={`cslide_${item_id}`}
          className={`carousel-item ${i === 0 ? 'active' : ''}`}
        >
          <div className='view'>
            <img
              className='d-block w-100'
              src={item_url}
              style={{ transform: 'translateY(-30%)' }}
              alt=''
            />
            <div className='mask rgba-black-strong d-flex justify-content-center align-items-center'>
              <div className='text-center white-text mx-5 wow fadeIn'>
                <h1 className='mb-4'>
                  <strong>Lorem ipsum dolor sit amet</strong>
                </h1>

                <p>
                  <strong>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quisquam, doloribus?
                  </strong>
                </p>

                <p className='mb-4 d-none d-md-block'>
                  <strong>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam corporis alias delectus sed, nisi sunt blanditiis,
                    maiores a tenetur, quaerat inventore id. Est, impedit velit!
                  </strong>
                </p>

                <Link
                  className='btn btn-outline-white btn-lg'
                  to={`/product/${item_id}`}
                >
                  Click To View
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return React.createElement(React.Fragment, null, components);
  };
  return (
    <div
      id='carousel-example-1z'
      className='carousel slide carousel-fade pt-4'
      data-ride='carousel'
    >
      <ol className='carousel-indicators'>{getPages()}</ol>

      <div className='carousel-inner' role='listbox'>
        {getSlides()}
      </div>

      <a
        className='carousel-control-prev'
        href='#carousel-example-1z'
        role='button'
        data-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='sr-only'>Previous</span>
      </a>

      <a
        className='carousel-control-next'
        href='#carousel-example-1z'
        role='button'
        data-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='sr-only'>Next</span>
      </a>
    </div>
  );
};

export default Carousel;

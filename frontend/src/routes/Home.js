import React, { useEffect } from 'react';
import { fetchItems, itemsSelector } from './../slices/items';
import { useDispatch, useSelector } from 'react-redux';

import BodyNav from '../components/BodyNav';
import Carousel from '../components/Carousel';
import GridRow from '../components/GridRow';
import Pagination from '../components/Pagination';

const Home = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector(itemsSelector);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const renderItems = () => {
    const length = Object.keys(items).length;
    const displayCount = 8;

    return (
      !loading && (
        <React.Fragment>
          <section className='text-center mb-4'>
            <GridRow data={{ items: items, displayCount: displayCount }} />
          </section>
          <Pagination data={{ length: length, displayCount: displayCount }} />
        </React.Fragment>
      )
    );
  };

  return (
    <div>
      <Carousel />

      <main>
        <div className='container'>
          <BodyNav />
          {renderItems()}
        </div>
      </main>
    </div>
  );
};

export default Home;

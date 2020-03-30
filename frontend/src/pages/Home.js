import React, { useEffect } from 'react';
import { fetchItems, itemsSelector } from './../slices/items';
import { useDispatch, useSelector } from 'react-redux';

import BodyNav from '../components/BodyNav';
import Carousel from '../components/Carousel';
import GridRow from '../components/GridRow';
import Pagination from '../components/Pagination';

const Home = () => {
  const dispatch = useDispatch();
  const { items, loading, hasErrors } = useSelector(itemsSelector);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const renderItems = () => {
    const length = Object.keys(items).length;
    if (loading || hasErrors || length == 0) return;
    return (
      <React.Fragment>
        <section className='text-center mb-4'>
          <GridRow data={items} />
        </section>
        <Pagination data={length} />
      </React.Fragment>
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

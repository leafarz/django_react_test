import React, { useEffect } from 'react';
import { fetchItems, itemsSelector } from './../slices/items';
import { useDispatch, useSelector } from 'react-redux';

import BodyNav from '../components/BodyNav';
import Carousel from '../components/Carousel';
import GridRow from '../components/GridRow';
import Pagination from '../components/Pagination';
import { categorySelector } from './../slices/category';

const Home = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector(itemsSelector);
  const category = useSelector(categorySelector);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const renderItems = () => {
    const displayCount = 8;
    let length = Object.keys(items).length;
    let filteredItems = items;
    if (loading || length === 0) {
      return;
    }
    if (category !== 'All') {
      filteredItems = items.filter((item) => item.category === category);
      length = filteredItems.length;
    }
    if (length === 0) {
      return;
    }
    return (
      <React.Fragment>
        <section className='text-center mb-4'>
          <GridRow
            data={{
              items: filteredItems,
              displayCount: displayCount,
              category: category,
            }}
          />
        </section>
        <Pagination data={{ length: length, displayCount: displayCount }} />
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

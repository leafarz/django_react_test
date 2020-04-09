import React, { useEffect } from 'react';
import { fetchItems, itemsSelector } from './../slices/items';
import { useDispatch, useSelector } from 'react-redux';

import Carousel from '../components/Carousel';
import GridRow from '../components/GridRow';
import ItemFilter from '../components/ItemFilter';
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
    let filteredItems = items;
    let length = Object.keys(items).length;
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

  const getSlideUrls = () => {
    const bestSellers = items.filter(
      (item) => item.tag_display === 'bestseller'
    );
    return bestSellers.map((bestSeller) => [
      bestSeller.id,
      bestSeller.image_url,
    ]);
  };

  return (
    <div>
      <Carousel itemsToDisplay={getSlideUrls()} />

      <main>
        <div className='container'>
          <ItemFilter />
          {renderItems()}
        </div>
      </main>
    </div>
  );
};

export default Home;

import Card from './Card';
import React from 'react';
import { pageSelector } from './../slices/page';
import { useSelector } from 'react-redux';

const GridRow = (props) => {
  const page = useSelector(pageSelector);
  const items = props.data.items;
  const start = page * props.data.displayCount;
  const end = start + props.data.displayCount;

  const getCards = () => {
    let data = [];
    for (let i = start; i < Math.min(end, items.length); i++) {
      data.push(items[i]);
    }
    return data;
  };
  return (
    <div className='row wow fadeIn'>
      {getCards().map((data) => (
        <Card data={data} key={`${data.category}_${data.label}`} />
      ))}
    </div>
  );
};

export default GridRow;

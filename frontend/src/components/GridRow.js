import Card from './Card';
import React from 'react';

const GridRow = props => {
  return (
    <div className='row wow fadeIn'>
      {props.data.map(data => (
        <Card data={data} />
      ))}
    </div>
  );
};

export default GridRow;

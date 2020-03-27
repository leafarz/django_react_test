import React from 'react';
import Card from './Card';

const GridRow = props => {
  return (
    <div className="row wow fadeIn">
      {props.data.map(data => (
        <Card data={data} />
      ))}
    </div>
  );
};

export default GridRow;

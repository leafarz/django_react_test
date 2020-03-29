import React, { useEffect, useState } from 'react';

import BodyNav from '../components/BodyNav';
import Carousel from '../components/Carousel';
import GridRow from '../components/GridRow';
import Page from '../components/Pagination';

// const data = [
//   {
//     url:
//       'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg',
//     category: 'Shirt',
//     label: 'Denim shirt',
//     tag: 'danger',
//     tagDisplay: 'NEW',
//     price: '120'
//   },
//   {
//     url:
//       'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg',
//     category: 'Sport Wear',
//     label: 'Sweatshirt',
//     tag: '',
//     price: '139'
//   },
//   {
//     url:
//       'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg',
//     category: 'Sport Wear',
//     label: 'Grey blouse',
//     tag: 'primary',
//     tagDisplay: 'bestseller',
//     price: '139'
//   },
//   {
//     url:
//       'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg',
//     category: 'Outwear',
//     label: 'Black jacket',
//     price: '219'
//   }
// ];

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/item/')
      .then(res => res.json())
      .then(res => {
        setData([...res]);
        console.log(res);
      });
  }, []);
  return (
    <div>
      <Carousel />

      <main>
        <div className='container'>
          <BodyNav />

          <section className='text-center mb-4'>
            <GridRow data={data} />
          </section>

          <Page />
        </div>
      </main>
    </div>
  );
};

export default Home;

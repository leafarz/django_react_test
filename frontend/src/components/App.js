import React, { useEffect } from 'react';
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Checkout from '../routes/Checkout';
import Footer from './Footer';
import Home from '../routes/Home';
import NavBar from './NavBar/NavBar';
import Product from '../routes/Product';
import Unauthorized from '../routes/Unauthorized';
import { authSelector } from './../slices/auth';
import { fetchCart } from './../slices/cart';

function App() {
  const { username } = useSelector(authSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (username) {
      dispatch(fetchCart());
    }
  }, [username, dispatch]);

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/product/:slug' component={Product} />
        <Route
          path='/checkout'
          render={() =>
            username ? <Checkout /> : <Redirect to='/unauthorized' />
          }
        />
        <Route path='/unauthorized' component={Unauthorized} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

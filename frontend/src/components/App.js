import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import Checkout from '../routes/Checkout';
import Footer from './Footer';
import Home from '../routes/Home';
import NavBar from './NavBar/NavBar';
import Products from '../routes/Products';
import React from 'react';
import Unauthorized from '../routes/Unauthorized';
import { authSelector } from './../slices/auth';
import { useSelector } from 'react-redux';

function App() {
  const { username } = useSelector(authSelector);

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route
          path='/products'
          render={() =>
            username ? <Products /> : <Redirect to='/unauthorized' />
          }
        />
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

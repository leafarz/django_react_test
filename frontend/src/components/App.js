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
import Product from '../routes/Product';
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
        <Route path='/product/:id' component={Product} />
        <Route
          path='/checkout'
          component={Checkout}
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

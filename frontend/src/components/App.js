import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Checkout from '../pages/Checkout';
import Footer from './Footer';
import Home from '../pages/Home';
import NavBar from './NavBar/NavBar';
import Products from '../pages/Products';
import React from 'react';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/products' component={Products} />
        <Route path='/checkout' component={Checkout} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

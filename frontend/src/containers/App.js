import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Checkout from './Checkout';
import Footer from '../components/Footer';
import Home from './Home';
import NavBar from '../components/NavBar';
import Products from './Products';
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

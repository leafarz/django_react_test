import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Checkout from '../routes/Checkout';
import Footer from './Footer';
import Home from '../routes/Home';
import NavBar from './NavBar/NavBar';
import Products from '../routes/Products';
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

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Home from './Home';
import Products from './Products';
import Checkout from './Checkout';

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

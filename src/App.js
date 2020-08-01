import React,{ useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Home from './screens/Home';
import About from './screens/About';
import Products from './screens/Products';
import Cart from './screens/Cart';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import NavBar from "./components/NavBar";

// import './index.css' 

const App = () => (
  <React.Fragment>
  <Router>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/products" component={Products} />
      <Route path="/cart" component={Cart} />
    </Switch>
  </Router>
  </React.Fragment>
);

export default App;

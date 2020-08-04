import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Home from './screens/Home';
import About from './screens/About';
import Products from './screens/Products';
import Cart from "./screens/Cart"
import { BrowserRouter as Router, Route, Link, Switch, } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"
import Contact from './screens/Contact';
import { Provider } from "react-redux"
import store from "./store"

// import './index.css' 

const App = () => (
  <React.Fragment id="top">
    <Provider store={store}>
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />
        <Route path="/cart" component={Cart} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
    </Provider>
  </React.Fragment>
);

export default App;

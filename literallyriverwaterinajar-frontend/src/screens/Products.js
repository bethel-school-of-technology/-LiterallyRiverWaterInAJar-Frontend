import React from 'react';
import Product from './Product';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Products = ({ match }) => (
  <div>
    <h2>Our Different Kinds Of River Water That You Can Get</h2>
    <ul style={{ listStyleType: "none" }}>
      <li>
        <Link to={`${match.url}/St John\'s Riv`}>St John's River</Link>
      </li>
      <li>
        <Link to={`${match.url}/Chicago River`}>Chicago River</Link>
      </li>
      <li>
        <Link to={`${match.url}/Mississippi River`}>Mississippi River</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:productId`} component={Product} />
    <Route exact path={match.url} render={() => <h3>Please select some river water.</h3>}/>
  </div>
);

export default Products;


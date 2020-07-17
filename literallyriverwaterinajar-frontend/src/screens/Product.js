import React from 'react';
import Size from './Size'
import { Link, Route } from 'react-router-dom';

const Product = ({ match }) => (
  <div>
    <h3>{match.params.productId}</h3>
  <ul style={{ listStyleType: "none" }}>
    <li>
      <Link to={`${match.url}/Small`}>Small</Link>
    </li>
    <li>
      <Link to={`${match.url}/Not Small`}>Not Small</Link>
    </li>
  </ul>

  <Route path={`${match.url}/:sizeId`} component={Size} />
  <Route exact path={match.url} render={() => <h3>Please select a size.</h3>}/>
  </div>
);

export default Product;
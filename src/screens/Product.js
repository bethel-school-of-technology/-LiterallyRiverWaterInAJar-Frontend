import React, { useState, useEffect } from "react";
import Size from "./Size";
import { Link, Route } from "react-router-dom";

const Product = ({ match }) => {
  const [riverItem, setRiverItem] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/inventory/products/" + match.params.productId)
      .then((data) => data.json())
      .then((data) => {
        setRiverItem(data.inventory);
        console.log(data.inventory);
      });
  }, [match]);

  return (
    <div>
      <h3>{riverItem.name}</h3>
      <ul style={{ listStyleType: "none" }}>
        {riverItem.description}
        <br />
        <Link to={`${match.url}/${riverItem.id}`}>{riverItem.size}</Link>
      </ul>
      <Route path={`${match.url}/:sizeId`} component={Size} />
      <Route
        exact
        path={match.url}
        render={() => <h3>Please select a size.</h3>}
      />
    </div>
  );
};

export default Product;

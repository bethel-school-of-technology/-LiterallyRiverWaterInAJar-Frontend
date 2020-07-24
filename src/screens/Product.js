import React, { useState, useEffect } from "react";
import Size from "./Size";
import { Link, Route } from "react-router-dom";

const Product = ({ match }) => {
  const [riverList, setriverList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/inventory/products/:id")
      .then((data) => data.json())
      .then((data) => {
        setriverList(data.inventory);
        console.log(data);
      });
  }, []);

  const displayRiver = () => {
    riverList.map((inventory, index) => {
      return (
        <li key={index}>
          <Link to={`${match.url}/${inventory.size}`}>{inventory.size}</Link>
          ,{inventory.description}
        </li>
      );
    });
  };

  return (
    <div>
      <h3>{match.params.productId}</h3>
       <ul style={{ listStyleType: "none" }}>{displayRiver}</ul>
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

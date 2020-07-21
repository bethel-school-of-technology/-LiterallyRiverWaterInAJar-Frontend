import React, { useState, useEffect } from "react";
import Product from "./Product";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

const Products = () => {
  const [inventoryList, setInventoryList] = useState([]);
  const match = useRouteMatch();

  useEffect(() => {
    fetch("http://localhost:3001/inventory/products")
      .then((data) => data.json())
      .then((data) => {
        setInventoryList(data.inventory);
        console.log(data);
      });
  }, []);

  let displayInventory = null;
  if (inventoryList) {
    displayInventory = inventoryList.map((inventory, index) => {
      return (
        <li key={index}>
          <Link to={`${match.url}/${inventory.location}`}>
            {inventory.location}
          </Link>
          {inventory.location},{inventory.price}
        </li>
      );
    });
  }

  return (
    <div>
      <h2>Our Different Kinds Of River Water That You Can Get</h2>
      <ul>{(inventoryList)?inventoryList.map((inventory, index) => {

        return <h1>HELLO</h1>
      // return (
      //   <li key={index}>
      //     <Link to={`${match.url}/${inventory.location}`}>
      //       {inventory.location}
      //     </Link>
      //     {inventory.location},{inventory.price}
      //   </li>
      // );
    }):null}</ul>
      <Route path={`${match.url}/:productId`} component={Product} />
      <Route
        exact
        path={match.url}
        render={() => <h3>Please select some river water.</h3>}
      />
    </div>
  );
};

export default Products;

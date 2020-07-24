import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Size = ({ match }) => {
    const [sizeList, setSizeList] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3001/inventory/products/:id")
        .then((data) => data.json())
        .then((data) => {
          setSizeList(data.inventory);
          console.log(data);
        });
    }, []);

    const displaySize = () => {
        sizeList.map((inventory, index) => {
          return (
            <li key={index}>
              <Link to={"./Cart"}>Buy Now: {inventory.price}</Link>
            </li>
          );
        });
      };
    
      return (
        <div>
          <h3>{match.params.sizeId}</h3>
           <ul style={{ listStyleType: "none" }}>{displaySize}</ul>
        </div>
      );
};

export default Size;

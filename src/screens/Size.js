import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Size = ({ match }) => {
  const [sizeItem, setSizeItem] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/inventory/products/" + match.params.sizeId)
      .then((data) => data.json())
      .then((data) => {
        setSizeItem(data.inventory);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <h3>{sizeItem.size}</h3>
      <ul style={{ listStyleType: "none" }}>
        ${sizeItem.price}
        <br />
        <Link to={`${match.url}/${sizeItem.id}`}>Buy Some River Water Now!</Link>
        {/* <a href="http://localhost:3000/cart">Buy Some River Water Now!</a> */}
        <br />
      </ul>
    </div>
  );
};

export default Size;

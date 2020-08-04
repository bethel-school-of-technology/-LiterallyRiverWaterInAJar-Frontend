import React, { useState, useEffect } from "react";
import Size from "./Size";
import { Link, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./Products.css";

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
    <Container>
      
        <h3>{riverItem.name}</h3>
        <div style={{ listStyleType: "none" }}>
          <div>{riverItem.description2}</div>
          <br />

          <div className="buttonCen">
            <Link to={`${match.url}/${riverItem.id}`}>
              {/* <button type="button" class="btn btn-secondary"><h4></h4></button> */}

              <button type="button" className="btn btn-warning">Sizes</button>

            </Link>
          </div>


        

        <Route path={`${match.url}/:sizeId`} component={Size} />


        <Route
          exact
          path={match.url}
        // render={() => <h3>Please select a size.</h3>}
        />
      </div>
    </Container>
  );
};

export default Product;

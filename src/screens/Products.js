import React, { useState, useEffect } from "react";
import Product from "./Product";
import { BrowserRouter as Router, Route, Link, useRouteMatch } from "react-router-dom";
import Jumbotron from "../components/JumboProduct";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./Products.css"

const Products = ({ match }) => {
  const [inventoryList, setInventoryList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/inventory/products")
      .then((data) => data.json())
      .then((data) => {
        setInventoryList(data.inventory);
        // console.log(data);
      });
  }, []);

  let displayInventory = inventoryList.map((inventory, index) => {
    console.log(inventory.image)

    return (

      <div>

        <div key={index}>
          <Row>
            <Col sm={4} xs={12} className="buttonCen" >
              <Link to={`${match.url}/${inventory.id}`}>
                <br /> <button type="button" className="btn btn-info">{inventory.name}</button>
              </Link>
            </Col>
      
            <Col sm={4} ><br /><div className="centerStuff">{inventory.description1}</div></Col>

            <Col sm={4}><div className="centerStuff"><Image className="cup buttonCen" src={inventory.image}></Image></div></Col>
          </Row>

        </div>

        {/* <Col sm={8}>
          
        
        </Col> */}
      </div>
    );
  });

  return (
    <React.Fragment>
      <Jumbotron />
      <Container>
        <div>
          <h2>Our Different Kinds Of River Water That You Can Get</h2>
          <ul>{displayInventory}</ul>

          <Route path={`${match.url}/:productId`} component={Product} />
          <Route
            exact
            path={match.url}
            render={() => <h3>Please select some river water.</h3>}
          />
        </div>
        <br/>
        <br/>
      </Container>
    </React.Fragment>
  );
};

export default Products;

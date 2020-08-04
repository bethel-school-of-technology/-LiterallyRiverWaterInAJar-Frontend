import React, { useState} from 'react';
import Counter from "../components/Counter";
import { connect } from "react-redux";
import { addBasket } from "../actions/addActions";
import { Link, Route } from 'react-router-dom';

import { Form, Button, Row, Col, Container, Image } from "react-bootstrap"
import Jumbotron from '../components/JumboCart';
import "./Cart.css"


const Cart = (props) => {
 

    const handleSubmit = (event) => {
        event.preventDefault();
   


    };
    console.log(props)
   
    return (
        < div >
            <Jumbotron />
            <h2>Shopping Cart</h2>
            <Counter />
            <br />
            <div className="center">
                <h4>St John's River Water</h4>
                <br/>

                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                        <Form.Group controlId="sjrSmall">
                            <Form.Label>Small: $12.20</Form.Label>
                            <br />
                                <Button variant="primary" type="submit" onClick={() => props.addBasket("SJRiverSmall")}>Buy</Button>
                        </Form.Group>
                        </Col>

                        <Col><Image className="lastRes" src="../../pictures/Image from iOS (1).jpg"/></Col>

                        <Col>
                        <Form.Group controlId="sjrLarge">
                            <Form.Label>Large: $20.00</Form.Label>
                            <br />
                                <Button variant="primary" type="submit" onClick={() => props.addBasket("SJRiverLarge")}>Buy</Button>
                        </Form.Group>
                        </Col>
                    </Row>
                </Form>

                <br/>
                <br />


                <h4>Chicago River Water</h4>
                <br/>
                <br />


                <Form>
                    <Row>
                        <Col>
                            <Form.Group controlId="chicSmall">
                                <Form.Label>Small: $12.20</Form.Label>
                                <br />
                                <Button variant="primary" type="submit" onClick={() => props.addBasket("ChicagoRiverSmall")}>Buy</Button>
                            </Form.Group>
                        </Col>
                        <Col><Image className="lastRes" src="../../pictures/Image from iOS (2).jpg" /></Col>
                        <Col>
                            <Form.Group controlId="chicLarge">
                                <Form.Label>Large: $20.00</Form.Label>
                                <br />
                                <Button variant="primary" type="submit" onClick={() => props.addBasket("ChicagoRiverLarge")}>Buy</Button>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>

                <br/>
                <br />


                <h4>Mississippi River Water</h4>
                <br/>
                <br />


                <Form>
                    <Row>
                        <Col>
                            <Form.Group controlId="missSmall">
                                <Form.Label>Small: $12.20</Form.Label>
                                <br />
                                <Button variant="primary" type="submit" onClick={() => props.addBasket("MississippiRiverSmall")}>Buy</Button>
                            </Form.Group>
                        </Col>
                        <Col><Image className="lastRes" src="../../pictures/Image from iOS (3).jpg" /></Col>
                        <Col>
                            <Form.Group controlId="missLarge">
                                <Form.Label>Large: $20.00</Form.Label>
                                <br />
                                <Button variant="primary" type="submit" onClick={() => props.addBasket("MississippiRiverLarge")}>Buy</Button>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </div>
            <br />
            <br />
        </div >
       
    )
};

export default connect(null, { addBasket })(Cart);


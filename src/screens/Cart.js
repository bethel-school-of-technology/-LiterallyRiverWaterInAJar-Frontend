import React from 'react';
import Jumbotron from '../components/JumboCart';
import { Container } from 'react-bootstrap';

const Cart = () => (
    <React.Fragment>
        <Jumbotron/>
        <Container>
    <div>
        <h2>Shopping Cart</h2>
    </div>
        </Container>
    </React.Fragment>
);

export default Cart;
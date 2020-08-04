import React from "react";
import "./Contact.css"
import { Link } from "react-router-dom";
import Jumbotron from "../components/JumboContact"
import { Container, Row, Col, Image, Carousel } from "react-bootstrap"

const Contact = () => (
  <React.Fragment>
    <Jumbotron />
    <Container >
      <h1>Don't Contact Us.</h1>
      <Image className="dontDoIt" src="../../pictures/dontContact.jpg"/>
    </Container>
    <div>
      
    </div>
    <br />
    <br/>
  </React.Fragment>
)

export default Contact
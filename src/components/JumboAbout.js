import React from 'react';
import { Jumbotron as Jumbo, Container } from "react-bootstrap"
import "./Jumbotron.css"

const JumboAbout = () => (
  <Jumbo fluid className="jumbo">
    <div className="overlay"></div>
    <Container>
      <h1 className="h1White">About</h1>
      <p>Learn That River</p>
    </Container>
  </Jumbo>
)

export default JumboAbout;
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Footer.css";
import { Nav, Navbar, Image } from "react-bootstrap";

// import { connect } from "react-redux";
// import { getNumbers } from "../actions/getAction"



const Footer = () => {


  // useEffect(() => {
  //   getNumbers();
  // }, [])

  return (
    <Navbar fixed="bottom" className="navColors" expand="lg">
      <Navbar.Brand>
        <Link className="links" to="/about">About </Link> | <Link className="links" to="/products"> Products</Link> | <a className="links" href="#top">To Top</a>
        </Navbar.Brand>
      
        <Nav className="ml-auto">
          
          <Nav.Item><Nav.Link href="/contact"><Link className="links" to="/contact">Contact</Link></Nav.Link></Nav.Item>

         

          
        </Nav>

     

    </Navbar>
  )
}
// const mapStateToProps = state => ({
//   basketProps: state.basketState
// })
export default Footer;
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import "./NavBar.css";
import { Nav, Navbar, Image } from "react-bootstrap";

// import { connect } from "react-redux";
// import { getNumbers } from "../actions/getAction"



const NavBar = () => {


  // useEffect(() => {
  //   getNumbers();
  // }, [])

  return (
    <Navbar className="navColor" expand="lg">
      <Navbar.Brand><Link className="link" to="/">Literally River Water <Image src="../../pictures/mason-jar.png" className="brandImg" /></Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="ml-auto"><Nav.Item><Nav.Link href="/"><Link className="link" to="/">Home</Link></Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/about"><Link className="link" to="/about">About</Link></Nav.Link></Nav.Item>

          <Nav.Item><Nav.Link href="/products"><Link className="link" to="/products">Products</Link></Nav.Link></Nav.Item>

          <Nav.Item><Nav.Link href="/cart"><Link className="link" to="/cart">Cart <Image className="bag" src="../../pictures/sale.png" /></Link></Nav.Link></Nav.Item>
        </Nav>

      </Navbar.Collapse>

    </Navbar>
  )
}
// const mapStateToProps = state => ({
//   basketProps: state.basketState
// })
export default NavBar;
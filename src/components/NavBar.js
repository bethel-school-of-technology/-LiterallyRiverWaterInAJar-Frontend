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
  // <Navbar expand="lg">
  //   <Navbar.Brand><Link className="link" to="/">Serenity's Place<Image className="cup" src="../../pictures/food.png" /></Link></Navbar.Brand>
  //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //   <Navbar.Collapse id="basic-navbar-nav">
  //     <Nav variant="tabs" defaultActiveKey="/" className="ml-auto">
  //       <Nav.Item><Nav.Link eventKey="link-1"><Link className="link" to="/">Home</Link></Nav.Link></Nav.Item>
  //       <Nav.Item><Nav.Link eventKey="link-2"><Link className="link" to="/about">About</Link></Nav.Link></Nav.Item>
  //       <Nav.Item><Nav.Link eventKey="link-3"><Link className="link" to="/contact">Products</Link></Nav.Link></Nav.Item>
  //       <Nav.Item><Nav.Link eventKey="link-4"><Link className="link" to="/cart">Shopping Cart</Link></Nav.Link></Nav.Item>
  //     </Nav>
  //   </Navbar.Collapse>
  // </Navbar>
  return (
    <Navbar expand="lg">
      <Navbar.Brand><Link className="link" to="/">Literally River Water</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav variant="tabs" defaultActiveKey="/" className="ml-auto">
          <Nav.Item><Nav.Link><Link className="link" style={{ listStyleType: "none" }} to="/">Home</Link></Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link ><Link className="link" to="/about">About</Link></Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link><Link className="link" to="/products">Products</Link></Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link><Link className="link" to="/cart">Shopping Cart</Link></Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
      
    </Navbar>
  )
}
// const mapStateToProps = state => ({
//   basketProps: state.basketState
// })
export default NavBar;
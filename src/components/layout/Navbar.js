import React from 'react'
import { Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './logo1.png';

 const Navigationbar = () =>{
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="p-2">
      <Link to='/'>
      <Navbar.Brand className="ml-5">
      <img
        alt="Medapp.in"
        src={logo}
        width="180"
        height="80"
        className="d-inline-block align-top"
      />
      </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-5 my-2">
        <Link to='/' className="mx-5 my-2 text-dark">HOME</Link>
        <Link to='/Aboutus' className="mx-5 my-2 text-dark">WHO WE ARE</Link>
        <Link to='/services' className="mx-5 my-2 text-dark">SERVICES</Link>
        <Link to='/Ourblogs' className="mx-5 my-2 text-dark">OUR BLOG</Link>
        <Link to='/Contacts' className="mx-5 my-2 text-dark">CONTACTS</Link>
      </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}

export default Navigationbar;
import React from 'react'
import {Nav, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar fixed="top" bg="dark" >
    <Navbar.Brand href="/">Client Manager</Navbar.Brand>
    <Nav className="mr-auto">
    <Nav.Link href="/add">Add Client</Nav.Link>
    <Nav.Link href="/login">Log In</Nav.Link>
    </Nav>
    </Navbar>
  )
}

export default Header

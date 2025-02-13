import React from "react";
import {Form, Container, Nav, Navbar, NavDropdown, Button} from 'react-bootstrap'
export default function UserDashboard() {

	return ( 
		<div>

			<div className="bg-7 b-form">
				<Navbar>
			      <Container fluid>
			        <Navbar.Brand href="#">SORA</Navbar.Brand>
			        <Navbar.Toggle aria-controls="navbarScroll" />
			        <Navbar.Collapse id="navbarScroll">
			          <Nav
			            className="me-auto my-2 my-lg-0"
			            navbarScroll
			          >
			            <Nav.Link href="#action1">Account</Nav.Link>
			            <Nav.Link href="#action2">Home</Nav.Link>
			            <Nav.Link href="#action3">Features</Nav.Link>
			            <Nav.Link href="#action4">Help & Support</Nav.Link>
			            <Nav.Link href="#action5">Setting</Nav.Link>
			          </Nav>
				          <Form className="d-flex gap-3">
				          <Nav.Link href="#action6">LogIn</Nav.Link>
				          <Nav.Link href="#action7">SignIn</Nav.Link>
			            <Form.Control
			              type="search"
			              placeholder="Search"
			              className="me-2"
			              aria-label="Search"
			            />
			            <Button>Search</Button>
			          </Form>
			        </Navbar.Collapse>
			      </Container>
			    </Navbar>
			</div>
				<div className="col-2 h-2 b-form bg-7">
						<h2 className="d-flex justify-content-center align-items-center">Profile</h2>
				</div>
				<div className="col-2 h-1 b-form bg-7">
						<h2 className="d-flex justify-content-center align-items-center">Others</h2>
				</div>
		</div>

	)

}

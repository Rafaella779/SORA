import React from "react";
import {Form, Container, Nav, Navbar, NavDropdown, Button,} from 'react-bootstrap'
export default function UserDashboard() {

	return ( 
		<div>
			<div className="b-form bg-4" expand="lg">
				<Navbar className="b-form bg-3">
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
			          </Form>
			        </Navbar.Collapse>
			      </Container>
			      	<Form className="d-flex">
				            <Form.Control
				              type="search"
				              placeholder="Search"
				              className="me-2"
				              aria-label="Search"
				            />
				            <Button variant="primary">Search</Button>
          			</Form>
			    </Navbar>
			</div>
				<div className="col-1 b-form bg-4 w-500 b-form">
					<Nav className="b-form bg-3">
						<Nav.Link href="#action1">UserName</Nav.Link>
						<Nav.Link href="#action2">SchoolName</Nav.Link>
						<Nav.Link href="#action3">SchoolID</Nav.Link>
						<Nav.Link href="#action4">LRN</Nav.Link>
						<Nav.Link href="#action5">Birthdate</Nav.Link>
						<Nav.Link href="#action6">Email</Nav.Link>
						<Nav.Link href="#action7">Notification</Nav.Link>
						<Nav.Link href="#action8">Works</Nav.Link>
						<h3>__________</h3>
						<Nav.Link href="action9">About us</Nav.Link>
					</Nav>

				<div class="row">
					<div class="col-6 d-flex justify-content-center align-items-center">
					</div>
					<div className="col-5 row w-500 b-form" expand="lg">
					<h2 className="d-flex justify-content-center align-items-center">New Here?</h2>
					<h6 className="d-flex justify-content-center align-items-center">Sign up and discover a great amount of new opportunities</h6>
				</div>
			</div>

				</div>
				
		</div>
				

	)

}

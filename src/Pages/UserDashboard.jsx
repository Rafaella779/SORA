import {useState, useEffect} from 'react';
import React from "react";
import {Form, Container, Nav, Navbar, NavDropdown, Button,} from 'react-bootstrap'

export default function UserDashboard() {
	

	return(

		<div>

		<div className="border-3px">
			<Navbar>
			      <Container fluid>
			        <Navbar.Toggle aria-controls="navbarScroll" />
			        <Navbar.Brand href="#" className="cinzel-decorative">SORA</Navbar.Brand>
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
				<div className="d-flex">
					<div className="border-3px col">
						<h1>Hello Admin!</h1>
							<div className="d-flex gap-5">
								<Nav>
									<Nav.Link href="#action1">User</Nav.Link>
									<Nav.Link href="#action2">SchoolName</Nav.Link>
									<Nav.Link href="#action3">School ID</Nav.Link>
									<Nav.Link href="#action4">ID</Nav.Link>
									<Nav.Link href="#action5">Birthdate</Nav.Link>
									<Nav.Link href="#action6">LRN</Nav.Link>
									<Nav.Link href="#action7">Email</Nav.Link>
									<Nav.Link href="#action8">Papers</Nav.Link>
									<h3>__________</h3>
									<Nav.Link href="#action9">About us</Nav.Link>
									<Nav.Link href="#action10">Contact us</Nav.Link>
								</Nav>
							</div>
							<div className="border-3px d-flex">
								<div>
									<Form className="w-600">
										<h1>Hatdog</h1>
										<p>
											jafuhdyksgfukydsvgb8sirtguv
										</p>
									</Form>
									
								</div>
							</div>
					</div>
			</div>
	)
}

	

import React from "react";
import {Form, Container, Nav, Navbar, NavDropdown, Button} from 'react-bootstrap'
export default function UserDashboard() {

	return ( 
		<div>

			<div className="border-3px">
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
			            <Nav.Link href="#action6">About Us</Nav.Link>
			            <Nav.Link href="#action7">Contact Us</Nav.Link>
			          </Nav>
				          <Form className="d-flex gap-3">
				          <Nav.Link href="#action8">LogOut</Nav.Link>
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
		<div className="d-flex">
			<div className="d-flex border-3px">
						<div className="col">
							<h4>Hello Admin!</h4>	
							<div className="d-flex">
								<div>
									<Nav.Link href="#action1">UserName</Nav.Link>
								</div>				
						</div>
						<div className="d-flex ">
							<div>
								<Nav.Link href="#action1">SchoolName</Nav.Link>
							</div>
						</div>
						<div className="d-flex ">
							<div>
								<Nav.Link href="#action1">Schoo lID</Nav.Link>
							</div>
						</div>
						<div className="d-flex ">
							<div>
								<Nav.Link href="#action1">ID</Nav.Link>
							</div>
						</div>
						<div className="d-flex">
							<div>
								<Nav.Link href="#action1">LRN</Nav.Link>
							</div>
						</div>
						<div className="d-flex ">
							<div>
								<Nav.Link href="#action1">BirthDate</Nav.Link>
							</div>
						</div>
						<div className="d-flex ">
							<div>
								<Nav.Link href="#action1">Email</Nav.Link>
							</div>
						</div>
				    </div>
				</div>
				<div className="d-flex border-2 align-text-center gap-5">
					<div className="d-flex align-text-center">Hello World!</div>				
				</div>
			</div>
		</div>
	)

}

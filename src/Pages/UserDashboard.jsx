import React from "react";
import {Form, Container, Nav, Navbar, NavDropdown, Button} from 'react-bootstrap'
import {useState, useEffect} from 'react';

export default function UserDashboard() {

	function p1()  {
		
		<div className="height-500">
				<Navbar className="height-500 b-form">
			      <Container fluid>
			        <Navbar.Brand href="#" className="cinzel-decorative">SORA</Navbar.Brand>
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
			<div>
				<h3 className="d-flex justify-content-center align-items-center">About us</h3>
			</div>
			</div>
		return (<Form.Group>
				<Form.Label>Username</Form.Label>
				<Form.Control onChange={(e) => {setUsername(e.target.value); console.log(username)}} value={username}/>
				<Form.Label>Email address</Form.Label>
				<Form.Control type="email" onChange={e => setEmail(e.target.value)} value={email}/>
				<Form.Label>Password </Form.Label>
				<Form.Control type="password" onChange={e => setPassword(e.target.value)} value={password}/>
		</Form.Group>)
	} 

	function p2() {
		return (<Form.Group>
				<Form.Label>First Name </Form.Label>
				<Form.Control  onChange={e => setfname(e.target.value)} value={fname}/>
				<Form.Label>Last Name </Form.Label>
				<Form.Control  onChange={e => setlname(e.target.value)} value={lname}/>
				<Form.Label>BirthDate</Form.Label>
				<Form.Control  onChange={e => setbirthdate(e.target.value)} value={birthdate}/>
			</Form.Group>)
	} 

	

	function p3() { 
		return (
			<Form.Group>
			<Form.Label>School Name</Form.Label>
				<Form.Control onChange={e => setSchoolName(e.target.value)} value={SchoolName}/>
				<Form.Label>Lrn</Form.Label>
				<Form.Control  onChange={e => setlrn(e.target.value)} value={lrn}/>
				<Form.Label>ID</Form.Label>
				<Form.Control  onChange={e => setID(e.target.value)} value={ID}/>
				<Form.Label>School ID</Form.Label>
				<Form.Control  onChange={e => setSchoolID(e.target.value)} value={SchoolID}/>
			</Form.Group>
		)
	}
}
function DashboardStudent(){
		<div className="d-flex">
			<div className="d-flex border-3px">
						<div className="col">
							<h4>Hello Admin!</h4>	
							<div className="d-flex">
								<div>
									<Nav.Link href="#action1">Account</Nav.Link>
								</div>				
						</div>
						<div className="d-flex ">
							<div>
								<Nav.Link href="#action1">Email</Nav.Link>
							</div>
						</div>
						<div className="d-flex ">
							<div>
								<Nav.Link href="#action1">Bookmarked</Nav.Link>
							</div>
						</div>
						<div className="d-flex ">
							<div>
								<Nav.Link href="#action1">Library</Nav.Link>
							</div>
						</div>
						<div className="d-flex">
							<div>
								<Nav.Link href="#action1">Settings</Nav.Link>
							</div>
						</div>
				    </div>
				</div>
				<div className="d-flex border-3px w-600 align-text-center gap-5">
					<div className="d-flex align-text-center">Hello World!</div>				
				</div>
			</div>

		}

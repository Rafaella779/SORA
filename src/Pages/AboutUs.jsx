import React, {useState, useEffect, useContext } from 'react'
import { Button, Form, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
export default function AboutUs() {

	return ( 
		<div>
			<div>
				<h1>Contact Us!</h1>
				<h3>meow meow meow meow</h3>
			</div>
			<div className="d-flex justify-content-center flex-column ">
				<div className="d-flex text-center justify-content-center h-1">
					<Form className="w-600 b-form" >
					   <Form.Group className="mb-3" controlId="Name">
					        <Form.Label className="c-red">Name</Form.Label>
					   <Form.Control  type="Name" placeholder="Enter Name" />
					      </Form.Group>
					   <Form.Group className="mb-3" controlId="LastName">
					        <Form.Label className="c-red">Last Name</Form.Label>
					        <Form.Control  type="Las tName" placeholder="Enter Last Name" />
					   </Form.Group>
					   <Form.Group className="mb-3" controlId="formGroupEmail">
			       			 <Form.Label className="c-red">Email address</Form.Label>
					   <Form.Control  type="email" placeholder="Enter email" />
						      </Form.Group>
					   <Form.Group className="mb-3" controlId="WhatCanIhelpYou">
					        <Form.Label className="c-red">What Can I Help You</Form.Label>
					        <Form.Control  type="What Can I Help You" placeholder="What Can I Help You" />
					   </Form.Group>
					   <Form.Group class="d-flex gap-4">
	             			<Button>Submit</Button>
	             		</Form.Group>
				    </Form>
				</div>
			</div>
		</div>

	)
}
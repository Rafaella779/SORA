import React from "react";
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';

export default function Register() {

	return (
		<div className="d-flex justify-content-center flex-column ">
			<div className="d-flex justify-content-center">
				<h1 className="c-red f-80">REGISTER</h1>
			</div>
			<div className="d-flex text-center justify-content-center h-1">
			    <Form className="w-600 b-form" >
			    <Form.Group className="mb-3" controlId="Name">
			        <Form.Label className="c-red">Name</Form.Label>
			        <Form.Control  type="Name" placeholder="Enter Name" />
			      </Form.Group>
			      <Form.Group className="mb-3" controlId="formGroupEmail">
			        <Form.Label className="c-red">Email address</Form.Label>
			        <Form.Control  type="email" placeholder="Enter email" />
			      </Form.Group>
			      <Form.Group className="mb-3" controlId="formGroupPassword">
			        <Form.Label className="c-red">Password</Form.Label>
			        <Form.Control type="password" placeholder="Password" />
			      </Form.Group>
			      <Form.Group className="mb-3" controlId="formGroupConpass">
			        <Form.Label className="c-red">Confirm Password</Form.Label>
			        <Form.Control  type="Confirm password" placeholder="Confirm your passwords" />
			      </Form.Group>
			        <Dropdown>
					      <Dropdown.Toggle className="c-red">
					        Role
					      </Dropdown.Toggle>

					      <Dropdown.Menu>
					        <Dropdown.Item href="#/action-1">Student</Dropdown.Item>
					        <Dropdown.Item href="#/action-2">Teacher</Dropdown.Item>
					        <Dropdown.Item href="#/action-3">Others</Dropdown.Item>
					      </Dropdown.Menu>
    				</Dropdown>
		    	</Form>
			</div>
		</div>
		)
}


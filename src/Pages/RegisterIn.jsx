import React from "react";
import Form from 'react-bootstrap/Form';
export default function RegisterIn() {

	return (
		<div className="d-flex justify-content-center flex-column ">
			<div className="d-flex justify-content-center">
				<h1 className="c-red f-80">REGISTER</h1>
			</div>
			<div className="d-flex text-center justify-content-center h-1">
			    <Form className="w-600 b-form" >
			      <Form.Group className="mb-3" controlId="formGroupFirstName">
			        <Form.Label className="c-red">First Name</Form.Label>
			        <Form.Control  type="First Name" placeholder="Enter First Name" />
			      </Form.Group>
			      <Form.Group className="mb-3" controlId="formGroupMiddleName">
			        <Form.Label className="c-red">Middle Name</Form.Label>
			        <Form.Control  type="Middle Name" placeholder="Enter Middle Name" />
			      </Form.Group>
			      <Form.Group className="mb-3" controlId="formGroupLastName">
			        <Form.Label className="c-red">Last Name</Form.Label>
			        <Form.Control  type="Last Name" placeholder="Enter Last Name" />
			      </Form.Group>
		    	</Form>
			</div>
		</div>
		)
}


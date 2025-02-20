import React, {useState, useEffect, useContext } from 'react'
import {Form, SplitButton, Button} from 'react-bootstrap';

export default function RegisterT() {
	const [SchoolName, setSchoolName] = useState("")
	const [SchoolId, setSchoolId] = useState("")


	return (
		<div className="d-flex justify-content-center flex-column ">
			<div className="d-flex justify-content-center">
				<h1 className="c-red f-80">REGISTER</h1>
			</div>
			<div className="d-flex text-center justify-content-center h-3">
			    <Form className="w-600 b-form" >
			    <Form.Group className="mb-3" controlId=" SchoolName">
			        <Form.Label className="c-red">School Name</Form.Label>
			        <Form.Control  type="schname" placeholder="Enter School Name" onChange={e => setSchoolName(e.target.value)} value={SchoolName} />
			      </Form.Group>
			      <Form.Group className="mb-3" controlId="formGroupEmail">
			        <Form.Label className="c-red">School Id</Form.Label>
			        <Form.Control  type="siD" placeholder="Enter School ID Number" onChange={e => setSchoolId(e.target.value)} value={SchoolId}/>
			      </Form.Group>
			       <Form.Group className="mb-3" controlId=" SchoolName">
			        <Form.Label className="c-red">School Name</Form.Label>
			        <Form.Control  type="schname" placeholder="Enter School Name" onChange={e => setSchoolName(e.target.value)} value={SchoolName} />
			      </Form.Group>
			       <Form.Group className="mb-3" controlId=" SchoolName">
			        <Form.Label className="c-red">School Name</Form.Label>
			        <Form.Control  type="schname" placeholder="Enter School Name" onChange={e => setSchoolName(e.target.value)} value={SchoolName} />
			      </Form.Group>
			      	   <Form>
      {['checkbox'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
        <h5 className="c-red"> Are You A Research Teacher?</h5>
          <Form.Check
            inline
            label="Yes"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="No"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}
    </Form>
			        <Dropdown>
					      <Dropdown.Toggle className="c-red">
					        Gender
					      </Dropdown.Toggle>

					      <Dropdown.Menu>
					        <Dropdown.Item href="#/action-1">Male</Dropdown.Item>
					        <Dropdown.Item href="#/action-2">Female</Dropdown.Item>
					        <Dropdown.Item href="#/action-3">Others</Dropdown.Item>
					      </Dropdown.Menu>
					      
					      <div className="d-flex justify-content-center align-items-center bg-n">

									<Button>Submit</Button>
								</div>
    				</Dropdown>
		    	</Form>
			</div>
		</div>
		)
}
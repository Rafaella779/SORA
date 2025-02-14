import React, {useState, useEffect, useContext } from 'react'
import {Form, Dropdown, DropdownButton, SplitButton, Button} from 'react-bootstrap';

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
<div>
			<div className="border-3px" expand="lg">
				<Navbar className="border-3px">
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

				<div className="col-1 border-3px">
					<Nav className="border-3px">
						<Nav.Link href="#action1">UserName</Nav.Link>
						<Nav.Link href="#action2">SchoolName</Nav.Link>
						<Nav.Link href="#action3">School ID</Nav.Link>
						<Nav.Link href="#action4">ID</Nav.Link>
						<Nav.Link href="#action5">Birthdate</Nav.Link>
						<Nav.Link href="#action6">LRN</Nav.Link>
						<Nav.Link href="#action7">Email</Nav.Link>
						<Nav.Link href="#action8">Papers Approved</Nav.Link>
						<h3>__________</h3>
						<Nav.Link href="#action9">About us</Nav.Link>
						<Nav.Link href="#action10">Contact us</Nav.Link>
					</Nav>

				</div>

		</div>
		</div>

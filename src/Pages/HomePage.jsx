import React from "react";
import {Form, ButtonGroup, Dropdown, DropdownButton, SplitButton, Button, Table, Container, Nav, Navbar,} from 'react-bootstrap'

export default function HomePage() {
	let tableData;
	return ( 
		<div>
		<div>
			<Navbar expand="lg">
				<Container fluid>
					<Navbar.Brand href="#">SORA</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
					<Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
				    	<Nav.Link href="#action1">Account</Nav.Link>
				    	<Nav.Link href="#action2">Mail</Nav.Link>
				    	<Nav.Link href="#action3">Bookmarked</Nav.Link>
				    	<Nav.Link href="#action4">Library</Nav.Link>
				    	<Nav.Link href="#action5">History</Nav.Link>
				    	<Nav.Link href="About us">
				    	About us
				    	</Nav.Link>
				    	</Nav>
				    </Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
			<div>
				 <div className="cinzel-decorative d-flex text-center justify-content-center">
				 	<h1>SORA</h1>
				 </div>
	             
	             <div className="w-75 h-2">
	            	 <Form>
	             		<Form.Group class="d-flex gap-4">
	             			<Form.Control  type="Name or Author" placeholder="Enter Name or author" />
	             			<Button>Search</Button>
	             		</Form.Group>
	             	</Form>
	           	 </div>

	            <div class="w-100 h-2">
	             	<Table striped bordered hover>
	             		<thead>
	             			<tr>
		             			<th>Author</th>
		             			<th>Title</th>
		             			<th>Abstract</th>
		             			<th>Views</th>
	             			</tr>
	             		</thead>
				             	<tbody>
				             		{tableData}
				             	</tbody>
	            	 </Table>
	            </div>
			</div>
		</div>
		)
}
			
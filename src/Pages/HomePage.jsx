import React from "react";
import {Form, ButtonGroup,SplitButton, Button, Table,} from 'react-bootstrap'

export default function HomePage() {
	let tableData;
	return ( 
		<div>
		<div>
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
			
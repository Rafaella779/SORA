import React from "react";
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import Button from 'react-bootstrap/Button';


export default function HPage() {

	return ( 
		<div class="bg-5 fullPage p-5">
			<div>
				 <div>
				 	<h1>SORA</h1>
				 </div>
	             
	             <div class="w-75">
	            	 <Form>
	             		<Form.Group class="d-flex gap-4">
	             			<Form-Control placeholder="Enter title or author"/>
	             			<Button>Search</Button>
	             	</Form.Group>
	             	</Form>
	            </div>

	            <div>
	             	<Table striped bordered hover>
	             		<thead>
	             			<tr>
		             			<th>FName</th>
		             			<th>LName</th>
		             			<th>Grade</th>
		             			<th>Section</th>
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


      
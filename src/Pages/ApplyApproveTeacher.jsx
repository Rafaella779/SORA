import React, {useState, useEffect, useContext } from 'react'
import {Form, ButtonGroup, SplitButton, Button, Table,} from 'react-bootstrap'
import {useNavigate} from 'react-router'
import Swal from 'sweetalert2'

export default function ApplyApproveTeacher() {
	const [Message, setMessage] = useState("")
	const handleSubmit = () => {
				Swal.fire({
					icon: "success",
					title: "Apply Success!",
					timer: 1500,
					showConfirmButton: false
				})
	}

	return ( 
		<div className="b-1px m-2 d-flex flex-column col-12 col-lg-5 p-4 justify-content-center">
			<h4 className="pt-serif-bold">Apply to Approve</h4>
				<Form className="d-flex flex-column gap-2">							
					<Form.Group>
						<Form.Label>Please ensure that the following requirements-TOR, <strong> proof of being a research teacher, and a proof of employment in a school (such as a picture with the principal or co-workers) </strong> are uploaded to a Google Drive folder. Share the link to the folder by pasting it in the box below.</Form.Label>
					<Form.Control as="textarea" rows={3} onChange={e => setMessage(e.target.value)} value={Message}/>
					</Form.Group>
					<Form.Group className="d-flex gap-4">
	             		<Button onClick={handleSubmit}>Submit</Button>
	             	</Form.Group>
				</Form>
		</div>
	)

}




		

	



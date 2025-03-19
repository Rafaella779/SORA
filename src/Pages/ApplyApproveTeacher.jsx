import React, {useState, useEffect, useContext } from 'react'
import {Button, Modal, Form} from 'react-bootstrap'
import {useNavigate} from 'react-router'
import Swal from 'sweetalert2'

export default function ApplyApproveTeacher() {

	const [show, setShow] = useState(false)
	const [link, setLink] = useState("")
	const n = useNavigate();
	const handleSubmit = () => {
		fetch(`${import.meta.env.VITE_BACKEND}/identity`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"authorization": `Bearer ${localStorage.getItem('t')}`
			},
			body: JSON.stringify({
				link: link,
				researcherID: localStorage.getItem('i')
			})
		}).then(res => res.json()).then(res => {
			console.log(res)
			if (res.message) {
				Swal.fire({
					icon: "success",
					title: "Thank You for Applying",
					text: "We have received your documents link. Our team will review your submission and get back to you within 72 hours."
				}).then(x => {
					n('/teacher')
				})
			}
			else if (res.error || res.error == undefined) {
				Swal.fire({
					icon: "error",
					title: "Error",
					text: "There was a problem in processing your request. Please try again. If the problem persists, please report it to us. Thank you."
				})
			}
		})
	}
	return ( 
		<div className="d-flex w-100 justify-content-center p-3 p-md-5">


			<div className="d-flex mw-700 w-100 apply-approve-border flex-column  p-4">
				<Modal show={show} onHide={() => {setShow(false)}} scrollable={true}>
					<Modal.Header closeButton >
						<Modal.Title>Terms and Conditions</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						
						<h6 className="">By clicking on submit, you hereby agree to the specified terms and conditions</h6>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={handleSubmit}>Submit</Button>
					</Modal.Footer>

				</Modal>


				<h4 className="color-4">Become a Research Approver</h4>
				<hr className="my-1"/>
				<div className="d-flex flex-column flex-md-row gap-md-3">
					<div className="d-flex flex-column col">
						<h6 className="m-0">Requirements:</h6>	
						<p className=" mb-0">The following documents are the minimum requirements for screening to become a research submission approver:
						</p>
						<ol className="">
							<li>Employee ID</li>
							<li>Transcript of Records</li>
							<li>A letter confirming your employment and designation as a Research Teacher or a teacher in your applied specific fields, signed by the School Head</li>
							<li>Any other evidence that confirms your present designation</li>
						</ol>
					</div>
					<div className="d-flex flex-column col">
						<h6 className="m-0">Instructions:</h6>	
						<ol className="">
							<li>Documents should be in PDF format</li>
							<li>Upload your documents to a Google Drive or OneDrive folder</li>
							<li>Share and copy the link</li>
							<li>Paste the link in the form below</li>
							<li>Click Next</li>
							<li>Read terms and conditions</li>
							<li>Click Submit</li>
						</ol>
						<hr className="my-1"/>

						<Form>
							<Form.Group>
								<Form.Label>Google Drive Link:</Form.Label>
								<Form.Control onChange={(e) => {setLink(e.target.value)}} value={link} placeholder="Enter Link"/>
							</Form.Group>
						</Form>
						<Button className="mt-2" onClick={() => {setShow(true)}}>Next</Button>
					</div>
						
				</div>
				
			</div>
		</div>
	)

}




		

	



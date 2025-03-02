import React, {useState, useEffect, useContext,useShow, useNavigate } from 'react'
import { Button, Form, Container, Nav, Navbar, NavDropdown, Card, Modal } from 'react-bootstrap'
import Swal from 'sweetalert2'

export default function UserDashboard() {
	const [show, setShow] = useState(false);

  	const handleClose = () => setShow(false);
  	const handleShow = () => setShow(true);

  	let n={useNavigate}
	return(
	<div className="d-flex">
	<ModalChange show={show} setShow={setShow} />
			<div className="d-flex border-2px col-3">
				<StudentCard picLink="https://www.svgrepo.com/show/343494/profile-user-account.svg" />
				<div>
				<div className="d-flex justify-content-end">
					<Nav.Link href="Upload">Publish Your Work</Nav.Link>
					</div>
						<p> Email: {localStorage.getItem('s')}</p>
						<p> Lrn: {localStorage.getItem('o')	}</p>
						<p> Birthdate: {localStorage.getItem('p')}</p>
						<p> School ID: {localStorage.getItem('b')}</p>
						<p> School Name: {localStorage.getItem('x')}</p>
						<p> ID: {localStorage.getItem('s')}</p>
						<p> Name: {localStorage.getItem('t')}</p>
					<div>
						<Button onClick={handleShow} variant="secondary">Change</Button>
					</div>
			</div>		
			</div>
			<div className="border-2px col-9">
				<p>HILLO WERLD!!!</p>
			</div>
	</div>

	)
}
function ModalChange({show, setShow}){
	const handleClose = () => setShow(false);
  	const handleShow = () => setShow(true);

  	const [username, setUsername] = useState("")
	const [email, setEmail] = useState("")
	const [lrn, setlrn] = useState("")
	const [SchoolID, setSchoolID] = useState("")
	const [ID, setID] = useState("")
	const [SchoolName, setSchoolName] = useState("")

	const handleSubmit = () => {
		fetch(`https://sora-q8wl.onrender.com/user/createUser`, {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({
				email: email,
				firstName: fname,
				lastName: lname,
				birthdate: new Date(birthdate),
				schoolName: SchoolName,
				LRN: lrn,
				schoolID: SchoolID,
				ID: ID,
				
			})
		}).then(result => result.json()).then(result => {
			if(result.error){
				console.log(result)
				Swal.fire({
					icon: "error",
					title: "invalid Credentials",
					text: '${res.error} check your details and try again'
				})
			}
			else {
				Swal.fire({
					icon: "success",
					title: "Register Success!",
					timer: 1500,
					showConfirmButton: false
				}).then(result => {
					let l = localStorage;
					console.log(res);
					l.setItem('t', res.t);
					l.setItem('u', res.t);
					l.setItem('a', res.t);
					l.setItem('n', res.t);
					l.setItem('i', res.t);
					l.setItem('x', res.t);
					l.setItem('b', res.t);
					l.setItem('s', res.t);
				})

			}
		})
	}

	 return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="border-2px" closeButton>
          <Modal.Title>Account Information</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-1 border-2px">
				<Form.Label>Username</Form.Label>
				<Form.Control onChange={(e) => {setUsername(e.target.value); console.log(username)}} value={username}/>
				<Form.Label>Email address</Form.Label>
				<Form.Control type="email" onChange={e => setEmail(e.target.value)} value={email}/>
				<Form.Label>LRN</Form.Label>
				<Form.Control  onChange={e => setlrn(e.target.value)} value={lrn}/>
				<Form.Label>ID</Form.Label>
				<Form.Control  onChange={e => setID(e.target.value)} value={ID}/>
				<Form.Label>School ID</Form.Label>
				<Form.Control  onChange={e => setSchoolID(e.target.value)} value={SchoolID}/>
				<Form.Label>School Name</Form.Label>
				<Form.Control onChange={e => setSchoolName(e.target.value)} value={SchoolName}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


function StudentCard({picLink, name}){
	return(<>
		<div className="p-2 d-flex align-items-center aboutUsCard h-auto ">
			<div className="d-flex">
				<img src={picLink} alt="" className="aboutUsPic" />
			</div>
			<h6 className="p-2 d-flex text-center">{name}</h6>
		</div>

	</>)
}
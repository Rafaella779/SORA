import React, {useState, useEffect, useContext } from 'react'
import { Button, Form, Container, Nav, Navbar, NavDropdown, Card } from 'react-bootstrap'
import Swal from 'sweetalert2'

export default function UserDashboard() {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [email, setEmail] = useState("")
	const [fname, setfname] = useState("")
	const [lname, setlname] = useState("")
	const [birthdate, setbirthdate] = useState("")
	const [SchoolName, setSchoolName] = useState("")
	const [lrn, setlrn] = useState("")
	const [SchoolID, setSchoolID] = useState("")
	const [ID, setID] = useState("")

	const handleSubmit = () => {
		fetch(`https://sora-q8wl.onrender.com/user/createUser`, {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({
				email: email,
				password: password,
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
	return(
		<div>
				<div className="d-flex w-100 h-3">
					<div className="border-2px d-flex">
					<div>
						<div>
							<StudentCard picLink="https://www.svgrepo.com/show/408476/user-person-profile-block-account-circle.svg" />

						</div>
						<div>
							<h6>School Name</h6>

							<h6>Name</h6>
							<h6>School ID</h6>
							<h6>ID</h6>
							<h6>LRN</h6>
							<h6>Birthdate</h6>

						</div>
					</div>
				</div>
				<div className="d-flex">
						<div>
							<Form className="w-100" >
								<Form.Group className="mb-3" controller="formBasicUserName">
									<Form.Label>Username</Form.Label>
									<Form.Control value={username}/>	
								</Form.Group>							
								<Form.Group className="mb-3" controller="formBasicName">
									<Form.Label>Name</Form.Label>
									<Form.Control value={name}/>	
								</Form.Group>
								<Form.Group className="mb-3" controller="formBasicEmail">
									<Form.Label>Email</Form.Label>
									<Form.Control value={email}/>	
								</Form.Group>
								<Form.Group className="mb-3" controller="formBasicPassword	">
									<Form.Label>Password</Form.Label>
									<Form.Control value={password}/>	
								</Form.Group>
					    	</Form>
						</div>
					</div>
					<div className="d-flex align-items-begin">
					<div className="maxw-100 justify-content-center">
						<Nav.Link href="ApproveSystem">Approve Your Work</Nav.Link>
					</div>
					<div>
						<Nav.Link href="Upload">Upload Your Work</Nav.Link>
					</div>
					<div>list of your work</div>
				</div>
			</div>
	</div>

	)
}

function DashboardTeacher(){
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [email, setEmail] = useState("")
	const [fname, setfname] = useState("")
	const [lname, setlname] = useState("")
	const [birthdate, setbirthdate] = useState("")
	const [SchoolName, setSchoolName] = useState("")
	const [SchoolID, setSchoolID] = useState("")
	const [ID, setID] = useState("")

	const handleSubmit = () => {
		fetch(`https://sora-q8wl.onrender.com/user/createUser`, {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({
				email: email,
				password: password,
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
	return(
		<div>
			<div>
				<div className="d-flex w-100 h-3">
					<div className="border-2px d-flex">
					<div>
						<div>
							<StudentCard picLink="https://www.svgrepo.com/show/408476/user-person-profile-block-account-circle.svg" />
						</div>
						<div>
							<h6>School Name</h6>

							<h6>Name</h6>
							<h6>ID</h6>
							<h6>School ID</h6>
							<h6>Birthdate</h6>

						</div>
					</div>
				</div>
				<div className="d-flex border-2px">
						<div>
							<Form className="w-100" >
								<Form.Group className="mb-3" controller="formBasicUserName">
									<Form.Label>Username</Form.Label>
									<Form.Control value={username}/>	
								</Form.Group>							
								<Form.Group className="mb-3" controller="formBasicName">
									<Form.Label>Name</Form.Label>
									<Form.Control value={name}/>	
								</Form.Group>
								<Form.Group className="mb-3" controller="formBasicEmail">
									<Form.Label>Email</Form.Label>
									<Form.Control value={email}/>	
								</Form.Group>
								<Form.Group className="mb-3" controller="formBasicPassword	">
									<Form.Label>Password</Form.Label>
									<Form.Control value={password}/>	
								</Form.Group>
					    	</Form>
						</div>
					</div>
					<div className="d-flex align-items-begin">
					<div className="maxw-100 justify-content-center">
						<h4>Approve Work</h4>
						<Nav.Link href="ApproveSystem">Approve</Nav.Link>
					</div>
					<div>
						<h4>Upload Work</h4>
						<Nav.Link href="Upload">Upload</Nav.Link>
					</div>
					<div>
						<h4>List of Researches</h4>
					</div>
				</div>
			</div>
		</div>
	</div>

	)
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
import React, {useState, useEffect, useContext } from 'react'
import { Button, Form, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Swal from 'sweetalert2'
export default function Login() {

	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")

	const handleSubmit = () => {
		fetch(`https://sora-q8wl.onrender.com/login/student`, {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({
				e: username,
				p: password
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
					title: "LogIn Success!",
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
		<>
			<Navbar expand="lg" className="b-form" >
				<Container>
					<Navbar.Brand>SORA</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="https://ww.Facebook.com" >HOME</Nav.Link>
							<Nav.Link href="https://scholar.google.com/" >Search</Nav.Link>
							<Nav.Link href="https://www.jstor.org/" >About</Nav.Link>
							<Nav.Link href="https://eric.ed.gov/" >Contact</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<div class="row">
				<div class="col-6 d-flex justify-content-center align-items-center">
					<div>
						<h2 className="color-5">Sign In to SORA</h2>
						<Form className="col-5 row w-600 b-form">
							<Form.Group className="mb-3" controller="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control type="email" placeholder="Enter email" onChange={e => setUsername(e.target.value)} value={username} />
							</Form.Group>

							<Form.Group className="mb-3" controller="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password}/>
								<Button variant="ForgotPassword">Forgot password?</Button>
							</Form.Group>

								<div className="d-flex justify-content-center align-items-center">
									<Button onClick={handleSubmit}>Submit</Button>
								</div>
						</Form>
					</div>
				</div>
				<div className="col-5 row w-500 b-form" expand="lg">
					<h2 className="d-flex justify-content-center align-items-center">New Here?</h2>
					<h6 className="d-flex justify-content-center align-items-center">Sign up and discover a great amount of new opportunities</h6>
				</div>
			</div>
		</>
		)
}
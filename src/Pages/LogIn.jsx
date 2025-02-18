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
		<div>
			<Navbar className="border-2px">
			    <Container fluid>
			        <Navbar.Brand href="#" className="cinzel-decorative">SORA</Navbar.Brand>
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
					        <Form.Control
					            type="search"
					            placeholder="Search"
					            className="me-2"
					            aria-label="Search"
					        />
					        <Button>Search</Button>
			          	</Form>
			        </Navbar.Collapse>
			    </Container>
			</Navbar>
			<div class="row">
				<div class="col-6 d-flex justify-content-center align-items-center">
					<div>
						<h5 className="color-5">Log In to SORA</h5>
						<Form className="col-5 row w-600 border-2px">
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
				<div className="col-5 row w-500 border-2px" expand="lg">
					<h5 className="d-flex justify-content-center align-items-center">New Here?</h5>
					<p className="d-flex justify-content-center align-items-center">Sign up and discover a great amount of new opportunities</p>
				</div>
			</div>
		</div>
		)
}
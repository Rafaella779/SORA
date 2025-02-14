import React, {useState, useEffect, useContext } from 'react'
import { Button, Form, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Swal from 'sweetalert2'
export default function ContactUs() {

	const [email, setEmail] = useState("")
	const [Name, setName] = useState("")
	const [phone, setPhone] = useState("")
	const [Message, setMessage] = useState("")

	const handleSubmit = () => {
		fetch(`https://sora-q8wl.onrender.com/user/createUser`, {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({
				e: email,
				n: Name,
				ph: phone,
				m: Message,
				
			})
		}).then(result => result.json()).then(result => {
			if(result.error){
				console.log(result)
				Swal.fire({
					icon: "error",
					title: "invalid Credentials",
					text: `${res.error} check your details and try again`
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
				})

			}
		})
	}

	return ( 
		<div>
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
				<div>
					<h3 className="d-flex justify-content-center align-items-center">Contact us</h3>
					<p className="d-flex justify-content-center align-items-center">SORA is ready to provide the rigth solution according to your needs.</p>
				</div>
			</div>
			<div>
				<div className="d-flex">
					<div className="border-2px  col">
						<h4>Get In Touch</h4>
						<p>Get in touch and let us know how we can help.</p>
						<div>
							<div>phone</div>
							<div>email</div>
						</div>
						<div>
							<div>address</div>
							<div>facebook</div>
						</div>
					</div>
					<div className="border-2px d-flex">
						<div>
							<Form className="w-600" >							
								<Form.Group className="mb-3" controller="formBasicEmail">
									<Form.Label>Email address</Form.Label>
									<Form.Control type="email" onChange={e => setEmail(e.target.value)} value={email}/>		
									<Form.Label>Name </Form.Label>
									<Form.Control type="Name" onChange={e => setName(e.target.value)} value={Name}/>	
									<Form.Label>Phone</Form.Label>
									<Form.Control type="phone" onChange={e => setPhone(e.target.value)} value={phone}/>
									<Form.Label>Message</Form.Label>
									<Form.Control as="textarea" rows={5} onChange={e => setMessage(e.target.value)} value={Message}/>
								</Form.Group>
								<Form.Group className="d-flex gap-4">
	             					<Button onClick={handleSubmit}>Submit</Button>
	             				</Form.Group>
					    	</Form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
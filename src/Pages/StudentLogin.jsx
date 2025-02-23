import React, {useState, useEffect, useContext } from 'react'
import { Button, Form, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Swal from 'sweetalert2'
export default function StudentLogin() {

	const [email, setemail] = useState("")
	const [password, setpassword] = useState("")

	const handleSubmit = () => {
		fetch(`https://sora-q8wl.onrender.com/login/student`, {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({
				e: email,
				p: password
			})
		}).then(result => result.json()).then(res => {
			console.log(res);
			if(res.error){
				console.log(result)
				Swal.fire({
					icon: "error",
					title: "Invalid Password",
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
					l.setItem('t', res.n);
					l.setItem('u', res.i);
					l.setItem('a', res.b);
					l.setItem('n', res.e);
					l.setItem('i', res.c);
					l.setItem('x', res.sn);
					l.setItem('b', res.si);
					l.setItem('s', res.d);
					l.setItem('o', res.l);
					l.setItem('m', res.bi);
					l.setItem('v', res.s);
				})

			}
		})
	}

	return(
		<>
			<div className="row">
				<div className="col-6 d-flex justify-content-center align-items-center">
					<div>
						<h2 className="color-5">Sign In to SORA</h2>
						<Form className="col-5 row w-600 b-form">
							<Form.Group className="mb-3">
								<Form.Label>Email address</Form.Label>
								<Form.Control type="email" placeholder="Enter email" onChange={e => setemail(e.target.value)} value={email} />
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" placeholder="Password" onChange={e => setpassword(e.target.value)} value={password}/>
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
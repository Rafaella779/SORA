import React, {useState, useEffect, useContext } from 'react'
import { Button, Form, Container} from 'react-bootstrap'
import Swal from 'sweetalert2'
export default function LogIn() {

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleSubmit = () => {
		fetch(`https://sora-q8wl.onrender.com/login/teacher`, {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({
				e: email,
				p: password,
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
					setEmail(res.email);
          setPassword(res.password);
				})

			}
		})
	}

	return(
    <div>
			<div class="row">
				<div className="col-6 d-flex justify-content-center align-items-center">
					<div>
						<h5 className="color-5 pt-serif-bold">Log In to SORA</h5>
						<Form className="col-5 row w-600 b-1px">
							<Form.Group className="mb-3" controller="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} value={email} />
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
				<div className="col-5 row w-500 b-1px" expand="lg">
					<h5 className="d-flex justify-content-center align-items-center pt-serif-bold">New Here?</h5>
					<p class="light p-0  m-0"><strong className="d-flex justify-content-center align-items-center">Sign up and discover a great amount of new opportunities</strong></p>
				</div>
			</div>
		</div>
	)
}
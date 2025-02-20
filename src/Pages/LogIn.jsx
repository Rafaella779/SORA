import React, {useState, useEffect, useContext } from 'react'
import { Button, Form, Container} from 'react-bootstrap'
import Swal from 'sweetalert2'
export default function LogIn() {

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleSubmit = () => {
		fetch(`https://sora-q8wl.onrender.com/login/student`, {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({
				e: email,
				p: password,
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
					setEmail(res.email);
                    setPassword(res.password);
				})

			}
		})
	}

	return(
		<div>
			<div class="row">
				<div class="col-6 d-flex justify-content-center align-items-center">
					<div>
						<h5 className="color-5">Log In to SORA</h5>
						<Form className="col-5 row w-600 border-2px">
							<Form.Group className="mb-3" controller="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} value={email} />
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
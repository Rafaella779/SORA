import React, {useState, useEffect, useContext } from 'react'
import { Button, Form} from 'react-bootstrap'
import Swal from 'sweetalert2'
export default function TeacherLogin() {

	const [email, setemail] = useState("")
	const [password, setpassword] = useState("")

	const handleSubmit = () => {
		fetch(`${import.meta.env.VITE_BACKEND}/login/student`, {
			method: "POST",
			headers: {
                  	"Content-Type": "application/json",
                  	"authorization": `Bearer ${localStorage.getItem('t')}`
            },
			body: JSON.stringify({
				e: email,
				p: password
			})
		}).then(result => result.json()).then(res => {
			console.log(res);
			if(res.error){
				console.log(res)
				Swal.fire({
					icon: "error",
					title: "Invalid Password",
					text: `${res.error} check your details and try again`
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
					l.setItem('t', res.n);
					l.setItem('u', res.i);
					l.setItem('a', res.b);
					l.setItem('n', res.e);
					l.setItem('i', res.c);
					l.setItem('x', res.sn);
					l.setItem('b', res.si);
					l.setItem('s', res.d);
					l.setItem('o', res.ed);
					l.setItem('p', res.nu);
					l.setItem('u', res.te);
					l.setItem('m', res.bi);
					l.setItem('v', res.s);
				})
				

			}
		})
	}

	return(

		<div className="d-flex justify-content-center">
			<div className="d-flex flex-column mw-1200 w-100 gap-2">
				<h2 className="color-5 pt-serif-bold">SORA Teacher Login</h2>
				<div className="d-flex">
					
					<div className="col-7 d-flex justify-content-center align-items-center">
						<div className="d-flex flex-column w-100">
							
							<Form className="d-flex  justify-content-center flex-column p-4 w-100 b-1px">
								<Form.Group className="mb-3">
									<Form.Label>Email address</Form.Label>
									<Form.Control type="email" placeholder="Enter email" onChange={e => setemail(e.target.value)} value={email} />
								</Form.Group>
								<Form.Group className="mb-3">
									<Form.Label>Password</Form.Label>
									<Form.Control type="password" placeholder="Password" onChange={e => setpassword(e.target.value)} value={password}/>
								</Form.Group>
								<div className="d-flex justify-content-end align-items-center">
									<Button onClick={handleSubmit}>Submit</Button>
								</div>
							</Form>
						</div>
					</div>
					<div className="col-5 d-flex flex-column align-items-center justify-content-center b-1px">
						<h5 className="d-flex justify-content-center align-items-center pt-serif-bold m-0">New Here?</h5>
						<p class="light p-0  m-0"><strong className="d-flex justify-content-center align-items-center">Sign up and discover a great amount of new opportunities</strong></p>
					</div>
				</div>
			</div>
		</div>
		)
}
import React, {useState, useEffect, useContext } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { useNavigate, Outlet } from 'react-router'
import Swal from 'sweetalert2'

export default function Login(){
	

	const [formReturn, setFormReturn] = useState();
	const [headerColor, setHeaderColor] = useState("");
	
	const handleTeacher = () => {
		setFormReturn(<TeacherLogin />)
		setHeaderColor("bg-5 text-white")
	}
	const handleStudent = () => {
		setFormReturn(<StudentLogin />)
		setHeaderColor("bg-5 text-white")
	}

	return(
		<div className="d-flex gap-lg-5 justify-content-center align-items-center pt-serif-bold flex-column flex-lg-row p-5 m-3 flex-lg-row">
			<div className="d-flex justify-content-begin flex-column mw-300">
				<img src="https://img.freepik.com/premium-vector/man-sits-front-phone-that-says-logitech_1314854-10316.jpg?ga=GA1.1.272372896.1737352446&semt=ais_hybrid"/>
			</div>
		{
			(formReturn == null) ?
				<div>
					<h2 className="pt-serif-bold">Login Page</h2>
					<h3 className="d-flex justify-content-center">Are you a</h3>
					<div className="d-flex gap-1 flex-column">
						<Button onClick={handleTeacher}>Teacher</Button>
						<Button onClick={handleStudent}>Student</Button>
					</div>
				</div>
			  : 
				<div className="w-40 mt-5 h-100 b-1px ">
					<div className={`p-3 login-title ${headerColor}`}>
						<h5 className="m-0 color-5 pt-serif-bold">Log In to SORA</h5>
					</div>

					<div className="p-3">
						{formReturn}
					</div>
				</div>
			}
	</div>)
	}

function TeacherLogin() {
	let n = useNavigate()

	const [email, setemail] = useState("")
	const [password, setpassword] = useState("")

	const handleSubmit = () => {
		fetch(`https://sora-q8wl.onrender.com/login/teacher`, {
			method: "POST",
			headers: {"Content-Type": "application/json"},
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
					n('/DashboardTeacher')
				})

			}
		})
	}

	return(
    <div className="d-flex justify-content-center align-items-center">
		<div>
			<div className="justify-content-center align-items-center m-0 p-0">
					<Form className="d-flex row flex-column flex-lg-row align-items-center">
						<Form.Group className="mb-3">
							<Form.Label>Username</Form.Label>
						<InputGroup className="mb-3">
						<InputGroup.Text id="basic-addon1">@</InputGroup.Text>
							<Form.Control type="email" placeholder="Enter email" onChange={e => setemail(e.target.value)} value={email} />
						</InputGroup>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Password</Form.Label>
							<InputGroup className="mb-3">
						<InputGroup.Text id="basic-addon1">*</InputGroup.Text>
							<Form.Control type="password" placeholder="Password" onChange={e => setpassword(e.target.value)} value={password}/>
							</InputGroup>
						</Form.Group>
						<div className="d-flex justify-content-center align-items-center">
							<Button onClick={handleSubmit}>Submit</Button>
						</div>
					</Form>
			</div>
		</div>
	</div>
	)
}


function StudentLogin() {
	let n = useNavigate()

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
				console.log(res)
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
					l.setItem('t', res.n);
					l.setItem('u', res.i);
					l.setItem('a', res.b);
					l.setItem('n', res.e);
					l.setItem('i', res.c);
					l.setItem('x', res.sn);
					l.setItem('b', res.si);
					l.setItem('s', res.d);
					l.setItem('o', res.l);
					l.setItem('p', res.bi);
					l.setItem('v', res.s);
					n('/StudentDashboard')
				})
				

			}
		})
	}

	return(
	 <div className="d-flex justify-content-center align-items-center">
		<div>
			<div className="justify-content-center align-items-center m-0 p-0">
					<Form className="d-flex row flex-column flex-lg-row align-items-center">
						<Form.Group className="mb-3">
							<Form.Label>Username</Form.Label>
						<InputGroup className="mb-3">
						<InputGroup.Text id="basic-addon1">@</InputGroup.Text>
							<Form.Control type="email" placeholder="Enter email" onChange={e => setemail(e.target.value)} value={email} />
						</InputGroup>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Password</Form.Label>
							<InputGroup className="mb-3">
						<InputGroup.Text id="basic-addon1">*</InputGroup.Text>
							<Form.Control type="password" placeholder="Password" onChange={e => setpassword(e.target.value)} value={password}/>
							</InputGroup>
						</Form.Group>
						<div className="d-flex justify-content-center align-items-center">
							<Button onClick={handleSubmit}>Submit</Button>
						</div>
					</Form>
			</div>
		</div>
	</div>
	
		)
}


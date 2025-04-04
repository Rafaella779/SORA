import {useState, useEffect, useContext} from 'react';
import {Button, Form, InputGroup} from 'react-bootstrap';
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router'

export default function Register() {
	let n = useNavigate()

	const [formReturn, setFormReturn] = useState();
	const [headerColor, setHeaderColor] = useState("");

	
	const handleTeacher = () => {
		setFormReturn(<RegisterTeacher />)
		setHeaderColor("bg-5 text-white")
	}
	const handleStudent = () => {
		setFormReturn(<RegisterStudent />)
		setHeaderColor("bg-5 text-white")
	}

	return(
		<div className="d-flex gap-lg-5 justify-content-center align-items-center p-body mnh-700 navbar-border pt-serif-bold p-3 p-lg-5 flex-column flex-lg-row">
			<div className="d-flex justify-content-begin flex-column mw-400">
				<img src="https://img.freepik.com/premium-vector/two-factor-autentication-security-illustration-login-confirmation-notification-with-password-code-message-smartphone-mobile-phone-computer-app-account-shield-lock-icons-isolated_167715-3210.jpg?ga=GA1.1.272372896.1737352446&semt=ais_hybrid" className="w-100"/>
			</div>
			{
				(formReturn == null) ?
					<div>
						<h2 className="pt-serif-bold ">Register Page</h2>
						<h3 className="d-flex justify-content-center">Are you a</h3>
						<div className="d-flex gap-1 flex-column">
							<Button onClick={handleTeacher}>Teacher</Button>
							<Button onClick={handleStudent}>Student</Button>
						</div>
					</div>
					: 
					<div className="mt-5 h-100 b-1px w-100 mw-400 bg-22">
						<div className={`p-3 login-title ${headerColor}`}>
							<h5 className="m-0 color-5 pt-serif-bold">Register</h5>
						</div>
						<div className="p-3">
							{formReturn}
						</div>
					</div>
			}
			
		</div>)
	}

function RegisterStudent() {

	const [page, setPage] = useState(1);
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [email, setEmail] = useState("")
	const [fname, setfname] = useState("")
	const [lname, setlname] = useState("")
	const [birthdate, setbirthdate] = useState("")
	const [SchoolName, setSchoolName] = useState("")
	const [lrn, setlrn] = useState("")
	const [SchoolID, setSchoolID] = useState("")
	let n = useNavigate()

	const handleSubmit = () => {
		fetch(`${import.meta.env.VITE_BACKEND}/user/createUser`, {
			method: "POST",
			headers: {
                  	"Content-Type": "application/json",
                  	"authorization": `Bearer ${localStorage.getItem('t')}`
            },
			body: JSON.stringify({
				email: email,
				password: password,
				firstName: fname,
				lastName: lname,
				birthdate: new Date(birthdate),
				schoolName: SchoolName,
				LRN: lrn,
				schoolID: SchoolID,
		
				
			})
		}).then(res => res.json()).then(res => {
			if(res.error){
				console.log(res)
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
				}).then(res => {
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
					n("/logBoth")
				})

			}
		})
	}


	function p1()  {
		return (<Form.Group>
				<Form.Label>Email address</Form.Label>
				<InputGroup>
				<InputGroup.Text id="basic-addon1">@</InputGroup.Text>
				<Form.Control type="email" onChange={e => setEmail(e.target.value)} value={email}/>
				</InputGroup>
				<Form.Label>Password </Form.Label>
				<InputGroup>
				<InputGroup.Text id="basic-addon1">*</InputGroup.Text>
				<Form.Control type="password" onChange={e => setPassword(e.target.value)} value={password}/>
				</InputGroup>
				<Form.Label>First Name </Form.Label>
				<Form.Control  onChange={e => setfname(e.target.value)} value={fname}/>
				<Form.Label>Last Name </Form.Label>
				<Form.Control  onChange={e => setlname(e.target.value)} value={lname}/>
				<Form.Label>BirthDate</Form.Label>
				<Form.Control placeholder="mm/dd/yyyy"  onChange={e => setbirthdate(e.target.value)} value={birthdate}/>
		</Form.Group>)
	} 


	function p2() { 
		return (
			<Form.Group>
			<Form.Label>School Name</Form.Label>
				<Form.Control onChange={e => setSchoolName(e.target.value)} value={SchoolName}/>
				<Form.Label> LRN </Form.Label>
				<Form.Control  onChange={e => setlrn(e.target.value)} value={lrn}/>
				<Form.Label>School ID</Form.Label>
				<Form.Control onChange={e => setSchoolID(e.target.value)} value={SchoolID}/>
			</Form.Group>
		)
	}

	
		const [render, setRender] = useState(p1);

		const handlePrev = () => {
				setPage(page - 1);
				console.log("handlep")
		}

		const handleNext = () => {
			setPage(page + 1);
			console.log("handlen")

		}

	return(
		<>
			<Form>

				<div>
						{(page == 1 ? p1() : (page == 2) ? p2() : p3())}
				</div>
				<div className="d-flex gap-1 mt-3 justify-content-end">
					{(page == 1) ? <Button onClick={handleNext}>Next</Button> : <Button onClick={handlePrev}>Previous</Button>}
					{(page == 2) ? <Button onClick={handleSubmit}>Submit</Button>  : <></> }
				</div>
			</Form>
		</>
	)
}

function RegisterTeacher() {

	
	const [page, setPage] = useState(1);
	const [password, setPassword] = useState("")
	const [email, setEmail] = useState("")
	const [fname, setfname] = useState("")
	const [lname, setlname] = useState("")
	const [birthdate, setbirthdate] = useState("")
	const [SchoolName, setSchoolName] = useState("")
	const [SchoolID, setSchoolID] = useState("")
	const [employeeID, setEmployeeID] = useState("")
	const [educationalDegree, seteducationalDegree] = useState("")
	const [Count, setCount]= useState("")
	let n = useNavigate()

	const handleSubmit = () => {
		fetch(`${import.meta.env.VITE_BACKEND}/teacher/createTeacher`, {
			method: "POST",
			headers: {
                  	"Content-Type": "application/json",
                  	"authorization": `Bearer ${localStorage.getItem('t')}`
            },
			body: JSON.stringify({
				email: email,
				password: password,
				firstName: fname,
				lastName: lname,
				birthdate: new Date(birthdate),
				schoolName: SchoolName,
				schoolID: SchoolID,
				educationalDegree: educationalDegree,
				employeeID: employeeID

			})
		}).then(res => res.json()).then(res => {
			if(res.error){
				console.log(res)
				Swal.fire({
					icon: "error",
					title: "Error",
					text: `${result.error} check your details and try again`
				})
			}
			else {
				Swal.fire({
					icon: "success",
					title: "Register Success!",
					text: "Now proceeding to Login",
					timer: 1500,
					showConfirmButton: false
				}).then(res => {
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
					n('/logBoth')
				})

			}
		})
	}

	let addResearch = () => {
		if (Research != ""){
			listofResearchArray.push(listofResearch);
			setlistofResearch("");
		}
	}

	function p1()  {
		return (<Form.Group>
				<Form.Label>Email address</Form.Label>
				<InputGroup>
				<InputGroup.Text id="basic-addon1">@</InputGroup.Text>
				<Form.Control type="email" onChange={e => setEmail(e.target.value)} value={email}/>
				</InputGroup>
				<Form.Label>Password </Form.Label>
				<InputGroup>
				<InputGroup.Text id="basic-addon1">*</InputGroup.Text>
				<Form.Control type="password" onChange={e => setPassword(e.target.value)} value={password}/>
				</InputGroup>
				<Form.Label>First Name </Form.Label>
				<Form.Control  onChange={e => setfname(e.target.value)} value={fname}/>
				<Form.Label>Last Name </Form.Label>
				<Form.Control  onChange={e => setlname(e.target.value)} value={lname}/>
				<Form.Label>BirthDate</Form.Label>
				<Form.Control placeholder="mm/dd/yyyy" onChange={e => setbirthdate(e.target.value)} value={birthdate}/>
		</Form.Group>)
	} 


	

	function p2() { 
		return (
			<Form.Group className="justify-content-center">
			<Form.Label>School Name</Form.Label>
				<Form.Control onChange={e => setSchoolName(e.target.value)} value={SchoolName}/>
				
				<Form.Label>Employee ID</Form.Label>
				<Form.Control  onChange={e => setEmployeeID(e.target.value)} value={employeeID}/>

				<Form.Label>School ID</Form.Label>
				<Form.Control  onChange={e => setSchoolID(e.target.value)} value={SchoolID}/>
				
				<Form.Label>Educational Degree</Form.Label>
				<Form.Control  onChange={e => seteducationalDegree(e.target.value)} value={educationalDegree}/>
			</Form.Group>
		)
	}

	
		const [render, setRender] = useState(p1);

		const handlePrev = () => {
				setPage(page - 1);
				console.log("handlep")
		}

		const handleNext = () => {
			setPage(page + 1);
			console.log("handlen")

		}


	
	useEffect(() => {}, [])
	return(
		<>
			<Form>
				{(page == 1) ? p1() : p2()}
				<div className="d-flex gap-1 mt-3 justify-content-end">
					{(page == 1) ? <Button onClick={handleNext}>Next</Button> : <Button onClick={handlePrev}>Previous</Button>}
					{(page == 2) ? <Button onClick={handleSubmit}>Submit</Button>  : <></> }
				</div>
			</Form>
		</>
	)
}
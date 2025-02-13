import {useState, useEffect} from 'react';
import {Button, Form} from 'react-bootstrap';
import Swal from 'sweetalert2'

export default function Register() {


	const [formReturn, setFormReturn] = useState();

	
	const handleTeacher = () => {
		setFormReturn(<RegisterTeacher />)
	}
	const handleStudent = () => {
		setFormReturn(<RegisterStudent />)
	}

	return(<div className="d-flex flex-column p-5">
		{
			(formReturn == null) ?
				<>
					<h1>Register Page</h1>
					<div className="d-flex gap-1">
						<Button onClick={handleTeacher}>Teacher</Button>
						<Button onClick={handleStudent}>Student</Button>
					</div>
				</>
				: <></>
			}
			<div className="w-25 mt-5">
				{formReturn}
			</div>
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
				birthdate: new Date(),
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

	function p1()  {
		return (<Form.Group>
				<Form.Label>Username</Form.Label>
				<Form.Control onChange={(e) => {setUsername(e.target.value); console.log(username)}} value={username}/>
				<Form.Label>Email address</Form.Label>
				<Form.Control type="email" onChange={e => setEmail(e.target.value)} value={email}/>
				<Form.Label>Password </Form.Label>
				<Form.Control type="password" onChange={e => setPassword(e.target.value)} value={password}/>
		</Form.Group>)
	} 

	function p2() {
		return (<Form.Group>
				<Form.Label>First Name </Form.Label>
				<Form.Control  onChange={e => setfname(e.target.value)} value={fname}/>
				<Form.Label>Last Name </Form.Label>
				<Form.Control  onChange={e => setlname(e.target.value)} value={lname}/>
				<Form.Label>BirthDate</Form.Label>
				<Form.Control  onChange={e => setbirthdate(e.target.value)} value={birthdate}/>
			</Form.Group>)
	} 

	

	function p3() { 
		return (
			<Form.Group>
			<Form.Label>School Name</Form.Label>
				<Form.Control onChange={e => setSchoolName(e.target.value)} value={SchoolName}/>
				<Form.Label>Lrn</Form.Label>
				<Form.Control  onChange={e => setlrn(e.target.value)} value={lrn}/>
				<Form.Label>ID</Form.Label>
				<Form.Control  onChange={e => setID(e.target.value)} value={ID}/>
				<Form.Label>School ID</Form.Label>
				<Form.Control  onChange={e => setSchoolID(e.target.value)} value={SchoolID}/>
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
			<h1>Register Student</h1>
			<Form>
				{(page == 1 ? p1() : (page == 2) ? p2() : p3())}
				<div className="d-flex gap-1 mt-3">
					{(page == 1) ? <></> : <Button onClick={handlePrev}>Previous</Button>}
					{(page == 3) ? <></> : <Button onClick={handleNext}>Next</Button>}
					{(page == 3) ? <Button onClick={handleSubmit}>Submit</Button>  : <></> }
				</div>
			</Form>
		</>
	)
}

function RegisterTeacher() {

	const [page, setPage] = useState(1);

	const [password, setPassword] = useState()
	const [email, setEmail] = useState()
	const [fname, setFname] = useState()
	const [lname, setLname] = useState()
	const [birthdate, setBirthDate] = useState()
	
	const [schoolID, setschoolID] = useState()
	const [schoolName, setschoolName] = useState()
	const [position, setPosition] = useState()
	const [isAdmin, setIsAdmin] = useState()
	const [isActive, setIsActive] = useState()
	const [status, setStatus] = useState()

	const handleSubmit = () => {
		fetch(`https://sora-q8wl.onrender.com/user/createUser`, {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({
				e: username,
				p: password,
				fn: Fname,
				mn: Mname,
				ln: Lname,
				ph: Phone,
				bd: BrirthDate,
				a: Age,
				g: Gender,
				n: nationality,
				pr: Purok,
				br: Baranggay,
				dp: Department,
				ut: userType,
				ps: Position,
				ac: isAdmin,
				ad: isActive,
				st: Status,
				
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

	let p1 = <Form.Group>
				<Form.Label>Username</Form.Label>
				<Form.Control onChange={(e) => {setUsername(e.target.value); console.log("test")}} value={username}/>
				<Form.Label>Email address</Form.Label>
				<Form.Control type="email" onChange={e => setEmail(e.target.value)} value={email}/>
				<Form.Label>Password </Form.Label>
				<Form.Control type="password" onChange={e => setPassword(e.target.value)} value={password}/>
			</Form.Group>

	let p2 = <Form.Group>
				<Form.Label>FName </Form.Label>
				<Form.Control  onChange={e => setFname(e.target.value)} value={fname}/>
				<Form.Label> MName </Form.Label>
				<Form.Control  onChange={e => setMname(e.target.value)} value={mname}/>
				<Form.Label>LName </Form.Label>
				<Form.Control  onChange={e => setLname(e.target.value)} value={lname}/>
				<Form.Label>Phone</Form.Label>
				<Form.Control  onChange={e => setPhone(e.target.value)} value={phone}/>
			</Form.Group>

	let p3 = <Form.Group>
				<Form.Label>BirthDate</Form.Label>
				<Form.Control  onChange={e => setBirthDate(e.target.value)} value={birthdate}/>
				<Form.Label>Age</Form.Label>
				<Form.Control  onChange={e => setAge(e.target.value)} value={age}/>
				<Form.Label>Gender</Form.Label>
				<Form.Control  onChange={e => setGender(e.target.value)} value={gender}/>
			</Form.Group>

	let p4 = <Form.Group>
			<Form.Label>Nationality</Form.Label>
				<Form.Control onChange={e => setNationality(e.target.value)} value={nationality}/>
				<Form.Label>Purok</Form.Label>
				<Form.Control  onChange={e => setPurok(e.target.value)} value={purok}/>
				<Form.Label>Baranggay</Form.Label>
				<Form.Control  onChange={e => setBarangay(e.target.value)} value={barangay}/>
				<Form.Label>Municipality</Form.Label>
				<Form.Control  onChange={e => setMunicipality(e.target.value)} value={municipality}/>
			</Form.Group>

	let p5 = <Form.Group>
				<Form.Label>Department</Form.Label>
				<Form.Control  onChange={e => setDepartment(e.target.value)} value={department}/>
				<Form.Label>userType</Form.Label>
				<Form.Control  onChange={e => setUserType(e.target.value)} value={userType}/>
				<Form.Label>Position</Form.Label>
				<Form.Control  onChange={e => setPosition(e.target.value)} value={position}/>
				<Form.Label>isAdmin</Form.Label>
				<Form.Control  onChange={e => setIsAdmin(e.target.value)} value={isAdmin}/>
				<Form.Label>isActive</Form.Label>
				<Form.Control  onChange={e => setIsActive(e.target.value)} value={isActive}/>
				<Form.Label>Status</Form.Label>
				<Form.Control  onChange={e => setStatus(e.target.value)} value={status}/>
			</Form.Group>

		const [render, setRender] = useState(p1);
		const [pageArray, setPageArray] = useState([p1, p2, p3, p4, p5])
		const handlePrev = () => {
				setPage(page - 1);
				console.log("handlep")
		}

		const handleNext = () => {
			setPage(page + 1);
			console.log("handlen")

		}


	useEffect(() => {
		setRender (pageArray [page - 1])
	}, [page])

	return(
		<>
			<h1>Register Teacher</h1>
			<Form>
				{render}
				<div className="d-flex gap-1 mt-3">
					{(page == 1) ? <></> : <Button onClick={handlePrev}>Previous</Button>}
					{(page == pageArray.length) ? <></> : <Button onClick={handleNext}>Next</Button>}
					{(page == pageArray.length) ? <Button onClick={handleSubmit}>Submit</Button>  : <></> }
				</div>
			</Form>
		</>
	)
}

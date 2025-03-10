import {useState, useEffect, useContext} from 'react';
import {Button, Form, Card, InputGroup} from 'react-bootstrap';
import Swal from 'sweetalert2'

export default function Register() {


	const [formReturn, setFormReturn] = useState();

	
	const handleTeacher = () => {
		setFormReturn(<RegisterTeacher />)
		setHeaderColor("bg-1")
	}
	const handleStudent = () => {
		setFormReturn(<RegisterStudent />)
		setHeaderColor("bg-5 text-white")
	}

	return(
		<div className="d-flex justify-content-center align-items-center pt-serif-bold p-5">
		{
			(formReturn == null) ?
				<div className="p-5 col-6">
					<h2 className="pt-serif-bold ">Register Page</h2>
					<hr />
					<h5 className="d-flex justify-content-center">Are you a</h5>
					<div className="d-flex gap-2 mt-3 flex-column">
						<Button onClick={handleTeacher}>Teacher</Button>
						<Button onClick={handleStudent}>Student</Button>
					</div>
				</div>
			  : 
				<div className="w-40 mt-5  h-100 b-1px ">
					<div className={`p-3 login-title ${headerColor}`}>
						<h5 className="m-0 color-5 pt-serif-bold">Sign In to SORA</h5>
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
				birthdate: new Date(birthdate),
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
			<h2 className="pt-serif-bold ">Register Student</h2>
			<Form>

				<div>
						{(page == 1 ? p1() : (page == 2) ? p2() : p3())}
				</div>
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
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [email, setEmail] = useState("")
	const [fname, setfname] = useState("")
	const [lname, setlname] = useState("")
	const [birthdate, setbirthdate] = useState("")
	const [SchoolName, setSchoolName] = useState("")
	const [SchoolID, setSchoolID] = useState("")
	const [ID, setID] = useState("")
	const [isresearchTeacher, setisresearchTeacher] = useState("")
	const [isChecker, setisChecker] = useState("")
	const [numberofResearch, setnumberofResearch] = useState("")
	const [category, setcategory] = useState("")
	const [educationalDegree, seteducationalDegree] = useState("")
	const [listofResearch, setlistofResearch] = useState("")
	const [listofResearchArray, setlistofResearchArray] = useState([])
	const [Count, setCount]= useState("")

	const handleSubmit = () => {
		fetch(`https://sora-q8wl.onrender.com/teacher/createTeacher`, {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({
				email: email,
				password: password,
				firstName: fname,
				lastName: lname,
				birthdate: new Date(birthdate),
				schoolName: SchoolName,
				schoolID: SchoolID,
				ID: ID,
				isresearchTeacher: isresearchTeacher,
				isChecker: isChecker,
				numberofResearch: numberofResearch,
				category: category,
				educationalDegree: educationalDegree,
				listapprovedResearch: listofResearch.split("; ")

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

	let addResearch = () => {
		if (Research != ""){
			listofResearchArray.push(listofResearch);
			setlistofResearch("");
		}
	}

	function p1()  {
		return (
				<Form.Group>
				<Form.Label>Username</Form.Label>
				<Form.Control onChange={(e) => {setUsername(e.target.value); console.log(username)}} value={username}/>
				<Form.Label>Email address</Form.Label>
				<Form.Control type="email" onChange={e => setEmail(e.target.value)} value={email}/>
				<Form.Label>Password </Form.Label>
				<Form.Control type="password" onChange={e => setPassword(e.target.value)} value={password}/>
		</Form.Group>
		)
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
			<div className="d-flex w-100">
			<Form.Group className="justify-content-center">
			<Form.Label>School Name</Form.Label>
				<Form.Control onChange={e => setSchoolName(e.target.value)} value={SchoolName}/>
				<Form.Label> ID </Form.Label>
				<Form.Control  onChange={e => setID(e.target.value)} value={ID}/>
				<Form.Label>School ID</Form.Label>
				<Form.Control  onChange={e => setSchoolID(e.target.value)} value={SchoolID}/>
				<Form.Label>Educational Degree</Form.Label>
				<Form.Control  onChange={e => seteducationalDegree(e.target.value)} value={educationalDegree}/>
				<Form.Label>Are you A Research Teacher</Form.Label>
				<Form.Control  onChange={e => setisresearchTeacher(e.target.value)} value={isresearchTeacher}/>
				<br />
			</Form.Group>

			</div>
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
			<h2 className="pt-serif-bold">Register Teacher</h2>
			<Form>
				{(page == 1 ? p1() : (page == 2) ? p2() : p3())}
				<div className="d-flex gap-1 mt-3 justify-content-end">
					{(page == 1) ? <></> : <Button onClick={handlePrev}>Previous</Button>}
					{(page == 3) ? <></> : <Button onClick={handleNext}>Next</Button>}
					{(page == 3) ? <Button onClick={handleSubmit}>Submit</Button>  : <></> }
				</div>
			</Form>
		</>
	)
}
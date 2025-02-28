import React, {useState, useEffect, useContext} from 'react'
import { Button, Form, Container, Nav, Navbar, NavDropdown, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import Swal from 'sweetalert2'

export default function DashboardTeacher() {
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
				<Form.Label>Are you A Research Teacher</Form.Label>
				<Form.Control  onChange={e => setisresearchTeacher(e.target.value)} value={isresearchTeacher}/>
				<Form.Label>Educational Degree</Form.Label>
				<Form.Control  onChange={e => seteducationalDegree(e.target.value)} value={educationalDegree}/>
				<Form.Label>Number of Research</Form.Label>
				<Form.Control  onChange={e => setnumberofResearch(e.target.value)} value={numberofResearch}/>
				<Form.Label>List Of your Research</Form.Label>
				<Form.Control  onChange={e => setlistofResearch(e.target.value)} value={listofResearch}/>
				<Button onClick={addResearch}>Add</Button>
				<br />
			</Form.Group>

			<div className="col-4">
		
			
		<h1>Research</h1>
			{listofResearchArray.map((j, k) => {
				console.log(j)
				console.log(k)
				return <div className="d-flex">
					<p>{j}</p>
					<Button onClick={() => {
						listofResearchArray.splice(k, 1)
						setCount(Count + 1);
					}}> - </Button>
				</div>
			})}
		</div>




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
			<h1>Register Teacher</h1>
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

	let n = useNavigate()
	return(
		<div>
			<div className="d-flex w-600 h-3">	
				<div className="b-form d-flex">
					<div>
						<div className="d-flex justify-content-center">
							<StudentCard picLink="https://www.svgrepo.com/show/408476/user-person-profile-block-account-circle.svg" />
						</div>
						<div>
							<p className="m-1 p-1"> <strong>Email:</strong> {localStorage.getItem('n')}</p>
							<p className="m-1 p-1"> <strong>Name:</strong> {localStorage.getItem('t')}</p>
							<p className="m-1 p-1"> <strong>Birthdate:</strong> {new Date(localStorage.getItem('m')).toDateString()}</p>
							<p className="m-1 p-1"> <strong>SchoolID:</strong> {localStorage.getItem('b')}</p>	
							<p className="m-1 p-1"> <strong>ID:</strong> {localStorage.getItem('s')}	</p>
							<p className="m-1 p-1"> <strong>SchoolName:</strong> {localStorage.getItem('x')}</p>
							<p className="m-1 p-1"> <strong>Educational Degree:</strong> {localStorage.getItem('')}</p>
							<p className="m-1 p-1"> <strong>No. of research:</strong> {localStorage.getItem('')}</p>
						</div>
					</div>
				</div>
				<div className="d-flex">
					<p className="m-1 p-1"> <strong>List of works:</strong> {localStorage.getItem('')}</p>
					<Nav.Link onClick={() => n('/Upload')} >Upload Work</Nav.Link>
					<Nav.Link onClick={() => n('/ApproveSystem')} >Approve Work</Nav.Link>
				</div>

			</div>
		</div>

	)
}

function StudentCard({picLink, name}){
	return(<>
		<div className="p-2 d-flex align-items-center aboutUsCard h-auto ">
			<div className="d-flex">
				<img src={picLink} alt="" className="aboutUsPic" />
			</div>
			<h6 className="p-2 d-flex text-center">{name}</h6>
		</div>

	</>)
}
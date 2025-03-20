import React, {useState, useEffect, useContext} from 'react'
import { Button, Form, Container, Nav, Navbar, NavDropdown, Card, Modal, SplitButton, ButtonGroup, Table } from 'react-bootstrap'
import { useNavigate, Outlet } from 'react-router'
import Swal from 'sweetalert2'
import ViewPage from './ViewPage.jsx'

export default function DashboardTeacher() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



	let n = useNavigate()

	useEffect(() => {
            fetch(`https://sora-q8wl.onrender.com/research/getAll`, {
                  method: "POST",
                  headers: {
                  	"Content-Type": "application/json",
                  	"authorization": `Bearer ${localStorage.getItem('t')}`
                  },
                  body: JSON.stringify({
                       toFind: {
                                                                     
                       }
                  })
            }).then(result => result.json()).then(res => {
                  console.log(res)
                 
            })
  }, [])


	return(
		<div className="d-flex p-body mnh-700 navbar-border">
			<div className="d-flex flex-column flex-md-row w-100">
				<div className="b-1px flex-column p-3 col-md-4 col-lg-3">
					<div className="d-flex justify-content-center">
						<StudentCard picLink="https://www.svgrepo.com/show/408476/user-person-profile-block-account-circle.svg" />
					</div>
					<div className="d-flex flex-column p-3">
						<p className="mb-0 p-0 text-break"> <strong>Email:</strong> {localStorage.getItem('e')}</p>
						<p className="mb-0 p-0 text-break"> <strong>Name:</strong> {localStorage.getItem('n')}</p>
						<p className="mb-0 p-0 text-break"> <strong>Birthdate:</strong> {new Date(localStorage.getItem('bi')).toDateString()}</p>
						<p className="mb-0 p-0 text-break"> <strong>SchoolID:</strong> {localStorage.getItem('si')}</p>	
						<p className="mb-0 p-0 text-break"> <strong>ID:</strong> {localStorage.getItem('i')}	</p>
						<p className="mb-0 p-0 text-break"> <strong>SchoolName:</strong> {localStorage.getItem('sn')}</p>
						<p className="mb-0 p-0 text-break"> <strong>Educational Degree:</strong> {localStorage.getItem('ed')}</p>
						<p className="mb-0 p-0 text-break"> <strong>No. of research:</strong> {localStorage.getItem('nu')}</p>
						{
							(localStorage.getItem('ira') == 0) ?
								<Button className="mt-3 bg-r-2" onClick={() => n('/ApplyApproveTeacher')}>Research Reviewer Application</Button>
							:(localStorage.getItem('ira') == 1) ?
								<Button className="mt-3 bg-r-2" >Research Reviewer</Button>
							:
								<Button className="mt-3 bg-r-2" >Reviewer Status Pending</Button>
							

						}
					</div>
				</div>
				<ViewPage className="d-flex col-19 w-100"/>
			</div>
		</div>

	)
}
function ModalChange({show, setShow}){
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
  const [page, setPage] = useState(1);
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [email, setEmail] = useState("")
	const [fname, setfname] = useState("")
	const [lname, setlname] = useState("")

  	return(
	<>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="border-2px bg-3">
          <Modal.Title>Account Information</Modal.Title>
        </Modal.Header>
        <div className="border-2px bg-3">
        	<Form.Group>
        	<Form.Label>Username</Form.Label>
			<Form.Control onChange={(e) => {setUsername(e.target.value); console.log(username)}} value={username}/>
			<Form.Label>Email address</Form.Label>
			<Form.Control type="email" onChange={e => setEmail(e.target.value)} value={email}/>
			<Form.Label>Password </Form.Label>
			<Form.Control type="password" onChange={e => setPassword(e.target.value)} value={password}/>
			<Form.Label>First Name </Form.Label>
			<Form.Control  onChange={e => setfname(e.target.value)} value={fname}/>
			<Form.Label>Last Name </Form.Label>
			<Form.Control  onChange={e => setlname(e.target.value)} value={lname}/>
			</Form.Group>
        </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
   )
}

 

function StudentCard({picLink, name}){
	return(<>
		<div className="p-0 m-0 d-flex align-items-center aboutUsCard ">
			<div className="d-flex p-0 m-0">
				<img src={picLink} alt="" className="dashboardPic m-0" />
			</div>
			<h6 className="p-2 d-flex text-center">{name}</h6>
		</div>

	</>)
}
import React, {useState, useEffect, useContext} from 'react'
import { Button, Form, Container, Nav, Navbar, NavDropdown, Card, Modal, SplitButton, ButtonGroup, Table } from 'react-bootstrap'
import { useNavigate, Outlet } from 'react-router'
import Swal from 'sweetalert2'

export default function DashboardTeacher() {
	const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

	let n = useNavigate()


	return(
		<div className="d-flex">
			<ModalChange show={show} setShow={setShow}/>

			<div className="d-flex w-600 h-3 col-8">	
				<div className="border-2px d-flex bg-3">
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
							<p className="m-1 p-1"> <strong>List of works:</strong> {localStorage.getItem('')}</p>
						</div>
					</div>
				</div>

				<div className="d-flex col-4">
					<Nav.Link onClick={() => n('/Upload')} >Upload Work</Nav.Link>
				</div>

			</div>
			<div className="d-flex">
				 <Button variant="secondary" onClick={handleShow}>Change</Button>
			</div>
			<Outlet/>

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
		<div className="p-2 d-flex align-items-center aboutUsCard h-auto ">
			<div className="d-flex">
				<img src={picLink} alt="" className="aboutUsPic" />
			</div>
			<h6 className="p-2 d-flex text-center">{name}</h6>
		</div>

	</>)
}
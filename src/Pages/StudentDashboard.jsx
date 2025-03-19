import React, {useState, useEffect, useContext} from 'react'
import { Button, Form, Card, Modal, SplitButton, ButtonGroup, Table } from 'react-bootstrap'
import { useNavigate, Outlet } from 'react-router'
import Swal from 'sweetalert2'
import Studentsview from './Studentview.jsx'
import Inbox from './Inboxmail.jsx'


export default function StudentDashboard() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

	let n = useNavigate()
	return(
		<div className="d-flex m-0">
			<Modal  show={show} onHide={handleClose}>
        		<Modal.Header closeButton>
          		<Modal.Title>Mail</Modal.Title>
        		</Modal.Header>
         	
         	<Modal.Body>Hello you got mail, would you like to check?</Modal.Body>
	         
	         <Modal.Footer>
	            <Button variant="secondary" onClick={handleClose}>
	            	No
	          	</Button>
		         <Button variant="primary" onClick={() => n('/Inbox')}>
		         	Yes
		         </Button>
	         </Modal.Footer>
      	</Modal>
			<div className="d-flex flex-column flex-md-row w-100">
				<div className="b-full flex-column p-3 col-md-4 col-lg-2">
					<div className="d-flex justify-content-center">
						<StudentCard picLink="https://www.svgrepo.com/show/408476/user-person-profile-block-account-circle.svg" />
					</div>
					<div className="d-flex flex-column p-3">
						<p className="m-0 p-0 text-break"><strong>Email:</strong> {localStorage.getItem('e')}</p>
						<p className="m-0 p-0 text-break"><strong>Name:</strong> {localStorage.getItem('n')}</p>
						<p className="m-0 p-0 text-break"><strong>Birthdate:</strong> {new Date(localStorage.getItem('bi')).toDateString()}</p>
						<p className="m-0 p-0 text-break"><strong>LRN:</strong> {localStorage.getItem('l')}</p>
						<p className="m-0 p-0 text-break"><strong>SchoolID:</strong> {localStorage.getItem('si')}</p>	
						<p className="m-0 p-0 text-break"><strong>SchoolName:</strong> {localStorage.getItem('sn')}</p>
						{/*<Button className="mt-3	" onClick={() => n('/Upload')}>Upload</Button>*/}
					</div>
				</div>
				<div>
				{/*<Button variant ="light" onClick={() => n('/Inbox')}>
						<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-box-seam" viewBox="0 0 16 16">
						  <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"/>
						</svg>
						Inbox
						</Button>*/}

						
				</div>

				<div className="w-100 b-right b-top b-bottom">
				
					<Studentsview />	
				</div>
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
		<div className="p-0 m-0 d-flex align-items-center aboutUsCard  ">
			<div className="d-flex p-0 m-0">
				<img src={picLink} alt="" className="dashboardPic m-0" />
			</div>
			<h6 className="p-2 d-flex text-center">{name}</h6>

		</div>

	</>)
}




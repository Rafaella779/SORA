import React, {useState, useEffect, useContext } from 'react'
import { Button, Form, Container, Nav, Navbar, NavDropdown, Card, Table, InputGroup, Modal } from 'react-bootstrap'
import {useNavigate} from 'react-router'
import Swal from 'sweetalert2'

export default function Inbox() {

      const [senderId, setsenderId] = useState("")
      const [receiveId, setreceiveId] = useState("")
      const [researchId, setresearchId] = useState("")
      const [message, setmessage] = useState("")
      let n = useNavigate()
  
      useEffect(() => {
      	fetch(`https://sora-q8wl.onrender.com/mail`, {
                  method: "GET",
                  headers: {"Content-Type": "application/json"},
                  /*body: JSON.stringify({
                       toFind: {
                       	title: submit
                       }
                  }) */
                  method: "POST",
                  headers: {"Content-Type": "application/json"},
                  body: JSON.stringify({
                       toFind: {
                        _id: params.id
                       }
                  })
            }).then(result => result.json()).then(res => {
                
                console.log(res)
                setTableData(res.map(x => {
                    return(
                          <tr onClick={() => n(`/Inboxmail/${x._id}`)}>
                                <td>{x.senderId}</td>
                                <td>{x.receiveId}</td>
                                <td>{x.researchId}</td>
                                <td>{x.message}</td>
                          </tr>
                    )
                  })
                )  
            })
      }, [])

 const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


return (

	<div className="d-flex p-4 h-1000 flex-lg-row">
	

		<div className="col-2 b-form1">
	 
		 	<div>
		 		
		 	</div>
		 	<div className="justify-content-center h-150 d-flex b-form2 gap-4 p-5">

		 		<h1 className="cinzel-decorative"> SORA </h1>
		 		<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
				  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
				</svg>
				

				</div>	

				<div className="d-flex justify-content-center flex-column">
					<Button variant="light" size="lg"> All </Button>	
					<Button variant="light" size="lg"> Important </Button>	
					<Button variant="light" size="lg"> Archive </Button>

				      <Modal  show={show} onHide={handleClose}>
				        <Modal.Header closeButton>
				          <Modal.Title>Checking Request</Modal.Title>
				        </Modal.Header>
				        <Modal.Body>Are you availble for checking </Modal.Body>
				        <Modal.Footer>
				          <Button variant="secondary" onClick={handleClose}>
				            No
				          </Button>
				          <Button variant="primary" onClick={() => n('/teacher/ApproveSystem')}>
				            Yes
				          </Button>
				        </Modal.Footer>
				      </Modal>
		    
				</div>
		</div>

		<div className="col-9 b-form1 flex-column">

			<Table>
				<thead>
			        <tr>
				        <th>Sender</th>
				        <th>Receiver</th>
				        <th>Research</th>
				        <th>Message</th>
			        </tr>
			    </thead>

			    <tbody>
					{tableData}
				</tbody>
    		</Table>
		</div>
				
		      
	</div>

	)



}

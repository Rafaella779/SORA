import React, {useState, useEffect, useContext } from 'react'
import { Button, Form, Container, Nav, Navbar, NavDropdown, Card } from 'react-bootstrap'
import Swal from 'sweetalert2'
export default function ContactUs() {
	

	return ( 
		<div>
			<div>
				<div>
						<div>
							<div className="d-flex maxw-100 h-3">
								<div className="border-2px">
									<div>
										<div>
											<StudentCard picLink="https://www.svgrepo.com/show/343494/profile-user-account.svg" />
										</div>
										<div>
											<h6>Username</h6>
										</div>
										<div>
											<h6>Name</h6>
										</div>
										<div>
											<h6>Email</h6>
										</div>
										<div>
											<h6>Password</h6>
										</div>
										<div>
											<h6>____________________</h6>
										</div>
										<div>
											<h6>School Name</h6>
										</div>
										<div>
											<h6>School ID</h6>
										</div>
										<div>
											<h6>ID</h6>
										</div>
										<div>
											<h6>LRN</h6>
										</div>
										<div>
											<h6>Birthdate</h6>
										</div>
									</div>
							</div>
							<div className="d-flex text-center">
								<div>
									<h4>Upload Work</h4>
									  <Nav.Link href="Upload">Upload</Nav.Link>
								 </div>
								 <div className="maxw-100 justify-content-center">
									<h4>Approve Work</h4>
									  <Nav.Link href="ApproveSystem">Approve</Nav.Link>
								 </div>
							 </div>
						</div>
					</div>
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
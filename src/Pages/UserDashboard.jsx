import React, {useState, useEffect, useContext } from 'react'
import { Button, Form, Container, Nav, Navbar, NavDropdown, Card } from 'react-bootstrap'
import Swal from 'sweetalert2'

export default function UserDashboard() {
	return(
		<div>
				<div className="d-flex w-600 h-3">
					<div className="b-form d-flex">
					<div>
						<div>
							<StudentCard picLink="https://www.svgrepo.com/show/408476/user-person-profile-block-account-circle.svg" />
						</div>
						<div>
							<p className="m-1 p-1"> <strong>Email</strong> {localStorage.getItem('n')}	</p>
							<p className="m-1 p-1"> <strong>Name</strong> {localStorage.getItem('t')}	</p>
							<p className="m-1 p-1"> <strong>Birthdate</strong> {new Date(localStorage.getItem('m')).toDateString()}</p>
							<p className="m-1 p-1"> <strong>LRN</strong> {localStorage.getItem('o')}</p>
							<p className="m-1 p-1"> <strong>SchoolID</strong> {localStorage.getItem('b')}</p>	
							<p className="m-1 p-1"> <strong>ID</strong> {localStorage.getItem('s')}	</p>
							<p className="m-1 p-1"> <strong>SchoolName</strong> {localStorage.getItem('x')}</p>	
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
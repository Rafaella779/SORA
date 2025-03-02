import React, {useState, useEffect, useContext} from 'react'
import { Button, Form, Nav, Navbar, NavDropdown, Card, ButtonGroup, SplitButton, Table, Container } from 'react-bootstrap'
import { useNavigate, Outlet } from 'react-router'
import Swal from 'sweetalert2'

export default function DashboardTeacher() {
	let n = useNavigate()
	return(
		<div className="d-flex ">
			<div className="d-flex">
				
					
				<div className="b-1px d-flex flex-column mw-300">
					<div className="d-flex justify-content-center">
						<StudentCard picLink="https://www.svgrepo.com/show/408476/user-person-profile-block-account-circle.svg" />
					</div>
					<div className="d-flex flex-column p-3">
						<p className="mb-1 p-0 text-break"> <strong>Email:</strong> {localStorage.getItem('n')}</p>
						<p className="mb-1 p-0 text-break"> <strong>Name:</strong> {localStorage.getItem('t')}</p>
						<p className="mb-1 p-0 text-break"> <strong>Birthdate:</strong> {new Date(localStorage.getItem('m')).toDateString()}</p>
						<p className="mb-1 p-0 text-break"> <strong>SchoolID:</strong> {localStorage.getItem('b')}</p>	
						<p className="mb-1 p-0 text-break"> <strong>ID:</strong> {localStorage.getItem('s')}	</p>
						<p className="mb-1 p-0 text-break"> <strong>SchoolName:</strong> {localStorage.getItem('x')}</p>
						<p className="mb-1 p-0 text-break"> <strong>Educational Degree:</strong> {localStorage.getItem('')}</p>
						<p className="mb-1 p-0 text-break"> <strong>No. of research:</strong> {localStorage.getItem('')}</p>
					</div>
				</div>

				<Outlet/>
			</div>
		</div>

	)
}

function StudentCard({picLink, name}){
	return(<>
		<div className="p-0 m-0 d-flex align-items-center aboutUsCard ">
			<div className="d-flex p-0 m-0">
				<img src={picLink} alt="" className="aboutUsPic m-0" />
			</div>
			<h6 className="p-2 d-flex text-center">{name}</h6>
		</div>

	</>)
}
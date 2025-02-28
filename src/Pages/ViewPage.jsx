import React, {useState, useEffect, useContext} from 'react'
import { Button, Form, Nav, Navbar, NavDropdown, Card, ButtonGroup, SplitButton, Table, Container } from 'react-bootstrap'
import { useNavigate, Outlet } from 'react-router'
import Swal from 'sweetalert2'

export default function ViewPage() {
	let n = useNavigate()
	return(
		<div>
			<div>
				<div>        
		         	<div className="w-100 p-1 b-1px">
		         		<div className="w-100">
			         		<p className="m-0 p-0"> <strong>Title:</strong>The innovation of Miguel</p>
			         		<p className="m-0 p-0"> <strong>Author:</strong>Miguel Silv</p>
			         		<p className="m-0 p-0"> <strong>Abstract:</strong>dhsgwyfgb nsejrtygbh nqvfeag</p>
			         	</div>
			         	<div className="d-flex justify-content-end">
	             			<Button onClick={() => n('ApproveSystem')}>View</Button>
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
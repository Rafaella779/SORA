import React, { useEffect } from 'react' 
import {Nav, Navbar, Container, Button, Form, NavDropdown} from 'react-bootstrap';                                
import { useNavigate, Outlet } from 'react-router'


export default function LogOut(){
	let n = useNavigate()
	localStorage.clear();
	useEffect(() => {n('/')}, [])

	return(
	 		<div>
				
			</div>		  
		)
}


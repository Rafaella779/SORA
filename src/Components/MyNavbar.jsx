import {Nav, Navbar, Container, Button, Form, NavDropdown} from 'react-bootstrap';
import { Outlet, useNavigate} from 'react-router'

export default function MyNavbar(){
	let n = useNavigate()
	return(
		<>
			<Navbar expand="lg">
				<Container fluid>
					<Navbar.Brand href="#" className="cinzel-decorative">SORA</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
					<Nav className="me-auto my-2 my-lg-0 w-100" style={{ maxHeight: '100px' }} navbarScroll>
					<div className="d-flex justify-content-between w-100 flex-column flex-lg-row">
						<div className="d-flex flex-column flex-lg-row">
					    	<Nav.Link  onClick={() => n('/')} >Home</Nav.Link>
					    	<Nav.Link  onClick={() => n('/AboutUs')} >About Us</Nav.Link>
					    	<Nav.Link  onClick={() => n('/ContactUs')} >Contact Us</Nav.Link>

					    </div>
<<<<<<< HEAD
					    <div className="d-flex">
					    	<Nav.Link onClick={() => n('/LogBoth')} >Log In</Nav.Link>
=======
					    <div className="d-flex flex-column flex-lg-row">
					    	<Nav.Link onClick={() => n('/logBoth')} >Log In</Nav.Link>

>>>>>>> 5bfc10839d5b3f55afa830d0fecff54de0ca7880
					    	<Nav.Link onClick={() => n('/RegisterT')} >Register</Nav.Link>
					    </div>
					</div>
				    </Nav>
				    </Navbar.Collapse>
				</Container>
			</Navbar>
			<div className="">
				<Outlet />
			</div>

		</>

	)
}

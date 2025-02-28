
import {Nav, Navbar, Container, Button, Form, NavDropdown} from 'react-bootstrap';

import { Outlet, useNavigate} from 'react-router'


export default function MyNavbar(){
	let n = useNavigate()
	return(
		<div>

				<Navbar className="border-3px">
			      <Container fluid>
			        <Navbar.Brand href="#">SORA</Navbar.Brand>
			        <Navbar.Toggle aria-controls="navbarScroll" />
			        <Navbar.Collapse id="navbarScroll">
			          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
			            <Nav.Link href="homepage">Home</Nav.Link>
			            <Nav.Link href="UserDashboard">Dashboard</Nav.Link>
			            <Nav.Link href="AboutUs">About Us</Nav.Link>
			            <Nav.Link href="ContactUs">Contact Us</Nav.Link>
			        </Nav>
				          <Form className="d-flex gap-3">
                    <Nav.Link href="LogIn">LogIn</Nav.Link>
                    <Nav.Link href="registert">Register</Nav.Link>
                    <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                    <Button>Search</Button>
			           </Form>
               </Navbar.Collapse>
             </Container>
			    </Navbar>
			    <Outlet />

			<Navbar expand="lg">
				<Container fluid>
					<Navbar.Brand href="#" className="cinzel-decorative">SORA</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
					<Nav className="me-auto my-2 my-lg-0 w-100" style={{ maxHeight: '100px' }} navbarScroll>
					<div className="d-flex justify-content-between w-100">
						<div className="d-flex">
					    	<Nav.Link  onClick={() => n('/')} >Home</Nav.Link>
					    	<Nav.Link  onClick={() => n('/AboutUs')} >About Us</Nav.Link>
					    	<Nav.Link  onClick={() => n('/ContactUs')} >Contact Us</Nav.Link>

					    	<Nav.Link  onClick={() => n('/UserDashboard')} >Dashboard</Nav.Link>
					    	<Nav.Link  onClick={() => n('/StudentLogin')} >Student</Nav.Link>

					    	<Nav.Link onClick={() => n('/Setting')} >Setting</Nav.Link>

					    </div>
					    <div className="d-flex">
					    	<Nav.Link onClick={() => n('/logIn')} >Log In</Nav.Link>
					    	<Nav.Link onClick={() => n('/RegisterT')} >Register</Nav.Link>
					    </div>
					</div>
				    </Nav>
				    </Navbar.Collapse>
				</Container>
			</Navbar>
			<Outlet />

		</div>
	)
}

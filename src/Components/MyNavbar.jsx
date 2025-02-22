import {Nav, Navbar, Container, Button, Form, NavDropdown} from 'react-bootstrap';
import {Outlet} from 'react-router';

export default function MyNavbar(){
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
		</div>
	)
}
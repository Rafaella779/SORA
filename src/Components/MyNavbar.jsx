import {Nav, Navbar, Container, Form, Button} from 'react-bootstrap';
import {Outlet} from 'react-router';

export default function MyNavbar() {
	return(
		<div className="border-3px">
				<Navbar>
			      <Container fluid>
			        <Navbar.Brand href="#">SORA</Navbar.Brand>
			        <Navbar.Toggle aria-controls="navbarScroll" />
			        <Navbar.Collapse id="navbarScroll">
			          <Nav
			            className="me-auto my-2 my-lg-0"
			            navbarScroll
			          >
			            <Nav.Link href="#action1">Account</Nav.Link>
			            <Nav.Link href="#action2">Home</Nav.Link>
			            <Nav.Link href="#action3">Features</Nav.Link>
			            <Nav.Link href="#action4">Help & Support</Nav.Link>
			            <Nav.Link href="#action5">Setting</Nav.Link>
			            <Nav.Link href="#action6">About Us</Nav.Link>
			            <Nav.Link href="#action7">Contact Us</Nav.Link>
			          </Nav>
				          <Form className="d-flex gap-3">
				          <Nav.Link href="#action8">LogOut</Nav.Link>
			            <Form.Control
			              type="search"
			              placeholder="Search"
			              className="me-2"
			              aria-label="Search"
			            />
			            <Button>Search</Button>
			          </Form>
			        </Navbar.Collapse>
			      </Container>
			    </Navbar>
		</div>
	)
}
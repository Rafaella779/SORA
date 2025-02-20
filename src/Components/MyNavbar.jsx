import {Nav, Navbar, Container, Button, Form} from 'react-bootstrap';
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
			            <Nav.Link href="#action2">Home</Nav.Link>
			            <Nav.Link href="#action3">Features</Nav.Link>
			            <Nav.Link href="#action4">Help & Support</Nav.Link>
			            <Nav.Link href="#action6">About Us</Nav.Link>
			            <Nav.Link href="#action7">Contact Us</Nav.Link>
			        </Nav>
				          <Form className="d-flex gap-3">
                    <Nav.Link href="#action8">LogIn</Nav.Link>
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
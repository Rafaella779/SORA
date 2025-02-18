import {Nav, Navbar, Container} from 'react-bootstrap';
import {Outlet} from 'react-router';

export default function MyNavbar() {
	return(
		<div>
			<Navbar expand="lg">
				<Container fluid>
					<Navbar.Brand href="#">SORA</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
					<Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
				    	<Nav.Link href="#action1">Account</Nav.Link>
				    	<Nav.Link href="#action2">Mail</Nav.Link>
				    	<Nav.Link href="#action3">Bookmarked</Nav.Link>
				    	<Nav.Link href="#action4">Library</Nav.Link>
				    	<Nav.Link href="#action5">History</Nav.Link>
				    	<Nav.Link href="About us">
				    	About us
				    	</Nav.Link>
				    	</Nav>
				    </Navbar.Collapse>
				</Container>
			</Navbar>
			<Outlet />
		</div>
	)
}
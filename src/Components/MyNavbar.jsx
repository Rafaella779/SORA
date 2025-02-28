import { Nav, Navbar, Container} from 'react-bootstrap'
import { Outlet, useNavigate} from 'react-router'

export default function MyNavbar(){
	let n = useNavigate()
	return(
		<div>
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
					    	<Nav.Link  onClick={() => n('/DashboardTeacher')} >DashTeacher</Nav.Link>
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

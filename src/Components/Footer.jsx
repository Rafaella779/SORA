import { Container, Row, Col, Stack, Image, Nav, NavLink } from 'react-bootstrap';
import { Outlet, useNavigate} from 'react-router'

  function Footer() {

      let n = useNavigate()
  return(
    <footer>
      <container fluid className=" p-0 mt-3 flex-column flex-lg-row">
        <Row className="bg-5 text-white p-4">
          <Col className="mx-5">
            <Stack>
              <Image 
              src="data:image/png;base64,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" 
              alt="company logo"
              rounded
              width={150}
              height={150} 
              />
              <h2>SORA</h2>
              <p>Website tagline hare!</p>
            </Stack>
          </Col>
          <Col>
            <Nav className="flex-column fs-5">
              <h4>Useful Links</h4>
              <Nav.Link  className="text-white" onClick={() => n('/')} >Home</Nav.Link>
              <Nav.Link  className="text-white" onClick={() => n('/AboutUs')} >About Us</Nav.Link>
              <Nav.Link className="text-white" onClick={() => n('/logBoth')} >Log In</Nav.Link>
              <Nav.Link className="text-white" onClick={() => n('/RegisterT')} >Register</Nav.Link>
            </Nav>
          </Col>
          <Col>
           <h4>Contact Us</h4>
           <p>reanpaclibar@gmail.com</p>
           <p>Phone: 09634112627</p>
          </Col>
        </Row>
      </container>
      <Outlet />
    </footer>
    )

  }

export default Footer; 

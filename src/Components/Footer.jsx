import {Nav, Navbar, Container, Button, Form, NavDropdown, Card} from 'react-bootstrap';
import { Outlet, useNavigate} from 'react-router'

export default function Footer() {
  return (
    <Card className="me-auto my-2 my-lg-0 w-100" style={{ maxHeight: '100px' }} navbarScroll>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go away</Button>
      </Card.Body>
    </Card>
  );
}

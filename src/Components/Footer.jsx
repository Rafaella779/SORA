import {Container, Nav} from 'react-bootstrap';
import { Outlet, useNavigate} from 'react-router'

  export default function Footer() {

  let n = useNavigate()
  return(
    <div className="align-items-end bg-12 mh-100 bg-17">
      <div className="d-flex p-2">
        <div className="d-flex col align-items-center flex-column">
          <h5 className="d-flex cinzel-decorative">SORA</h5>
          <p>Google Scholar provides a simple way to broadly search for scholarly literature. Search across a wide variety of disciplines and sources.</p>
        </div>
        <div className="d-flex align-items-center col flex-column">
          <h5 className="d-flex justify-content-center">Useful Links</h5>
          <Nav.Link  onClick={() => n('/')} >Home</Nav.Link>
          <Nav.Link  onClick={() => n('/AboutUs')} >About Us</Nav.Link>
          <Nav.Link  onClick={() => n('/ContactUs')} >Contact Us</Nav.Link>
        </div>
        <div className="d-flex align-items-center col flex-column">
          <h5 className="d-flex justify-content-center">Contact Us</h5>
          <p>gillydecastro@gmail.com</p>
          <p>09090000000</p>
          <p>Gilly Jean De Castro</p>
          <p>Tublijon Juban Sorsogon</p>
        </div>
      </div>
          <div className="d-flex bg-19 line justify-content-center">
            <h6>Copyright 2024-2025</h6>
          </div>
    </div>
    )
  } 

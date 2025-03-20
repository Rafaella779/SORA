import {Container, Nav} from 'react-bootstrap';
import { Outlet, useNavigate} from 'react-router'

  export default function Footer() {

  let n = useNavigate()
  return(
    <div className="align-items-end bg-17 min-height flex-column flex-lg-row">
	      <div className="d-flex p-2 ">
	        <div className="d-flex col align-items-center flex-column gap-0">
	          <h5 className="d-flex cinzel-decorative"><strong>SORA</strong></h5>
	          <p>SORA provides a simple way to broadly search for local literature. Search across a wide variety of disciplines and sources.</p>
	        </div>
	        <div className="d-flex align-items-center col flex-column">
	          <h5 className="d-flex justify-content-center  pt-serif-bold">Useful Links</h5>
	          <Nav.Link  onClick={() => n('/')} >Home</Nav.Link>
	          <Nav.Link  onClick={() => n('/AboutUs')} >About Us</Nav.Link>
	          <Nav.Link  onClick={() => n('/ContactUs')} >Contact Us</Nav.Link>
	        </div>
	        <div className="d-flex align-items-center col gap-0 flex-column">
	          <h5 className="d-flex justify-content-center pt-serif-bold">Contact Us</h5>
	          <p>gillydecastro@gmail.com</p>
	          <p>09634112627</p>
	          <p>Gilly Jean De Castro</p>
	          <p>Tublijon Juban Sorsogon</p>
	        </div>
	    </div>
	        <div className="d-flex bg-19 line gap-0 justify-content-center">
	           <h6 className="pt-serif-bold ">Copyright 2024-2025</h6>
	        </div>
    </div>
    )
  } 
import {Container, Nav} from 'react-bootstrap';
import { Outlet, useNavigate} from 'react-router'

  export default function Footer() {

  let n = useNavigate()
  return(
    <div className="align-items-center bg-17 d-flex flex-column">
	      <div className="d-flex p-4 flex-column flex-lg-row gap-md-5 ">
	        <div className="d-flex col  flex-column">
	          <h3 className="text-left jacques-francois-regular"><strong>SORA</strong></h3>
	          <p className="text-justify">SORA provides a simple way to broadly search for local literature. Search across a wide variety of disciplines and sources.</p>
	        </div>
	        <div className="d-flex  col flex-column mb-3">
	          <h3 className="d-flex text-left  jacques-francois-regular "><strong>Useful Links</strong></h3>
	          <Nav.Link className="text-left" onClick={() => n('/')} >Home</Nav.Link>
	          <Nav.Link className="text-left" onClick={() => n('/AboutUs')} >About Us</Nav.Link>
	          <Nav.Link className="text-left" onClick={() => n('/Upload')} >Upload work</Nav.Link>
	        </div>
	        <div className="d-flex  col flex-column mb-3">
	          <h3 className="d-flex text-left jacques-francois-regular  "><strong>Contact Us</strong></h3>
	          <h6 className="pt-serif-regular m-0 text-left"> Gilly Jean De Castro</h6>
	          <h6 className="pt-serif-regular m-0 text-left"> gillydecastro@gmail.com</h6>
	          <h6 className="pt-serif-regular m-0 text-left"> 09634112627</h6>
	          <h6 className="pt-serif-regular m-0 text-left"> Tublijon Juban Sorsogon</h6>
	        </div>
	    </div>
	    <div className="d-flex line justify-content-center bg-22 pt-serif-regular text-gray">
	        <h6>Copyright&copy; &nbsp;</h6>
					<h6>2024-2025 SORA</h6>
	        </div>
    </div>
    )
  } 
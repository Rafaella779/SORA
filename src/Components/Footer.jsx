import {Container, Nav} from 'react-bootstrap';
import { Outlet, useNavigate} from 'react-router'

  export default function Footer() {

  let n = useNavigate()
  return(
    <div className="align-items-end bg-17 flex-column">
	      <div className="d-flex p-2 flex-column flex-lg-row">
	        <div className="d-flex col align-items-center flex-column">
	          <h5 className="d-flex pt-serif-regular f-20"><strong>SORA</strong></h5>
	          <p className="text-center">SORA provides a simple way to broadly search for local literature. Search across a wide variety of disciplines and sources.</p>
	        </div>
	        <div className="d-flex align-items-center col flex-column">
	          <h5 className="d-flex justify-content-center  pt-serif-bold f-20">Useful Links</h5>
	          <Nav.Link  onClick={() => n('/')} >Home</Nav.Link>
	          <Nav.Link  onClick={() => n('/AboutUs')} >About Us</Nav.Link>
	          <Nav.Link  onClick={() => n('/Upload')} >Upload work</Nav.Link>
	        </div>
	        <div className="d-flex align-items-center col flex-column">
	          <h5 className="d-flex justify-content-center pt-serif-bold f-20">Contact Us</h5>
	          <p>gillydecastro@gmail.com</p>
	          <p>09634112627</p>
	          <p>Gilly Jean De Castro</p>
	          <p>Tublijon Juban Sorsogon</p>
	        </div>
	    </div>
	    <div className="d-flex line justify-content-center bg-18">
	        <h6 className="pt-serif-bold ">Copyright</h6>
	        	<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-c-circle" viewBox="0 0 16 16">
  					<path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512"/>
				</svg>
					<h6>2024-2025 SORA</h6>
	        </div>
    </div>
    )
  } 
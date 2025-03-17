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
              <p>Students' Online Research Archive</p>
              <p>Repositories of online reacher paper!</p>
            </Stack>
          </Col>
          <Col>
            <Nav className="flex-column fs-5">
              <h4>Useful Links</h4>
              <Nav.Link  className="text-white" onClick={() => n('/')} >Home</Nav.Link>
              <Nav.Link className="text-white" onClick={() => n('/logBoth')} >Log In</Nav.Link>
              <Nav.Link className="text-white" onClick={() => n('/RegisterT')} >Register</Nav.Link>
            </Nav>
          </Col>
          <Col>
           <h4>Contact Us</h4>
           <p>reanpaclibar@gmail.com</p>
           <p>Phone: 09634112627</p>
           <div className="d-flex gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-twitch" viewBox="0 0 16 16">
            <path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142z"/>
            <path d="M11.857 3.143h-1.143V6.57h1.143zm-3.143 0H7.571V6.57h1.143z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-discord" viewBox="0 0 16 16">
            <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
          </svg>
       </div>
          </Col>
        </Row>
      </container>
      <Outlet />
    </footer>
    )
  }

export default Footer; 

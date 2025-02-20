import {Form, Container, Button, Nav} from 'react-bootstrap'
import {Outlet} from 'react-router'

export default function Sidebar(){
	return(
		<div className="d-flex">
			<div className="d-flex border-3px col-1">
						<div className="col">
							<h4>Hello Admin!</h4>	
							<div className="d-flex">
								<div>
									<Nav.Link href="#action1">Account</Nav.Link>
								</div>				
						</div>
						<div className="d-flex ">
							<div>
								<Nav.Link href="#action1">Email</Nav.Link>
							</div>
						</div>
						<div className="d-flex ">
							<div>
								<Nav.Link href="#action1">Bookmarked</Nav.Link>
							</div>
						</div>
						<div className="d-flex ">
							<div>
								<Nav.Link href="#action1">Library</Nav.Link>
							</div>
						</div>
						<div className="d-flex">
							<div>
								<Nav.Link href="#action1">Settings</Nav.Link>
							</div>
						</div>

				    </div>
				</div>
				<div className="d-flex border-3px w-100 align-text-center gap-5">
					<div>

					</div>				
				</div>
				<Outlet />
			</div>

	)
}
import React, {useState, useEffect, useContext } from 'react'
import { Button, Form, Container, Nav, Navbar, NavDropdown, Card } from 'react-bootstrap'
import Swal from 'sweetalert2'
export default function ContactUs() {

	const [email, setEmail] = useState("")
	const [Name, setName] = useState("")
	const [phone, setPhone] = useState("")
	const [Message, setMessage] = useState("")

	const handleSubmit = () => {
		fetch(`https://sora-q8wl.onrender.com/user/createUser`, {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({
				e: email,
				n: Name,
				ph: phone,
				m: Message,
				
			})
		}).then(result => result.json()).then(result => {
			if(result.error){
				console.log(result)
				Swal.fire({
					icon: "error",
					title: "invalid Credentials",
					text: `${res.error} check your details and try again`
				})
			}
			else {
				Swal.fire({
					icon: "success",
					title: "Register Success!",
					timer: 1500,
					showConfirmButton: false
				}).then(result => {
					let l = localStorage;
					console.log(res);
					l.setItem('t', res.t);
					l.setItem('u', res.t);
					l.setItem('a', res.t);
					l.setItem('n', res.t);
				})

			}
		})
	}

	return ( 
		<div>
			<div>
				<div>
					<h3 className="d-flex justify-content-center align-items-center">Contact us</h3>
					<p className="d-flex justify-content-center align-items-center">SORA is ready to provide the rigth solution according to your needs.</p>
				</div>
			</div>
			<div>
				<div className="d-flex">
					<div className="border-2px col">
						<h4>Get In Touch</h4>
						<p>Get in touch and let us know how we can help.</p>
						<div className="d-flex gap-5">
							<div>
								<StudentCard picLink="https://www.svgrepo.com/show/472750/phone.svg" name="Phone" item="09273411314"/>
							</div>
							<div>
								<StudentCard picLink="https://tse4.mm.bing.net/th?id=OIP.SV72EbhM23iKCGSWnYEwRAHaHa&pid=Api&P=0&h=220" name="Email" item="gillyjeand@gmail.com"/>
							</div>
						</div>
						<div className="d-flex gap-5">
							<div>
								<StudentCard picLink="https://up.yimg.com/ib/th?id=OIP.bFRSXMeNFRTpPBei_ifTFQHaHa&pid=Api&rs=1&c=1&qlt=95&w=124&h=124" name="Location" item="Brgy. Cogon Juban Sor."/>
							</div>
							<div>
								<StudentCard picLink="https://tse2.mm.bing.net/th?id=OIP.z249RPSD-cfVfuC2OOLSOgHaHa&pid=Api&P=0&h=220" name="Facebook" item="Rafaella Sabenorio"/>
							</div>
						</div>
					</div>
					<div className="border-2px d-flex">
						<div>
							<Form className="w-600" >							
								<Form.Group className="mb-3" controller="formBasicEmail">
									<Form.Label>Email address</Form.Label>
									<Form.Control type="email" onChange={e => setEmail(e.target.value)} value={email}/>		
									<Form.Label>Name </Form.Label>
									<Form.Control type="Name" onChange={e => setName(e.target.value)} value={Name}/>	
									<Form.Label>Phone</Form.Label>
									<Form.Control type="phone" onChange={e => setPhone(e.target.value)} value={phone}/>
									<Form.Label>Message</Form.Label>
									<Form.Control as="textarea" rows={5} onChange={e => setMessage(e.target.value)} value={Message}/>
								</Form.Group>
								<Form.Group className="d-flex gap-4">
	             					<Button onClick={handleSubmit}>Submit</Button>
	             				</Form.Group>
					    	</Form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

function StudentCard({picLink, name, item}){
	return(<>
		<div className="p-2 d-flex align-items-center aboutUsCard h-auto ">
			<div className="d-flex">
				<img src={picLink} alt="" className="aboutUsPic" />
			</div>
			<h6 className="p-2 d-flex text-center">{name}</h6>
			<h6 className="p-2 d-flex text-center">{item}</h6>
		</div>

	</>)
}
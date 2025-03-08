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
		<div className="d-flex justify-content-center ">
			<div className="mw-1200 d-flex flex-column">
				<div className="d-flex flex-column w-100 p-5 p-xl-0">
					
						<h1 className=" pt-serif-bold ">Contact us</h1>
						<h6 className=" pt-serif-bold text-break text-wrap w-100">SORA is ready to provide the rigth solution according to your needs.</h6>
					
				</div>
				<div className="p-0">
					<div className="d-flex gap-0 flex-column flex-lg-row">
						<div className="b-1px col-12 col-lg-7 p-4 flex-column">
							<h4 className="color-5 pt-serif-bold m-3">Get In Touch</h4>
							<p className="color-5 m-3">Get in touch and let us know how we can help.</p>
							<div className="d-flex flex-wrap p-3 m-3">
								<div className="d-flex w-100 flex-column flex-lg-row">
									<StudentCard picLink="https://www.svgrepo.com/show/472750/phone.svg" name="Phone" item="09634112627"/>			
									<StudentCard picLink="https://tse4.mm.bing.net/th?id=OIP.SV72EbhM23iKCGSWnYEwRAHaHa&pid=Api&P=0&h=220" name="Email" item="gillyjeand@gmail.com"/>							

								</div>
								<div className="d-flex w-100 flex-column flex-lg-row">
									<StudentCard picLink="https://up.yimg.com/ib/th?id=OIP.bFRSXMeNFRTpPBei_ifTFQHaHa&pid=Api&rs=1&c=1&qlt=95&w=124&h=124" name="Location" item="Brgy. Cogon Juban Sor."/>
									<StudentCard picLink="https://tse2.mm.bing.net/th?id=OIP.z249RPSD-cfVfuC2OOLSOgHaHa&pid=Api&P=0&h=220" name="Facebook" item="Rafaella Sabenorio"/>
								</div>


							</div>
						</div>

						<div className="b-1px d-flex flex-column col-12 col-lg-5 p-4">
							<h4 className="pt-serif-bold">Leave A Message</h4>
							<Form className="w-100 d-flex flex-column gap-1">							
								<Form.Group className="d-flex flex-column" controller="">
									<Form.Label>Email address</Form.Label>
									<Form.Control type="email" onChange={e => setEmail(e.target.value)} value={email}/>		
								</Form.Group>
								<Form.Group>
									<Form.Label>Name </Form.Label>
									<Form.Control type="Name" onChange={e => setName(e.target.value)} value={Name}/>	
								</Form.Group>
								<Form.Group>
									<Form.Label>Phone</Form.Label>
									<Form.Control type="phone" onChange={e => setPhone(e.target.value)} value={phone}/>
								</Form.Group>
								<Form.Group>
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
	return(
		<div className="p-0 m-0 d-flex align-items-center col">

			<div className="d-flex">
				<img src={picLink} alt="" className="contactUsPic"/>
			</div>
			<div>
				<h6 className="p-1">{name}</h6>
				<h6 className="p-1">{item}</h6>
			</div>	
		</div>
	)
}
	
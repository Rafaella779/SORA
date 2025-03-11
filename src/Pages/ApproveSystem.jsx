import React, {useState, useEffect, useContext } from 'react'
import {Form, ButtonGroup, SplitButton, Button, Table,} from 'react-bootstrap'
import {useNavigate} from 'react-router'
import Swal from 'sweetalert2'

export default function ApproveSystem() {
	const [Message, setMessage] = useState("")
	const [Ratings, setRatings] = useState()
	
	
	const handleSubmit = () => {
		fetch(`https://sora-q8wl.onrender.com/user/createUser`, {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({
				m: Message,
				r: Ratings,
				
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
	const handleRatings = (rate) => {
		setRatings(rate);
	}

	return ( 
		<div className="d-flex w-100 col-12 p-4 flex-column flex-lg-row">
			<iframe src="https://drive.google.com/file/d/12ccdaqZI85O4m7-JvkCjrTvq6_m73nnJ/preview" className="w-100 mnh-500  d-flex flex-column" allow="autoplay"></iframe>
			<div className="b-1px d-flex flex-column col-lg-5 p-4">
				<h4 className="pt-serif-bold">Feedback</h4>
				<Form className="d-flex flex-column gap-3">							
					<Form.Group>
							<h6>Comments</h6>
						<Form.Control as="textarea" rows={5} onChange={e => setMessage(e.target.value)} value={Message}/>
					</Form.Group>
					<Form.Group>
						<h6>Ratings (1-10)</h6>
						<div className="d-flex gap-2 flex-wrap">
							<div className="d-flex gap-2 flex-wrap">
								<Button className={`${(Ratings == 1) ? "ratings-button" : ""}`} onClick={() => handleRatings(1)}>1</Button>
								<Button className={`${(Ratings == 2) ? "ratings-button" : ""}`} onClick={() => handleRatings(2)}>2</Button>
								<Button className={`${(Ratings == 3) ? "ratings-button" : ""}`} onClick={() => handleRatings(3)}>3</Button>
								<Button className={`${(Ratings == 4) ? "ratings-button" : ""}`} onClick={() => handleRatings(4)}>4</Button>
								<Button className={`${(Ratings == 5) ? "ratings-button" : ""}`} onClick={() => handleRatings(5)}>5</Button>
							</div>
							<div className={`d-flex gap-2 flex-wrap`}>
								<Button className={`${(Ratings == 6) ? "ratings-button" : ""}`} onClick={() => handleRatings(6)}>6</Button>
								<Button className={`${(Ratings == 7) ? "ratings-button" : ""}`} onClick={() => handleRatings(7)}>7</Button>
								<Button className={`${(Ratings == 8) ? "ratings-button" : ""}`} onClick={() => handleRatings(8)}>8</Button>
								<Button className={`${(Ratings == 9) ? "ratings-button" : ""}`} onClick={() => handleRatings(9)}>9</Button>
								<Button className={`${(Ratings == 10) ? "ratings-button" : ""}`} onClick={() => handleRatings(10)}>10</Button>
							</div>
						</div>
					</Form.Group>
					<Form.Group className="d-flex gap-4">
	             		<Button onClick={handleSubmit}>Submit</Button>
	             	</Form.Group>
				</Form>
			</div>
		</div>
	)

}




		

	



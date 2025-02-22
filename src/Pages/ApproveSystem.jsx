import {useState, useEffect} from 'react';
import {Button, Form} from 'react-bootstrap';
import Swal from 'sweetalert2'

export default function ApproveSystem() {


function ApproveSystem() {

	
	const [approvalCount, setapprovalCount] = useState("")
	const [rejectionCommnets, setrejectionCommnets] = useState("")
	const [approvalrequestdate, setapprovalrequestdate] = useState("")
	const [rejectioncount, setrejectioncount] = useState("")
	const [whoPaneled, setwhoPaneled] = useState("")
	const [Datepublish, setDatepublish] = useState("")
	const [cite, setcite] = useState("")
	const [view, setview] = useState("")



	const handleSubmit = () => {
		fetch(`https://sora-q8wl.onrender.com/approveResearch/:researchID`, {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({
				approvalCount: approvalCount,
				rejectionCommnets: rejectionCommnets,
				approvalrequestdate: approvalrequestdate,
				rejectioncount: rejectioncount,
				whoPaneled: whoPaneled,
				Datepublish: new Date(Datepublish),
				cite: cite,
				view: view,
				
			})
		}).then(result => result.json()).then(result => {
			if(result.error){
				console.log(result)
				Swal.fire({
					icon: "error",
					title: "invalid Credentials",
					text: '${res.error} check your details and try again'
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
					
				})

			}
		})
	  }
	}
}

function p1(){ 
	return(
	<div className="d-flex w-100">
		<Form.Group className="col-4">
			<Form.Label> Title of the Research </Form.Label>
			<Form.Control  onChange={e => settitle(e.target.value)} value={title}/>
			<Form.Label>Authors Of The Research </Form.Label>
			<Form.Control  onChange={e => setauthors(e.target.value)} value={authors}/>
			<Button onClick={addAuthors}>Add</Button>
			<br />
			<Form.Label> ID </Form.Label>
			<Form.Control  onChange={e => setid(e.target.value)} value={id}/>
			<Button onClick={addid}>Add</Button>
			<br />
			<Form.Label>keywords Of The Research</Form.Label>
			<Form.Control  onChange={e => setkeywords(e.target.value)} value={keywords}/>
			<Button onClick={addKeyword}>Add</Button>
			<br />
			<Form.Label>Category of The Research</Form.Label>
			<Form.Control  onChange={e => setcategory(e.target.value)} value={category}/>
			<Form.Label> Link of the Research </Form.Label>
			<Form.Control  onChange={e => setlink(e.target.value)} value={link}/>	
		</Form.Group>
}

function p2(){ 
	return(
	<div className="d-flex w-100">
		<Form.Group className="col-4">
			<Form.Label> Title of the Research </Form.Label>
			<Form.Control  onChange={e => settitle(e.target.value)} value={title}/>
			<Form.Label>Authors Of The Research </Form.Label>
			<Form.Control  onChange={e => setauthors(e.target.value)} value={authors}/>
			<Button onClick={addAuthors}>Add</Button>
			<br />
			<Form.Label> ID </Form.Label>
			<Form.Control  onChange={e => setid(e.target.value)} value={id}/>
			<Button onClick={addid}>Add</Button>
			<br />
			<Form.Label>keywords Of The Research</Form.Label>
			<Form.Control  onChange={e => setkeywords(e.target.value)} value={keywords}/>
			<Button onClick={addKeyword}>Add</Button>
			<br />
			<Form.Label>Category of The Research</Form.Label>
			<Form.Control  onChange={e => setcategory(e.target.value)} value={category}/>
			<Form.Label> Link of the Research </Form.Label>
			<Form.Control  onChange={e => setlink(e.target.value)} value={link}/>	
		</Form.Group>


}
import {useState, useEffect} from 'react';
import {Button, Form} from 'react-bootstrap';
import Swal from 'sweetalert2'

export default function ApproveSystem() {

	
	const [approvalCount, setapprovalCount] = useState("")
	const [rejectionCommnets, setrejectionCommnets] = useState("")
	const [approvalrequestdate, setapprovalrequestdate] = useState("")
	const [rejectioncount, setrejectioncount] = useState("")
	const [whoPaneled, setwhoPaneled] = useState("")
	const [Datepublish, setDatepublish] = useState("")
	const [cite, setcite] = useState("")
	const [view, setview] = useState("")
	const [isresearchApproved, setisresearchApproved] = useState("")
	const [dateModified, setdateModified] = useState("")
	const [isAvailableForApproval, setisAvailableForApproval] = useState("")
	const [approvalHistory, setapprovalHistory] = useState("")
	const [ratings, setratings] = useState("")


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
				isresearchApproved: isresearchApproved,
				approvalHistory: approvalHistory,
				dateModified: dateModified,
				isAvailableForApproval: isAvailableForApproval,
				ratings: ratings,

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



	  return(
			<div>
		<Form.Label> is research Aprroved</Form.Label>
		<Form.Control  onChange={e => setisresearchApproved(e.target.value)} value={isresearchApproved}/>
		<Button onClick={handleSubmit}>Submit</Button> 
		</div>

	)
	}

		

	



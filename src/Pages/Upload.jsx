import {useState, useEffect} from 'react';
import {Button, Form} from 'react-bootstrap';
import Swal from 'sweetalert2'


export default function Upload() {
	
		const [page, setPage] = useState(1);
		const [authors, setauthors] = useState("")
		const [id, setid] = useState("")
		const [keywords, setkeywords] = useState("")
		const [abstract, setabstract] = useState("")
		const [category, setcategory] = useState("")
		const [link, setlink] = useState("")
		const [isApprovedBySchool, setisApprovedBySchool] = useState("")
		const [whoPaneled1, setwhoPaneled1] = useState("")
		const [whoPaneled2, setwhoPaneled2] = useState("")
		const [whoPaneled3, setwhoPaneled3] = useState("")
		const [whoPaneled4, setwhoPaneled4] = useState("")
		const [whoPaneled5, setwhoPaneled5] = useState("")
		const [title, settitle] = useState("")


			const handleSubmit = () => {
		fetch(`https://sora-q8wl.onrender.com/research/createResearch`, {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({
				authors: authors,
				id: id,
				keywords: keywords,
				abstract: abstract,
				category: category,
				link: link,
				isApprovedBySchool: isApprovedBySchool,
				whoPaneled: [whoPaneled1, whoPaneled2, whoPaneled3, whoPaneled4, whoPaneled5],
				title: title,
				
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
				})
				.then(result => {
					let l = localStorage;
					console.log(res);
					l.setItem('t', res.t);
					l.setItem('u', res.t);
					l.setItem('a', res.t);
					l.setItem('n', res.t);
					l.setItem('i', res.t);
					l.setItem('x', res.t);
					l.setItem('b', res.t);
					l.setItem('s', res.t);
				})

			}
		})
	}

function p1(){ 
	return(
	<Form.Group>
		<Form.Label> Title of the Research </Form.Label>
		<Form.Control  onChange={e => settitle(e.target.value)} value={title}/>
		<Form.Label>Authors Of The Research </Form.Label>
		<Form.Control  onChange={e => setauthors(e.target.value)} value={authors}/>
		<Form.Label>keywords Of The Research</Form.Label>
		<Form.Control  onChange={e => setkeywords(e.target.value)} value={keywords}/>
		<Form.Label> ID </Form.Label>
		<Form.Control  onChange={e => setid(e.target.value)} value={id}/>
		<Form.Label>Category</Form.Label>
		<Form.Control  onChange={e => setcategory(e.target.value)} value={category}/>
		<Form.Label> Link of the Research </Form.Label>
		<Form.Control  onChange={e => setlink(e.target.value)} value={link}/>	
	</Form.Group>
		)
	}



function p2(){ 
	return(
	<Form.Group>
		<Form.Label> Abstract of the Research </Form.Label>
		<Form.Control  onChange={e => setabstract(e.target.value)} value={abstract}/>
		<Form.Label> Is Your Research Approved by the School </Form.Label>
		<Form.Control  onChange={e => setisApprovedBySchool(e.target.value)} value={isApprovedBySchool}/>
		<Form.Label> Panelist 1	 </Form.Label>
		<Form.Control  onChange={e => setwhoPaneled1(e.target.value)} value={whoPaneled1}/>
		<Form.Label> Panelist 2  </Form.Label>
		<Form.Control  onChange={e => setwhoPaneled2(e.target.value)} value={whoPaneled2}/>
		<Form.Label> Panelist 3	 </Form.Label>
		<Form.Control  onChange={e => setwhoPaneled3(e.target.value)} value={whoPaneled3}/>
		<Form.Label> Panelist 4	 </Form.Label>
		<Form.Control  onChange={e => setwhoPaneled4(e.target.value)} value={whoPaneled4}/>
		<Form.Label> Panelist 5	 </Form.Label>
		<Form.Control  onChange={e => setwhoPaneled5(e.target.value)} value={whoPaneled5}/>
	</Form.Group>
		)
	}


const [render, setRender] = useState(p1);

		const handlePrev = () => {
				setPage(page - 1);
				console.log("handlep")
		}

		const handleNext = () => {
			setPage(page + 1);
			console.log("handlen")

		}





useEffect(() => {}, [])
return(
		<>
			<h1>Submit Your Reseach</h1>
			<Form className="w-25">
				{(page == 1 ? p1() : p2())}
				<div className="d-flex gap-1 mt-3">
					{(page == 1) ? <></> : <Button onClick={handlePrev}>Previous</Button>}
					{(page == 2) ? <></> : <Button onClick={handleNext}>Next</Button>}
					{(page == 2) ? <Button onClick={handleSubmit}>Submit</Button>  : <></> }
				</div>
			</Form>
		</>
	)
}
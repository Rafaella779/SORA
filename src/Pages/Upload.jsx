import {useState, useEffect} from 'react';
import {Button, Form} from 'react-bootstrap';
import Swal from 'sweetalert2'


export default function Upload() {
	
		const [page, setPage] = useState(1);
		const [authors, setauthors] = useState("")
		const [id, setid] = useState("")
		const [keywords, setkeywords] = useState("")
		const [keywordArray, setkeywordArray] = useState([])
		const [abstract, setabstract] = useState("")
		const [category, setcategory] = useState("")
		const [link, setlink] = useState("")
		const [isApprovedBySchool, setisApprovedBySchool] = useState("")
		const [whoPaneled, setwhoPaneled] = useState("")
		const [title, settitle] = useState("")


			const handleSubmit = () => {
		fetch(`https://sora-q8wl.onrender.com/research/createResearch`, {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({
				authors: authors.split("; "),
				id: id,
				keywords: keywords.split("; "),
				abstract: abstract,
				category: category,
				link: link,
				isApprovedBySchool: isApprovedBySchool,
				whoPaneled: whoPaneled.split("; "),
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

	let addKeyword = () => {
		keywordArray.push(keywords);
		setkeywords("");
	}
function p1(){ 
	return(
	<div className="d-flex w-100">
		<Form.Group className="col-4">
			<Form.Label> Title of the Research </Form.Label>
			<Form.Control  onChange={e => settitle(e.target.value)} value={title}/>
			<Form.Label>Authors Of The Research </Form.Label>
			<Form.Control  onChange={e => setauthors(e.target.value)} value={authors}/>
			<Form.Label> ID </Form.Label>
			<Form.Control  onChange={e => setid(e.target.value)} value={id}/>
			<Button>Add</Button>
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
		<div className="col-4">
			<h1>keywords</h1>
			{keywordArray.map((x, i) => {
				console.log(x)
				console.log(i)
				return <div className="d-flex">
					<p>{x}</p>
					<Button onClick={() => {
						keywordArray.splice(i, i + 1)
					}}> - </Button>
				</div>
			})}
		</div>
	</div>
		)
	}



function p2(){ 
	return(
	<Form.Group>
		<Form.Label> Abstract of the Research </Form.Label>
		<Form.Control  onChange={e => setabstract(e.target.value)} value={abstract}/>
		<Form.Label> Is Your Research Approved by the School </Form.Label>
		<Form.Control  onChange={e => setisApprovedBySchool(e.target.value)} value={isApprovedBySchool}/>
		<Form.Label> Panelist of your Reseach	 </Form.Label>
		<Form.Control  onChange={e => setwhoPaneled1(e.target.value)} value={whoPaneled1}/>
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

		const handleadd =() => {
			c
		}





useEffect(() => {}, [])
return(
		<>
		<div>
			<h1>Submit Your Reseach</h1>
			<Form className="w-100">
				{(page == 1 ? p1() : p2())}
				<div className="d-flex gap-1 mt-3">
					{(page == 1) ? <></> : <Button onClick={handlePrev}>Previous</Button>}
					{(page == 2) ? <></> : <Button onClick={handleNext}>Next</Button>}
					{(page == 2) ? <Button onClick={handleSubmit}>Submit</Button>  : <></> }
				</div>


				<div>
					
				</div>
			</Form>
		</div>
			
		</>
	)
}
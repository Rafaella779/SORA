import {useState, useEffect} from 'react';
import {Button, Form} from 'react-bootstrap';
import Swal from 'sweetalert2'


export default function Upload() {
	
		const [page, setPage] = useState(1);
		const [authors, setauthors] = useState("")
		const [authorsArray, setauthorsArray] = useState([])
		const [id, setid] = useState("")
		const [idArray, setidArray] = useState([])
		const [keywords, setkeywords] = useState("")
		const [keywordArray, setkeywordArray] = useState([])
		const [abstract, setabstract] = useState("")
		const [category, setcategory] = useState("")
		const [link, setlink] = useState("")
		const [isApprovedBySchool, setisApprovedBySchool] = useState("")
		const [whoPaneled, setwhoPaneled] = useState("")
		const [whoPaneledArray, setwhoPaneledArray] = useState([])
		const [title, settitle] = useState("")
		const [count, setCount] = useState(0)


			const handleSubmit = () => {
		fetch(`https://sora-q8wl.onrender.com/research/createResearch`, {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({
				name: authors.split("; "),
				id: id.split("; "),
				words: keywords.split("; "),
				abstract: abstract,
				category: category,
				link: link,
				isApprovedBySchool: isApprovedBySchool,
				name: whoPaneled.split("; "),
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
		if(keywords != ""){
			keywordArray.push(keywords);
			setkeywords("");
		}
	}

	let addAuthors = () => {
		if (authors != ""){
		authorsArray.push(authors);
		setauthors("");
	}
	}

	let addid = () => {
		if(id != ""){
			idArray.push(id);
			setid("");
		}
	}

	let addwhopaneled = () => {
		if(whoPaneled != "") {
			whoPaneledArray.push(whoPaneled);
			setwhoPaneled("");
		}
	}

function p1(){ 
	return(
	<div className="d-flex w-100 ">
		
		<Form.Group className="col-4">
			<h1>Submit Your Research</h1>
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
			<Form.Label>Keywords of the Research</Form.Label>
			<Form.Control  onChange={e => setkeywords(e.target.value)} value={keywords}/>
			<Button onClick={addKeyword}>Add</Button>
			<br />
			<Form.Label>Category of the Research</Form.Label>
			<Form.Control  onChange={e => setcategory(e.target.value)} value={category}/>
			<Form.Label> Link of the Research </Form.Label>
			<Form.Control  onChange={e => setlink(e.target.value)} value={link}/>	
		</Form.Group>

		<div className=" col-3">
		
			
		<h1>Authors</h1>
			{authorsArray.map((j, k) => {
				console.log(j)
				console.log(k)
				return <div className="d-flex">
					<p>{j}</p>
					<Button onClick={() => {
						authorsArray.splice(k, 1)
						setCount(count + 1);
					}}> - </Button>
				</div>
			})}
		</div>

		<div className="col-3">
			<h1>ID</h1>
			{idArray.map((p, o) => {
				console.log(p)
				console.log(o)
				return <div className="d-flex">
					<p>{p}</p>
					<Button onClick={() => {
						idArray.splice(o, 1)
						setCount(count + 1);
					}}> - </Button>
				</div>
			})}
		</div>

		<div className="col">
			<h1>Keywords</h1>
			{keywordArray.map((x, i) => {
				console.log(x)
				console.log(i)
				return <div className="d-flex">
					<p>{x}</p>
					<Button onClick={() => {
						keywordArray.splice(i,1)
						setCount(count + 1);
					}}> - </Button>
				</div>
			})}
		</div>
	</div>
		)
	}



function p2(){ 
	return(
	<div className="d-flex w-100">
	<Form.Group>
		<Form.Label> Abstract of the Research </Form.Label>
		<Form.Control  onChange={e => setabstract(e.target.value)} value={abstract}/>
		<Form.Label> Is Your Research Approved by the School </Form.Label>
		<Form.Control  onChange={e => setisApprovedBySchool(e.target.value)} value={isApprovedBySchool}/>
		<Form.Label> Panelist of your Reseach	 </Form.Label>
		<Form.Control  onChange={e => setwhoPaneled(e.target.value)} value={whoPaneled}/>
		<Button onClick={addwhopaneled}>Add</Button>
		<br />
	</Form.Group>

	<div className="col-4 ">
			<h1>Panelist</h1>
			{whoPaneledArray.map((p, o) => {
				console.log(p)
				console.log(o)
				return <div className="d-flex">
					<p>{p}</p>
					<Button onClick={() => {
						whoPaneledsArray.splice(o, 1)
						setCount(count + 1);
					}}> - </Button>
				</div>
			})}
		</div>



	</div>
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
		<div>
			

				
			
			<Form className="w-100">
				{(page == 1 ? p1() : p2())}
				<div className="d-flex gap-1 mt-3">
					{(page == 1) ? <></> : <Button onClick={handlePrev}>Previous</Button>}
					{(page == 2) ? <></> : <Button onClick={handleNext}>Next</Button>}
					{(page == 2) ? <Button onClick={handleSubmit}>Submit</Button>  : <></> }
				</div>
			</Form>
		</div>
			
		</>
	)
}
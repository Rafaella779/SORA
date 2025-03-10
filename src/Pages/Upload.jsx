import {useState, useEffect} from 'react';
import {Button, Form, Col} from 'react-bootstrap';
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
					title: "Missing Or Invalid  Words Please Check",
					text: 'check your details and try again'
				})
			}
			else {
				Swal.fire({
					icon: "success",
					title: "Submission Success!",
					timer: 1500,
					showConfirmButton: false
				})
				.then(result => {
					let l = localStorage;
					console.log(res);
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

		<div className="d-flex w-100 p-1 m-1">
			<Form.Group className="col-3 b-1px  m-1 p-2">
				<h2 className=" pt-serif-bold ">Submit Your Research</h2>
				<Form.Label className="d-flex m-1"> Title of the Research </Form.Label>
				<Form.Control  onChange={e => settitle(e.target.value)} value={title}/>
				<Form.Label className="d-flex m-1">Authors Of The Research </Form.Label>
				<Form.Control  onChange={e => setauthors(e.target.value)} value={authors}/>
				<Button className="m-1" size="sm" onClick={addAuthors}>Add</Button>
				<br />
				<Form.Label className="d-flex m-1"> ID </Form.Label>
				<Form.Control  onChange={e => setid(e.target.value)} value={id}/>
				<Button className="m-1" size="sm" onClick={addid}>Add</Button>
				<br />
				<Form.Label className="d-flex m-1">Keywords of the Research</Form.Label>
				<Form.Control  onChange={e => setkeywords(e.target.value)} value={keywords}/>
				<Button className="m-1" size="sm" onClick={addKeyword}>Add</Button>
				<br />
				<Form.Label className="d-flex m-1">Category of the Research</Form.Label>
				<Form.Control  onChange={e => setcategory(e.target.value)} value={category}/>
				<Form.Label className="d-flex m-1"> Link of the Research </Form.Label>
				<Form.Control  onChange={e => setlink(e.target.value)} value={link}/>	
			</Form.Group>


			<div className=" col-3 b-1px m-1">
				<h2 className=" pt-serif-bold m-1">Authors</h2>
				{authorsArray.map((j, k) => {
					console.log(j)
					console.log(k)
					return <div className="d-flex m-1">
						<p>{j}</p>
						<Button  variant="link" className="button1" onClick={() => {
							authorsArray.splice(k, 1)
							setCount(count + 1);
						}}>.</Button>
					</div>
				})}
		</div>

		<div className="col-3 b-1px m-1">
			<h2 className="pt-serif-bold m-1">ID</h2>
			{idArray.map((p, o) => {
				console.log(p)
				console.log(o)
				return <div className="d-flex">
					<h6>{p}</h6>
					<Button onClick={() => {
						idArray.splice(o, 1)
						setCount(count + 1);
					}}>.</Button>
				</div>
			})}
			</div>


		<div className="col b-1px m-1">
			<h2 className=" pt-serif-bold m-1">Keywords</h2>
			{keywordArray.map((x, i) => {
				console.log(x)
				console.log(i)
				return <div className="d-flex m-1">
					<p>{x}</p>
					<Button  variant="link" className="button1" onClick={() => {
						keywordArray.splice(i,1)
						setCount(count + 1);
					}}>.</Button>
				</div>
			})}
			</div>
		</div>
		
		)
	}



function p2(){ 
	return(
	<div className="d-flex col-8 m-2">
	<Form.Group className="col-3 b-1px  m-1 p-1">
		<Form.Label className="d-flex m-1"> Abstract of the Research </Form.Label>
		<Form.Control  onChange={e => setabstract(e.target.value)} value={abstract}/>
		<Form.Label className="d-flex m-1"> Is Your Research Approved by the School </Form.Label>
		<Form.Control  onChange={e => setisApprovedBySchool(e.target.value)} value={isApprovedBySchool}/>
		<Form.Label className="d-flex m-1"> Panelist of your Reseach	 </Form.Label>
		<Form.Control  onChange={e => setwhoPaneled(e.target.value)} value={whoPaneled}/>
		<Button className="m-1" size="sm" onClick={addwhopaneled}>Add</Button>
		<br />
	</Form.Group>


	<div className="col-5 b-1px m-1">
			<h2 className="d-flex pt-serif-bold m-1" >Panelist</h2>
			{whoPaneledArray.map((p, o) => {
				console.log(p)
				console.log(o)
				return <div className="d-flex m-1">
					<p>{p}</p>
					<Button variant="link" className="button1" onClick={() => {
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
		<div>
			<Form className="w-90">
				{(page == 1 ? p1() : p2())}
				<div className="d-flex mt-3 m-1 p-2 gap-1">
					{(page == 1) ? <></> : <Button onClick={handlePrev}>Previous</Button>}
					{(page == 2) ? <></> : <Button onClick={handleNext}>Next</Button>}
					{(page == 2) ? <Button onClick={handleSubmit}>Submit</Button>  : <></> }
				</div>
			</Form>
		</div>			
	)
}
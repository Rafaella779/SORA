import {useState, useEffect} from 'react';
import {Button, Form, Col, InputGroup} from 'react-bootstrap';
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
		fetch(`${import.meta.env.VITE_BACKEND}/research/createResearch`, {
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
		}).then(result => result.json()).then(res => {
			if(res.error){
				console.log(res)
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
				.then(res => {
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

			<div>
				
				<h4>HEllo</h4>

			</div>

			)
	}














function p2(){ 
	return(

		<div className="d-flex p-0 mt-3 flex-column flex-lg-row" responsive>
			<Form.Group className="b-1px m-1 p-4 mw-300">
				<h2 className=" pt-serif-bold ">Submit Your Research</h2>
				<Form.Label className="d-flex m-1"> Title of the Research </Form.Label>
				<Form.Control  onChange={e => settitle(e.target.value)} value={title}/>
				<Form.Label className="d-flex m-1">Authors Of The Research </Form.Label>
				<InputGroup>
					<Form.Control  onChange={e => setauthors(e.target.value)} value={authors}/>
					<InputGroup.Text className="bg-1" onClick={addAuthors}>Add</InputGroup.Text>
				</InputGroup>
				<Form.Label className="d-flex m-1"> ID </Form.Label>
				<InputGroup>
					<Form.Control  onChange={e => setid(e.target.value)} value={id}/>
					<InputGroup.Text className="bg-1"  onClick={addid}>Add</InputGroup.Text>
				</InputGroup>
				<Form.Label className="d-flex m-1">Keywords of the Research</Form.Label>
				<InputGroup>
					<Form.Control  onChange={e => setkeywords(e.target.value)} value={keywords}/>
					<InputGroup.Text className="bg-1" onClick={addKeyword}>Add</InputGroup.Text>
				</InputGroup>
				<Form.Label className="d-flex m-1">Category of the Research</Form.Label>
				<Form.Control  onChange={e => setcategory(e.target.value)} value={category}/>
				<Form.Label className="d-flex m-1"> Link of the Research </Form.Label>
				<Form.Control  onChange={e => setlink(e.target.value)} value={link}/>	
			</Form.Group>

			<div>
				<div className="col b-1px m-1 p-4">
					<h4 className=" pt-serif-bold m-1">Authors</h4>
					<div className="d-flex flex-column gap-1">{authorsArray.map((j, k) => {
						console.log(j)
						console.log(k)
						return <div className="d-flex m-0 align-items-center justify-content-between">
							<p className="m-0">{k + 1}. {j}</p>
							<Button  className="px-2 py-0" onClick={() => {
								authorsArray.splice(k, 1)
								setCount(count + 1);
							}}> - </Button>
						</div>
					})}</div>
				</div>

				<div className="col b-1px m-1 p-4">
					<h4 className="pt-serif-bold m-1">ID</h4>
					<div className="d-flex flex-column gap-1">{idArray.map((p, o) => {
						console.log(p)
						console.log(o)
						return <div className="d-flex m-0 align-items-center justify-content-between">
							<p className="m-0">{o + 1}. {p}</p>
							<Button className="px-2 py-0" onClick={() => {
								idArray.splice(o, 1)
								setCount(count + 1);
							}}> - </Button>
						</div>
					})}</div>
				</div>


				<div className="col b-1px m-1 p-4">
					<h4 className=" pt-serif-bold m-1">Keywords</h4>
					<div className="d-flex flex-column gap-1">{keywordArray.map((x, i) => {
						console.log(x)
						console.log(i)
						return <div className="d-flex m-0 align-items-center justify-content-between">
							<p className="m-0">{i + 1}. {x}</p>
							<Button className="px-2 py-0" onClick={() => {
								keywordArray.splice(i,1)
								setCount(count + 1);
							}}> - </Button>
						</div>
					})}</div>
				</div>
			</div>

	</div>

		)
	}



function p3(){ 
	return(
	<div className="d-flex p-0 mt-3 flex-column flex-lg-row">
		<Form.Group className="b-1px m-1 p-2">
			<Form.Label className="d-flex m-1"> Abstract of the Research </Form.Label>
			<Form.Control as="textarea" rows={5}  onChange={e => setabstract(e.target.value)} value={abstract}/>
			<Form.Label className="d-flex m-1"> Is Your Research Approved by the School </Form.Label>
			<Form.Control  onChange={e => setisApprovedBySchool(e.target.value)} value={isApprovedBySchool}/>
			<Form.Label className="d-flex m-1"> Panelist of your Reseach	 </Form.Label>
			<InputGroup>
				<Form.Control  onChange={e => setwhoPaneled(e.target.value)} value={whoPaneled}/>
				<InputGroup.Text className="bg-1" onClick={addwhopaneled}>Add</InputGroup.Text>
			</InputGroup>
			<br />
		</Form.Group>

		<div className="col b-1px m-1 p-4">
			<h4 className=" pt-serif-bold m-1">Panelist</h4>{whoPaneledArray.map((p, o) => {
				console.log(p)
				console.log(o)
				return <div className="d-flex m-1 align-items-center justify-content-between">
					<p className="m-0">{o + 1}. {p}</p>
					<Button className="px-2 py-0" onClick={() => {
						whoPaneledArray.splice(o,1)
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
		<div className="w-100 d-flex justify-content-center">
			<Form className=" d-flex justify-content-center flex-column">
				
				{ (page == 1) ? p1() : 
				  (page == 2) ? p2() :
				  (page == 3) ? p3() :
				}
				
			
				<div className="d-flex mt-3 m-1 p-2 gap-1 justify-content-end">
					{(page == 2) ? <></> : <Button onClick={handlePrev}>Previous</Button>}
					{(page == 1) ? <></> : <Button onClick={handleNext}>Next</Button>}
					{(page == 3) ? <Button onClick={handleSubmit}>Submit</Button>  : <></> }
				</div>
			</Form>
		</div>			
	)
}  
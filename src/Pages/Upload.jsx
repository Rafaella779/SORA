import {useState, useEffect} from 'react';
import {Button, Form, Col, InputGroup, Modal} from 'react-bootstrap';
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router'


export default function Upload() {

		const [page, setPage] = useState(1);
		const [authors, setauthors] = useState("")
		const [authorsUser, setauthorsUser] = useState("")
		const [authorsTeacher, setauthorsTeacher] = useState("")
		const [authorsArray, setauthorsArray] = useState([{name: localStorage.getItem('n'), i: localStorage.getItem('i'), u: (localStorage.getItem('utype') == "student") ? "user" : "teacher"}])
		const [authorsEmail, setAuthorsEmail] = useState("")
		const [noAuthor, setNoAuthor] = useState(false);
		const [id, setid] = useState("")
		const [idArray, setidArray] = useState([])
		const [keywords, setkeywords] = useState("")
		const [keywordArray, setkeywordArray] = useState([])
		const [abstract, setabstract] = useState("")
		const [category, setcategory] = useState("")
		const [link, setlink] = useState("");
		const [documentLink, setDocumentLink] = useState("")
		const [isApprovedBySchool, setisApprovedBySchool] = useState()
		const [whoPaneled, setwhoPaneled] = useState("")
		const [whoPaneledArray, setwhoPaneledArray] = useState([])
		const [title, settitle] = useState("")
		const [count, setCount] = useState(0)
		let n = useNavigate();

		const handleSubmit = () => {

		let author;
		fetch(`${import.meta.env.VITE_BACKEND}/research/createResearch`, {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({
				authors: authorsArray,
				keywords: keywords.split("; "),
				abstract: abstract,
				category: category,
				link: link,
				isApprovedBySchool: isApprovedBySchool,
				whoPaneled: whoPaneledArray,
				title: title,
				documentLink: documentLink,

			})
		}).then(result => result.json()).then(result => {
			if(result.error){
				console.log(result)
				Swal.fire({
					icon: "error",
					title: result.error,
					text: 'check your details and try again'
				})
			}
			else {
				Swal.fire({
					icon: "success",
					title: "Submission Success!",
					timer: 1500,		
					showConfirmButton: false,		
					text: "Thank you for your contribution"
				})
				.then(result => {
					
					n(`/${localStorage.getItem('utype')}`)
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
		authorsArray.push({name: authors});
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
			whoPaneledArray.push({name: whoPaneled});
			setwhoPaneled("");
		}
	}

	let addAuthorMember = (userType) => {
		fetch(`${import.meta.env.VITE_BACKEND}/research/getAuthors`, {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({
				toFind: {
					email: (userType == "teacher") ? authorsTeacher : authorsUser,
				},
				u: userType
			})
		}).then(res => res.json()).then(result => {
			console.log("addauthormember: ", result)
			console.log("authorsarray: ", authorsArray)
			if (result) {
				result.u = userType;
				if (result.message) {
					return Swal.fire({
						icon: "warning",
						title: "No Match Found"
					}).then(x => {
						setauthorsTeacher("");
						setauthorsUser("");	
						return;
					})
				}
				for (let j = 0; j < authorsArray.length; j++) {
					if ( result.i != undefined && result.i == authorsArray[j].i) {
						Swal.fire({
							icon: "warning",
							title: "Author already entered"
						})
						return;
					}
				}
				authorsArray.push(result);
				setauthorsTeacher("");
				setauthorsUser("");	
			}
			else {
				setNoAuthor(true);
			}
		})
	}

	useEffect(() => {

	}, [authorsArray.length])


function p1(){ 
	return(

		<div className="d-flex p-0 mt-3 flex-column flex-lg-row" responsive>

			<Form.Group className="b-1px m-1 p-4 col-12 col-lg-6">
				<h2 className=" pt-serif-bold m-0">Submit Your Research</h2>
				<p>Only submit works where you are an author</p>
				<hr />
				<Form.Label className="d-flex m-1"> Title of the Research </Form.Label>
				<Form.Control  onChange={e => settitle(e.target.value)} value={title}/>
				
				<Form.Label className="d-flex m-1">Research Keywords</Form.Label>
				<InputGroup>
					<Form.Control  onChange={e => setkeywords(e.target.value)} value={keywords}/>
					<InputGroup.Text className="bg-3" onClick={addKeyword}>Add</InputGroup.Text>
				</InputGroup>
				<Form.Label className="d-flex m-1">Research Category</Form.Label>
				<Form.Control  onChange={e => setcategory(e.target.value)} value={category}/>
				<Form.Label className="d-flex m-1">Research Link </Form.Label>
				<Form.Control  onChange={e => setlink(e.target.value)} value={link}/>	
				<hr />
				<div className="d-flex flex-column gap-3">
					<div>
						<Form.Label className="d-flex m-1"><strong>(Non-Member)</strong> &nbsp; Author Name </Form.Label>
						<Form.Text></Form.Text>
						<InputGroup>
							<Form.Control list="user-list"  onChange={e => setauthors(e.target.value)} value={authors}/>
							<InputGroup.Text className="bg-3" onClick={addAuthors}>Add</InputGroup.Text>
						</InputGroup>
					</div>
					
					<div>
						<Form.Label className="d-flex m-1"><strong>(SORA Teacher)</strong> &nbsp; Author E-mail </Form.Label>
						<Form.Text></Form.Text>
						<InputGroup>
							<Form.Control list="user-list"  onChange={e => setauthorsTeacher(e.target.value)} value={authorsTeacher}/>
							<InputGroup.Text className="bg-3" onClick={() => addAuthorMember("teacher")}>Add</InputGroup.Text>

						</InputGroup>
						{(noAuthor) ? <h6 className="color-red">Email not used by any SORA member</h6> : <></>}
					</div>
					
					<div>
						<Form.Label className="d-flex m-1"><strong>(SORA Student)</strong> &nbsp; Author E-mail </Form.Label>
						<Form.Text></Form.Text>
						<InputGroup>
							<Form.Control list="user-list"  onChange={e => setauthorsUser(e.target.value)} value={authorsUser}/>
							<InputGroup.Text className="bg-3" onClick={() => addAuthorMember("user")}>Add</InputGroup.Text>

						</InputGroup>
						{(noAuthor) ? <h6 className="color-red">Email not used by any SORA member</h6> : <></>}
					</div>
				</div>	
			</Form.Group>

			<div className="col-12 col-lg-6">
				<div className=" b-1px m-1 p-4">
					<h4 className=" pt-serif-bold m-1">Authors</h4>

					<div className="d-flex flex-column gap-1">{authorsArray.map((j, k) => {
						console.log(j)
						console.log(k)
						return <div className="d-flex m-0 align-items-center justify-content-between">
							<p className="m-0"> <strong>{k + 1}. {j.name} {j.l}</strong> ({(j.u == "user" || j.u == "student") ? "Student" : (j.u == "teacher") ? "Teacher" : "Non-member"})</p>
							<Button  className={`px-2 py-0 ${(localStorage.getItem('i') == j.i) ? "d-none" : ""}`} onClick={() => {
								authorsArray.splice(k, 1);
								setCount(count + 1);
							}}> - </Button>
						</div>
					})}</div>
				</div>



				<div className=" b-1px m-1 p-4">
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



function p2(){ 
	return(
	<div className="d-flex p-0 mt-3 flex-column flex-lg-row">
		<Form.Group className="col-12 col-lg-6 b-1px m-1 p-3 p-lg-4">
			<Form.Label className="d-flex m-1"> Abstract of the Research </Form.Label>
			<Form.Control as="textarea" rows={5}  onChange={e => setabstract(e.target.value)} value={abstract}/>
			<Form.Label className="d-flex m-1"> Panelist of your Reseach	 </Form.Label>
			<InputGroup>
				<Form.Control  onChange={e => setwhoPaneled(e.target.value)} value={whoPaneled}/>
				<InputGroup.Text className="bg-1" onClick={addwhopaneled}>Add</InputGroup.Text>
			</InputGroup>
			<Form.Label className="d-flex m-1"><strong>Is Your Research Approved by the School</strong></Form.Label>
			<div className="d-flex gap-1 my-3">
				<Button className={`${(isApprovedBySchool === false) ? "btn-selected" : "btn-not-selected" }`} onClick={() => {setisApprovedBySchool(false)}}>No</Button>
				<Button className={`${(isApprovedBySchool)  ? "btn-selected" : "btn-not-selected"}`} onClick={() => {setisApprovedBySchool(true)}}>Yes</Button>
			</div>
			{
				(isApprovedBySchool) ? 
				<>
					<Form.Label className=""><strong>Research Documents Link </strong></Form.Label>
					<p>Please upload on Google Drive documents certifying that your paper has been presented and/or checked and approved by your School</p>
					<Form.Control  onChange={e => setDocumentLink(e.target.value)} value={documentLink}/>
				</>
				: <></>

			}

		</Form.Group>

		<div className="col-12 col-lg-6 b-1px m-1 p-4">
			<h4 className=" pt-serif-bold m-1">Panelist</h4>{whoPaneledArray.map((p, o) => {
				console.log(p)
				console.log(o)
				return <div className="d-flex m-1 align-items-center justify-content-between">
					<p className="m-0">{o + 1}. {p.name}</p>
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

	const [show, setShow] = useState(false);
  	const handleClose = () => setShow(false);
  	const handleShow = () => setShow(true);

return(
		<div className="w-100 d-flex justify-content-center p-body navbar-border mnh-700">

			<Form className=" d-flex justify-content-center flex-column w-100 mw-1000">
				
				{(page == 1 ? p1() : p2())}
        
				<div className="d-flex mt-3 m-1 p-2 gap-1 justify-content-end">
					{(page == 1) ? <></> : <Button onClick={handlePrev}>Previous</Button>}
					{(page == 2) ? <></> : <Button onClick={handleNext}>Next</Button>}
					{(page == 2) ? <Button onClick={handleShow}>Submit</Button>  : <></> }


					<Modal  show={show} onHide={handleClose} scrollable="true">
				      <Modal.Header closeButton>
				        <Modal.Title>Notice</Modal.Title>
				      </Modal.Header>
				      <Modal.Body className ="modal-dialog-scrollable">

				      <div>

						<p><strong>Terms and Agreements of Use</strong></p>

						<p>Student’s Online Research Archive (SORA)</p>

						<p><strong>1. Introduction</strong></p>

						<p>Welcome to the Student’s Online Research Archive (SORA). This platform serves as a repository for student research papers, providing accessibility, collaboration, and academic recognition. By using this website, you agree to comply with these Terms and Agreements of Use. If you do not agree with any part of these terms, please refrain from using SORA.</p>

						<p><strong>2. User Eligibility</strong></p>

						<p>Students and Researchers</p>

						<p>Users must be students, teachers, or authorized researchers affiliated with an academic institution.</p>

						<p>Users must provide accurate personal and academic details upon registration.

						</p>
						


						<p>Teachers</p>

						<p>Research teachers must adhere to ethical standards in evaluating research submissions.</p>

						<p><strong>3. Copyright and Content Ownership</strong></p>

						<p>3.1 Ownership of Content

						By uploading research papers, articles, or any content to SORA, the user affirms that they hold the copyright or have obtained the necessary permissions to submit the content. Users retain ownership of their content but grant SORA a non-exclusive, worldwide license to store, display, and distribute the content on the platform.
						</p>
						<p>3.2 Copyright Infringement

						Users must not upload, share, or distribute content that infringes upon any third party's intellectual property rights. In case of copyright infringement, SORA reserves the right to remove such content and may terminate the user's account. Users found violating copyright laws may be subject to legal action as per the laws of the Philippines.
						</p>
						<p>3.3 Reporting Infringement

						If you believe that your copyrighted work has been uploaded to the platform without your permission, please contact SORA immediately, providing the necessary details to assist in resolving the issue.
						</p>

						<p><strong>4. Plagiarism and Ethical Standards</strong></p>

						<p>4.1 Plagiarism

						Users must not engage in or submit plagiarized work. All research papers must be the original work of the user. Any content that is copied, reproduced, or improperly attributed to other authors without proper citation will result in immediate removal and possible account suspension.
						</p>
						<p>4.2 Ethical Standards

						Research submissions must adhere to ethical standards of academic integrity. Users must ensure that their work follows ethical guidelines in terms of research methodologies, participant consent (if applicable), and reporting of results.
						</p>


						<p>
						<strong>
						5. Permitted Use and Prohibited Use
						</strong>
						</p>

						<p>5.1 Permitted Use

						SORA is intended solely for the sharing, storage, and collaboration of academic research papers and related materials. Users may access, download, and view content for academic purposes only.
						</p>

						<p>5.2 Prohibited Use

						Users are prohibited from using SORA for the following:
						- Uploading, sharing, or distributing content that violates any law or regulation.
						- Engaging in illegal activities, such as identity theft, hacking, or spamming.
						- Uploading malicious software, viruses, or other harmful components.
						- Using the platform to solicit or promote services, products, or illegal activities.
						- Attempting to circumvent security features or accessing restricted areas of the platform without authorization.
						</p>

						<p><strong>6. Termination of Account and Legal Consequences</strong></p>

						<p>6.1 Termination of Account

						SORA reserves the right to suspend or terminate a user’s account if they violate any of these Terms and Agreements, including but not limited to violations of copyright, plagiarism, ethical standards, or illegal activity. Users who have their accounts terminated will be notified, and all uploaded content may be removed.
						</p>
						<p>6.2 Legal Consequences

						In addition to account termination, users may face legal consequences, including civil or criminal penalties, under the laws of the Philippines or any applicable jurisdiction, if they violate intellectual property laws, engage in plagiarism, or breach any other laws.
						</p>


						<p>
						<strong>
						7. Governing Law
						</strong>
						</p>

						<p>7.1 Jurisdiction

						These Terms and Agreements shall be governed by and construed in accordance with the laws of the Philippines. Any disputes arising out of or relating to these terms shall be subject to the exclusive jurisdiction of the courts in the Philippines.
						</p>
						<p>
						<strong>
						8. Changes to Terms
						</strong>
						
						<p>SORA reserves the right to modify these Terms and Agreements at any time. Any changes will be communicated through the platform, and users are responsible for reviewing these terms regularly. Continued use of the platform after any modifications constitutes acceptance of the revised terms.</p>
						
						</p>
						<p>
						<strong>
						9. Contact Information
						</strong>
						</p>

						<p>
						For any questions or concerns regarding these Terms and Agreements, please contact SORA’s support team via the provided contact methods on the website.
						</p>

						</div>
				      </Modal.Body>
				      <Modal.Footer>
				        <Button variant="secondary" onClick={handleClose}>
				          No
				        </Button>
				        <Button variant="primary" onClick={handleSubmit}>
				          Yes
				        </Button>
				      </Modal.Footer>
				    </Modal>

				</div>
			</Form>
		</div>			
	)
}
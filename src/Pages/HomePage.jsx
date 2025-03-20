import React, {useState, useEffect, useContext } from 'react'
import {Form, ButtonGroup, SplitButton, Button, Table } from 'react-bootstrap'
import {useNavigate} from 'react-router'
import Swal from 'sweetalert2'
import Paginate from '../Components/Pagination.jsx'

export default function HomePage() {

      const [authors, setAuthors] = useState("")
      const [title, setTitle] = useState("")
      const [abstract, setAbstract] = useState("")
      const [view, setView] = useState("")
      const [tableData, setTableData] = useState([]) 
      const [submit, setSubmit] = useState("") 
      const [Active, setActive] = useState(1) 
      const [iLength, setiLength] = useState("") 
      const [iPerPage, setiPerPage] = useState(10) 
      let n = useNavigate()
      const handleSubmit = () => {
            fetch(`${import.meta.env.VITE_BACKEND}/research/searchP1`, {
                  method: "POST",
                  headers: {
                  	"Content-Type": "application/json",
                  	"authorization": `Bearer ${localStorage.getItem('t')}`
                  },
                  body: JSON.stringify({
                       toFind: { 
                        $or: [
							  { "title": { $regex: submit, $options: "i"} },
							 // { "authors": { $regex: submit, $options: "i"} }
							]
                       }
                  })
            }).then(result => result.json()).then(res => {
            	if (res.message){
            		setTableData("No Match Found")
            	}
            	else{
                console.log(res)
                setiLength(res.total)
                setTableData(res.items.map(x => {
                    let options = 0;
                    for (let i = 0; i < x.authors.length; i++) {
                        console.log("array authors", x.authors[i].i)
                        if (localStorage.getItem('i') && localStorage.getItem('i') ==  x.authors[i]._id) {
                            console.log("checking options")
                            options = 1
                        }
                    }
                    return(
                          <tr onClick={() => n(`/IndividualSearchResult/${x._id}/${options}`)}>
                                <td><ol>{x.authors.map((y, i) => {
                                	return <li>{`${y.name}`}</li>
                                })}</ol></td>
                                <td>{x.title}</td>
                                <td>{(x.abstract.length >= 200) ? `${x.abstract.substring(0, 200)}...` : x.abstract}</td>
                                <td>{x.view}</td>
                          </tr>
                    )
                  })
                )}      
            })
      }

      useEffect(() => {
      	    if (tableData.length > 0){
      	    fetch(`${import.meta.env.VITE_BACKEND}/research/searchP2`, {
                  method: "POST",
                  headers: {
                  	"Content-Type": "application/json",
                  	"authorization": `Bearer ${localStorage.getItem('t')}`
                  },
                  body: JSON.stringify({
                       toFind: {
                       	title: { $regex: submit, $options: "i"}
                       },
                       skip: Active
                  })
            }).then(result => result.json()).then(res => {
                
                console.log(res);
                
                setTableData(res.map(x => {
                    let options = 0;
                    for (let i = 0; i < x.authors.length; i++) {
                        if (localStorage.getItem('i') ==  x.authors[i].i) {
                            options = 1
                        }
                     }

                    return(
                          <tr onClick={() => n(`/IndividualSearchResult/${x._id}/${options}`)}>
                                <td>{x.authors.map(y => {
                                	return <p>{y.name}</p>
                                })}</td>
                                <td>{x.title}</td>
                                <td>{x.abstract}</td>
                                <td>{x.view}</td>
                          </tr>
                    )
                  })
                )  
            })
      }

      }, [Active]) 
 
	return ( 
		<div className="d-flex justify-content-center mnh-700">
			<div className="p-4 p-lg-5 w-100 mw-1500 bg-18 navbar-border p-body">
				 <div className="cinzel-decorative d-flex text-center justify-content-center">
				 	<h1>SORA</h1>
				 </div>
	             
	             <div className="h-2">
	            	 <Form onSubmit={(e) => {
                        e.preventDefault();
                        console.log("submitting form")
                        handleSubmit();
                    }}>
	             		<Form.Group className="d-flex gap-4">
                            <Form.Control  type="Name or Author" placeholder="Enter Name or author" onChange={e => setSubmit(e.target.value)} value={submit} />
                            <Button onClick={handleSubmit}>Search</Button>
	             		</Form.Group>
	             	</Form>
	           	 </div>

                {
                    (iLength > 0) ? 
                    <Paginate active={Active} iLength={iLength} iPerPage={iPerPage} setActive={setActive} /> 
                    : <></>
                }
	            <div className="w-100 mb-3 b-1px">
	             	<Table striped  hover responsive className=" b-1px">
	             		<thead>
	             			<tr>

		             			<th className="col col-lg-2 pt-serif-bold">Author</th>
		             			<th className="col col-lg-2 pt-serif-bold">Title</th>
		             			<th className="col col-lg-7 pt-serif-bold">Abstract</th>
		             			<th className="col col-lg-1 pt-serif-bold">Views</th>

	             			</tr>
	             		</thead>
				             	<tbody>
				             		{tableData}
				             	</tbody>
	            	 </Table>
	            </div>
                {
                    (iLength > 0) ? 
                    <Paginate active={Active} iLength={iLength} iPerPage={iPerPage} setActive={setActive} /> 
                    : <></>
                }
			</div>
		</div>
		)
}
			

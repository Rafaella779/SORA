import React, {useState, useEffect, useContext } from 'react'
import {Form, ButtonGroup, SplitButton, Button, Table, Container, Pagination  } from 'react-bootstrap'
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
      const [Active, setActive] = useState("") 
      const [iLength, setiLength] = useState("") 
      const [iPerPage, setiPerPage] = useState("") 
      let n = useNavigate()
      const handleSubmit = () => {
            fetch(`https://sora-q8wl.onrender.com/research/getAll`, {
                  method: "POST",
                  headers: {"Content-Type": "application/json"},
                  /*body: JSON.stringify({
                       toFind: {
                       	title: submit
                       }
                  }) */
            }).then(result => result.json()).then(res => {
                
                console.log(res)
                setTableData(res.research.map(x => {
                    return(
                          <tr onClick={() => n(`/IndividualSearchResult/${x._id}`)}>
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

      useEffect(() => {
      	    fetch(`https://sora-q8wl.onrender.com/research/getAll`, {
                  method: "POST",
                  headers: {"Content-Type": "application/json"},
                  /*body: JSON.stringify({
                       toFind: {
                       	title: submit
                       }
                  }) */
            }).then(result => result.json()).then(res => {
                
                console.log(res)
                setTableData(res.map(x => {
                    return(
                          <tr onClick={() => n(`/IndividualSearchResult/${x._id}`)}>
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
      
      } , [Active])
  
	return ( 
		<div className="p-0">
			<div className="p-3 p-md-5">
				 <div className="cinzel-decorative d-flex text-center justify-content-center mb-3">
				 	<h1>SORA</h1>
				 </div>
	             
	             <div className=" h-2">
	            	 <Form>
	             		<Form.Group className="d-flex gap-4">
                            <Form.Control  type="Name or Author" placeholder="Enter Name or author" onChange={e => setSubmit(e.target.value)} value={submit} />
                            <Button onClick={handleSubmit}>Search</Button>
	             		</Form.Group>
	             	</Form>
	           	 </div>

	            <div class="w-100 h-2">
	             	<Table striped bordered hover responsive>
	             		<thead>
	             			<tr>
		             			<th>Author</th>
		             			<th>Title</th>
		             			<th>Abstract</th>
		             			<th>Views</th>
	             			</tr>
	             		</thead>
				             	<tbody>
				             		{tableData}
				             	</tbody>
	            	 </Table>
					 <Paginate className="d-flex col-10 w-100"/>	
	            </div>
			</div>
		</div>
		)
}
	

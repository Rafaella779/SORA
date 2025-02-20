
import React, {useState, useEffect, useContext } from 'react'
import {Form, ButtonGroup, SplitButton, Button, Table, Container } from 'react-bootstrap'
import Swal from 'sweetalert2'

export default function HomePage() {

	  const [authors, setAuthors] = useState("")
      const [title, setTitle] = useState("")
      const [abstract, setAbstract] = useState("")
      const [view, setView] = useState("")

      const handleSubmit = () => {
            fetch(`https://sora-q8wl.onrender.com/research/getAll`, {
                  method: "GET",
                  headers: {"Content-Type": "application/json"},
                  /*body: JSON.stringify({
                        e: email,
                        t: Title,
                        a: Abstract,
                        v: Views, 
                  }) */
            }).then(result => result.json()).then(res => {
                  res.map(x => {
                        return(
                              <tr>
                                    <td>{x.authosr}</td>
                                    <td>{x.title}</td>
                                    <td>{x.abstract}</td>
                                    <td>{x.view}</td>
                              </tr>
                        )
                  })
                  
            })
      }


      let studentData = [
 	  {	
      	authors: "Nancy",
      	title: "Robotics",
      	abstract: "delulu",
        view: "35,000",
      }
     ]
      

      let tableData = studentData.map(x => {
      	return(
      		<tr>
      			<td>{x.authors}</td>
                <td>{x.title}</td>
                <td>{x.abstract}</td>
                <td>{x.view}</td>
      		</tr>
      	)
      })

	return ( 
		<div>
			<div>
				 <div className="cinzel-decorative d-flex text-center justify-content-center">
				 	<h1>SORA</h1>
				 </div>
	             
	             <div className="w-75 h-2">
	            	 <Form>
	             		<Form.Group className="d-flex gap-4">
	             			<Form.Control  type="Name or Author" placeholder="Search" />
	             		</Form.Group>
	             	</Form>
	           	 </div>
	            <div className="w-100 h-2">
	             	<Table striped bordered hover>
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
	            </div>
			</div>
		</div>
		)
}
			
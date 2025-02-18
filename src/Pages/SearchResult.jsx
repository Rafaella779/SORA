import React, {useState, useEffect, useContext } from 'react'
import { Form, Button, Table,} from 'react-bootstrap';
import Swal from 'sweetalert2'
export default function SearchResult() {

      const [author, setAuthor] = useState("")
      const [title, setTitle] = useState("")
      const [abstract, setAbstract] = useState("")
      const [views, setViews] = useState("")

      const handleSubmit = () => {
            fetch(`https://sora-q8wl.onrender.com/user/createUser`, {
                  method: "POST",
                  headers: {"Content-Type": "application/json"},
                  body: JSON.stringify({
                        e: email,
                        
                  })
            }).then(result => result.json()).then(res => {
                  if(result.error){
                        console.log(res)
                        Swal.fire({
                              icon: "error",
                              title: "invalid Credentials",
                              text: `${res.error} check your details and try again`
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
                              setAuthor(res.name);
                              setTitle(res.title);
                              setAbstract(res.abstract);
                              setViews(res.views);
                        })

                  }
            })
      }


      let studentData = [
 	  {	
      	Author: "Nancy",
      	Title: "Robotics",
      	Abstract: "delulu",
            Views: "35,000",
         }
     ]
      

      let tableData = studentData.map(x => {
      	return(
      		<tr>
      			<td>{x.Author}</td>
      			<td>{x.Title}</td>
      			<td>{x.Abstract}</td>
                        <td>{x.Views}</td>
      		</tr>
      	)
      })

      return ( 
            <div class="fullPage p-5">
                  <div>
                         <div className="cinzel-decorative d-flex text-center justify-content-center">
                              <h1>SORA</h1>
                         </div>
                   
                          <div className="w-75 h-2">
                               <Form>
                                    <Form.Group class="d-flex gap-4">
                                          <Form.Control  type="Name or Author" placeholder="Enter Name or author" />
                                          <Button>Search</Button>
                                    </Form.Group>
                              </Form>
                         </div>
                  </div>

                  <div>
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
       )
}


      
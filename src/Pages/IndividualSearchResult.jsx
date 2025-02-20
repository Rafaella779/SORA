import React, {useState, useEffect, useContext } from 'react'
import { Form, Button, Table,} from 'react-bootstrap';
import Swal from 'sweetalert2'
export default function IndividualSearchResult() {

      const [author, setAuthor] = useState("")
      const [title, setTitle] = useState("")
      const [date, setDate] = useState("")
      const [abstract, setAbstract] = useState("")
      const [contact, setContact] = useState("")
      const [educationalLevel, setEducationalLevel] = useState("")

      const handleSubmit = () => {
            fetch(`https://sora-q8wl.onrender.com/user/createUser`, {
                  method: "POST",
                  headers: {"Content-Type": "application/json"},
                  body: JSON.stringify({
                        n: Name,
                        t: Title,
                        d: Date,
                        a: Abstract,
                        c: Contact,
                        e: EducationalLevel,
                        
                  })
            }).then(result => result.json()).then(result => {
            })
      }

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
                                          <Button onClick={handleSubmit}>Search</Button>
                                    </Form.Group>
                              </Form>
                         </div>
                  </div>
                  <div className="border-2px col p-4">
                        <div className="border-2px col p-4">
                              title and author and date
                        </div>
                        <div className="border-2px col p-4">
                             Abstract 
                        </div>
                        <div className="border-2px col p-4">
                              contact and educational level  
                        </div>
                  </div>
                  <div class="row">
                        <div class="col-6 d-flex justify-content-center align-items-center">
                              <div>
                                     <h5 className="color-5">Log In to SORA</h5>
                                          <Form className="col-5 row w-600 border-2px">
                                                <Form.Group className="mb-3" controller="formBasicEmail">
                                                      <Form.Label>Email address</Form.Label>
                                                      <Form.Control type="email" placeholder="Enter email" onChange={e => setUsername(e.target.value)} value={username} />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controller="formBasicPassword">
                                                      <Form.Label>Password</Form.Label>
                                                      <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password}/>
                                                      <Button variant="ForgotPassword">Forgot password?</Button>
                                                </Form.Group>
                                                      <div className="d-flex justify-content-center align-items-center">
                                                            <Button onClick={handleSubmit}>Submit</Button>
                                                      </div>
                                          </Form>
                              </div>
                        </div>
                  </div>
            </div>
      )
}


      
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
                        
                  })
            }).then(result => result.json()).then(result => {
                  if(result.error){
                        console.log(result)
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
                              setDate(res.setDate);
                              setAbstract(res.abstract);
                              setContact(res.contact);
                              setEducationalLevel(res.educationalLevel);

                        })

                  }
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
            </div>
      )
}


      
import React, {useState, useEffect, useContext } from 'react'
import { Form, Button, Table,} from 'react-bootstrap';
import {useParams} from 'react-router'
import Swal from 'sweetalert2'
export default function IndividualSearchResult() {

      const [author, setAuthor] = useState("")
      const [title, setTitle] = useState("")
      const [date, setDate] = useState("")
      const [abstract, setAbstract] = useState("")
      const [contact, setContact] = useState("")
      const [educationalLevel, setEducationalLevel] = useState("")
      const [submit, setSubmit] = useState("") 
      const [info, setInfo] = useState("") 
      let params = useParams()

      useEffect(() => {
            fetch(`https://sora-q8wl.onrender.com/research/getAll`, {
                  method: "POST",
                  headers: {"Content-Type": "application/json"},
                  body: JSON.stringify({
                       toFind: {
                        _id: params.id
                       }
                  })
            }).then(result => result.json()).then(res => {
                  console.log(res)
                  setInfo(res[0])
            })
      }, [])

      const handleSubmit = () => {
            
      }

      return ( 
            <div class="fullPage p-5">
                  <div>
                         <div className="cinzel-decorative d-flex text-center justify-content-center">
                              <h1>SORA</h1>
                         </div>
                   
                          <div className="w-75 h-2">
                               <Form>
                                    <Form.Group className="d-flex gap-4">
                                          <Form.Control  type="Name or Author" placeholder="Enter Name or author" onChange={e => setSubmit(e.target.value)} value={submit}/>
                                          <Button onClick={handleSubmit}>Search</Button>
                                    </Form.Group>
                              </Form>
                         </div>
                  </div>
                  <div className="border-2px col p-4">
                        <div className="b-1px col p-4">
                              Title: {info.title}
                        </div>
                        <div className="b-1px col p-4">
                              Author: {info.authors.map(x => {return <p>{x.name}</p>})}
                        </div>
                        <div className="b-1px col p-4">
                             Abstract: {info.abstract }
                        </div>
                        <div className="b-1px col p-4">
                              Approval Request Date: {info.approvalrequestDate}
                        </div>
                        <div className="b-1px col p-4">
                              Approvals Count: {info.approvalsCount}
                        </div>
                        <div className="b-1px col p-4">
                              Category: {info.category}
                        </div>
                        <div className="b-1px col p-4">
                              Cite: {info.cite}
                        </div>
                        <div className="b-1px col p-4">
                              Created At: {info.createdAt}
                        </div>
                        <div className="b-1px col p-4">
                              Date Modified: {info.dateModified}
                        </div>
                        <div className="b-1px col p-4">
                              Is Approved By School: {info.isApprovedBySchool}
                        </div>
                        <div className="b-1px col p-4">
                              is Published: {info.isPublished}
                        </div>
                        <div className="b-1px col p-4">
                              Link: {info.link}
                        </div>
                        <div className="b-1px col p-4">
                              Ratings: {info.ratings}
                        </div>
                        <div className="b-1px col p-4">
                              Rejection Count: {info.rejectionCount}
                        </div>
                        <div className="b-1px col p-4">
                              Research Status: {info.researchStatus}
                        </div>
                        <div className="b-1px col p-4">
                              Updated At: {info.updatedAt}
                        </div>
                        <div className="b-1px col p-4">
                              Views: {info.view}
                        </div>
                        <div className="b-1px col p-4">
                              V: {info.__v}
                        </div>
                        <div className="b-1px col p-4">
                              Id: {info._id}
                        </div>
                  </div>
            </div>
      )
}


      
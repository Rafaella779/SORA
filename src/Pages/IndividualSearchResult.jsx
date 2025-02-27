import React, {useState, useEffect, useContext } from 'react'
import { Form, Button, Table,} from 'react-bootstrap';
import {useParams} from 'react-router'
import Swal from 'sweetalert2'
export default function IndividualSearchResult() {

      const [authors, setAuthors] = useState("")
      const [title, setTitle] = useState("")
      const [ApprovalRequestDate, setApprovalRequestDate] = useState("")
      const [abstract, setAbstract] = useState("")
      const [approvalsCount, setApprovalsCount] = useState("")
      const [category, setCategory] = useState("")
      const [cite, setCite] = useState("") 
      const [createdAt, setCreatedAt] = useState("") 
      const [dateModified, setDateModified] = useState("") 
      const [isApprovedBySchool, setIsApprovedBySchool] = useState("") 
      const [isPublished, setIsPublished] = useState("") 
      const [link, setLink] = useState("") 
      const [ratings, setRatings] = useState("") 
      const [rejectionCount, setRejectionCount] = useState("") 
      const [researchStatus, setResearchStatus] = useState("") 
      const [updatedAt, setUpdatedAt] = useState("") 
      const [views, setViews] = useState("") 
      const [v, setV] = useState("") 
      const [id, setId] = useState("") 
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
                  setAuthors(res[0])
                  setTitle(res[0])
                  setApprovalRequestDate(res[0])
                  setAbstract(res[0])
                  setApprovalsCount(res[0])
                  setCategory(res[0])
                  setCite(res[0])
                  setCreatedAt(res[0])
                  setDateModified(res[0])
                  setIsApprovedBySchool(res[0])
                  setIsPublished(res[0])
                  setLink(res[0])
                  setRatings(res[0])
                  setRejectionCount(res[0])
                  setUpdatedAt(res[0])
                  setViews(res[0])
                  setV(res[0])
                  setId(res[0])
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
                              Title: {title}
                        </div>
                        <div className="b-1px col p-4">
                              Author: {Authors.map(x => {return <p>{x.name}</p>
                                                })
                                       }
                        </div>
                        <div className="b-1px col p-4">
                             Abstract: {abstract }
                        </div>
                        <div className="b-1px col p-4">
                              Approval Request Date: {approvalrequestDate}
                        </div>
                        <div className="b-1px col p-4">
                              Approvals Count: {approvalsCount}
                        </div>
                        <div className="b-1px col p-4">
                              Category: {category}
                        </div>
                        <div className="b-1px col p-4">
                              Cite: {cite}
                        </div>
                        <div className="b-1px col p-4">
                              Created At: {createdAt}
                        </div>
                        <div className="b-1px col p-4">
                              Date Modified: {dateModified}
                        </div>
                        <div className="b-1px col p-4">
                              Is Approved By School: {isApprovedBySchool}
                        </div>
                        <div className="b-1px col p-4">
                              is Published: {isPublished}
                        </div>
                        <div className="b-1px col p-4">
                              Link: {link}
                        </div>
                        <div className="b-1px col p-4">
                              Ratings: {ratings}
                        </div>
                        <div className="b-1px col p-4">
                              Rejection Count: {rejectionCount}
                        </div>
                        <div className="b-1px col p-4">
                              Research Status: {researchStatus}
                        </div>
                        <div className="b-1px col p-4">
                              Updated At: {updatedAt}
                        </div>
                        <div className="b-1px col p-4">
                              Views: {view}
                        </div>
                        <div className="b-1px col p-4">
                              V: {v}
                        </div>
                        <div className="b-1px col p-4">
                              Id: {id}
                        </div>
                  </div>
            </div>
      )
}


      
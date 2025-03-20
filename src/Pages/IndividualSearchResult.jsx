import React, {useState, useEffect, useContext } from 'react'
import { Form, Button, Table, Card } from 'react-bootstrap';
import {useParams} from 'react-router'
import Swal from 'sweetalert2'
export default function IndividualSearchResult() {

      const [Authors, setAuthors] = useState([])
      const [title, setTitle] = useState("")
      const [approvalrequestDate, setApprovalRequestDate] = useState("")
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
      const [view, setView] = useState("") 
      const [id, setId] = useState("") 
      const [submit, setSubmit] = useState("") 
      const [info, setInfo] = useState("") 
      let params = useParams()

      useEffect(() => {
            fetch(`${import.meta.env.VITE_BACKEND}/research/getIndividual`, {
                  method: "POST",
                  headers: {
                        "Content-Type": "application/json",
                        "authorization": `Bearer ${localStorage.getItem('t')}`
                  },
                  body: JSON.stringify({
                       toFind: {
                        _id: params.id
                       },
                       options: localStorage.getItem('i')
                  })
            }).then(result => result.json()).then(res => {
                  console.log(res)
                  setInfo(res)
                  setAuthors(res.authors)
                  setTitle(res.title)
                  setApprovalRequestDate(res.approvalrequestDate)
                  setAbstract(res.abstract)
                  setApprovalsCount(res.approvalsCount) 
                  setCite(res.cite)
                  setCreatedAt(res.createdAt)
                  setDateModified(res.dateModified)
                  setIsApprovedBySchool(res.isApprovedBySchool)
                  setIsPublished(res.isPublished)
                  setLink(res.link)
                  setRatings(res.ratings)
                  setRejectionCount(res.rejectionCount)
                  setUpdatedAt(res.updatedAt)
                  setView(res.view)
                  setId(res._id)
            })
      }, [])
      
      const handleSubmit = () => {
            
      }

      return (
      <div className="p-3">
            <div className="justify-content-center d-flex mt-md-4 ">
                  <div className="b-1px col p-4 w-100 mw-1000">
                        <h1 class="light p-0 d m-0"><strong></strong> {title}</h1>
                        <h6 class="light p-0  m-0"><strong>Author: </strong>{Authors.map(x => {return <>{x.name};</>})}</h6>
                        <hr />
                        <p class="light p-0  m-0"><strong>Abstract:</strong> {abstract }</p>
                        <p class="light p-0  m-0"><strong>Approval Request Date:</strong> {approvalrequestDate}</p>
                        <p class="light p-0  m-0"><strong>Approvals Count:</strong> {approvalsCount}</p>
                        <p class="light p-0  m-0"><strong>Cite:</strong> {cite}</p>
                        <p class="light p-0  m-0"><strong>Created At:</strong> {createdAt}</p>
                        <p class="light p-0  m-0"><strong>Date Modified:</strong> {dateModified}</p>
                        <p class="light p-0  m-0"><strong>Is Approved By School:</strong> {isApprovedBySchool}</p>
                        <p class="light p-0  m-0"><strong>Is Published:</strong> {isPublished}</p>
                        <p class="light p-0  m-0 text-break"><strong>Link:</strong> <a href={link}>{link}</a></p>
                        <p class="light p-0  m-0"><strong>Ratings:</strong> {ratings}</p>
                        <p class="light p-0  m-0"><strong>Rejection Count:</strong> {rejectionCount}</p>
                        <p class="light p-0  m-0"><strong>Research Status:</strong> {researchStatus}</p>
                        <p class="light p-0  m-0"><strong>Updated At:</strong> {updatedAt}</p>
                        <p class="light p-0  m-0"><strong>Views:</strong> {view}</p>
                        <p class="light p-0  m-0"><strong>Id:</strong> {id}</p>
                  </div>
            </div>
      </div>
      )
}

 
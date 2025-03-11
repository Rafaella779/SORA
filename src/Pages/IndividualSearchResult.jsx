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
                  setAuthors(res[0].authors)
                  setTitle(res[0].title)
                  setApprovalRequestDate(res[0].approvalrequestDate)
                  setAbstract(res[0].abstract)
                  setApprovalsCount(res[0].approvalsCount) 
                  setCite(res[0].cite)
                  setCreatedAt(res[0].createdAt)
                  setDateModified(res[0].dateModified)
                  setIsApprovedBySchool(res[0].isApprovedBySchool)
                  setIsPublished(res[0].isPublished)
                  setLink(res[0].link)
                  setRatings(res[0].ratings)
                  setRejectionCount(res[0].rejectionCount)
                  setUpdatedAt(res[0].updatedAt)
                  setView(res[0].view)
                  setId(res[0]._id)
            })
      }, [])
      
      const handleSubmit = () => {
            
      }

      return (
      <div className="p-3">
            <div className="justify-content-center d-flex mt-md-4 ">
                  <div className="b-1px col p-4 w-100 mw-1000">
                        <h1 class="light p-0 d-none d m-0"><strong></strong> {title}</h1>
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
                        <div>
                              <BasicExample />
                        </div>                                  
                  </div>
            </div>
      </div>
      )
}

 function BasicExample() {
  return (
    <Card style={{ width: '15rem' }}>
      <Card.Body>
      <Card.Img variant="top" src="https://tse1.mm.bing.net/th?id=OIP.dsN8jTQnZukDvJ43Pu63MAHaHa&pid=Api" />
        <Card.Title className="cinzel-decorative">SORA</Card.Title>
        <Card.Text>
          copyright
        </Card.Text>
        <Card.Text>
          STE 2024
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
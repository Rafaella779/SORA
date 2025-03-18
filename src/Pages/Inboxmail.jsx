import React, {useState, useEffect, useContext } from 'react'
import { Form, Button, Table,} from 'react-bootstrap';
import {useParams} from 'react-router'
import Swal from 'sweetalert2'
export default function Inboxmail() {

      
      const [senderId, setsenderId] = useState("") 
      const [receiveId, setreceiveId] = useState("") 
      const [researchId, setresearchId] = useState("") 
      const [message , setmessage] = useState("") 
      const [_id, setId] = useState("") 
      let params = useParams()

      useEffect(() => {
            fetch(`${import.meta.env.VITE_BACKEND}/mail/sendNotification`, {
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
                  setsenderId(res[0].senderId)
                  setreceiveId(res[0].receiveId)
                  setresearchId(res[0].researchId)
                  setmessages(res[0].message)
                  setId(res[0]._id)

            })
      }, [])
      
      const handleSubmit = () => {
            
      }

      return (
            <div className="justify-content-center d-flex mt-md-4 ">
                  <div className="b-1px col p-4 w-100 mw-1000">
                        
                        <p class="light p-0  m-0"><strong>Sender:</strong> {senderId}</p>
                        <p class="light p-0  m-0"><strong>Receiver:</strong> {receiveId}</p>
                        <p class="light p-0  m-0"><strong>Research:</strong> {_id}</p>
                        <p class="light p-0  m-0"><strong>Message:</strong> {message}</p>
                        <div>
                              {/*<div className="d-flex justify-content-begin flex-column mw-200">
                                <img src="https://tse1.mm.bing.net/th?id=OIP.dsN8jTQnZukDvJ43Pu63MAHaHa&pid=Api"/>
                              </div>
                              <div>copy right 2024</div> 
                              <div>STE</div> */}
                        </div>                                     
                  </div>
            </div>
      )
}


      
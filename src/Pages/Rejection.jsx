import React, {useState, useEffect, useContext } from 'react'
import {Form, ButtonGroup, SplitButton, Button, Table} from 'react-bootstrap'

export default function Rejection(){

const [rejectiomcomments, setrejectioncomment] = useState("")
 
return(

	<>
<Form.Label>Rejection Comments</Form.Label>
<Form.Control onChange={e => setrejectioncomment(e.target.value)} value={rejectiomcomments}/>


	</>

)






}
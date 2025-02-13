import {useState, useEffect} from 'react';
import {Button, Form} from 'react-bootstrap';

export default function Register() {

const [formReturn, setFormReturn] = useState();

const handleTeacher = () => {

set FormReturn(<RegisterTeacher />)

}

const handleStudent = () => {

setFormReturn(<RegisterStudent />)

}

return(<div className="d-flex flex-column p-5">

{

(formReturn == null) ?

<>

<h1>Register Page</h1>

<div className="d-flex gap-1">

<Button onClick={handleTeacher}>Teacher</Butt

<Button onClick={handleStudent}>Student</Butt

</div>

</>

: <></>

}

<div className="w-25 mt-5">

{formReturn)

</div>

</div>)

}

function RegisterStudent() {

const [page, setPage] = useState(1);

let p1 = <Form.Group>

<Form.Label>Username</Form.Label>

<Form.Control type="username"/>

<Form.Label>Email address</Form.Label>

<Form.Control type="email"/>

<Form.Label>Password </Form.Label>

<Form.Control type="password"/>

</Form.Groups

import React, {useState, useEffect, useContext} from 'react'
import { Button, Form, Container, Nav, Navbar, NavDropdown, Card, Modal, SplitButton, ButtonGroup, Table } from 'react-bootstrap'
import Swal from 'sweetalert2'


export default function AdminDashboard() {

	const [Active, setActive] = useState(1) 
  const [iLength, setiLength] = useState("") 
  const [iPerPage, setiPerPage] = useState(10) 

	let teacherData = [
			{
				Fname: "Rafaella",
				Mname: "Sabot",
				Lname: "Sabenorio",
				GoogleDriveLink: "sdheqyhbd na"
			},
			{
				Fname: "Jobert",
				Mname: "Sabot",
				Lname: "Novela",
				GoogleDriveLink: "sdheqyhbd na"
			},
			{
				Fname: "Giily",
				Mname: "Sabot",
				Lname: "Jean",
				GoogleDriveLink: "sdheqyhbd na"
			},
			{
				Fname: "Giily",
				Mname: "Sabot",
				Lname: "Jean",
				GoogleDriveLink: "sdheqyhbd na"
			},
			{
				Fname: "Giily",
				Mname: "Sabot",
				Lname: "Jean",
				GoogleDriveLink: "sdheqyhbd na"
			},
			{
				Fname: "Giily",
				Mname: "Sabot",
				Lname: "Jean",
				GoogleDriveLink: "sdheqyhbd na"
			},
			{
				Fname: "Giily",
				Mname: "Sabot",
				Lname: "Jean",
				GoogleDriveLink: "sdheqyhbd na"
			},
			{
				Fname: "Giily",
				Mname: "Sabot",
				Lname: "Jean",
				GoogleDriveLink: "sdheqyhbd na"
			},
			{
				Fname: "Giily",
				Mname: "Sabot",
				Lname: "Jean",
				GoogleDriveLink: "sdheqyhbd na"
			},
			{
				Fname: "Giily",
				Mname: "Sabot",
				Lname: "Jean",
				GoogleDriveLink: "sdheqyhbd na"
			},
			{
				Fname: "Giily",
				Mname: "Sabot",
				Lname: "Jean",
				GoogleDriveLink: "sdheqyhbd na"
			},
			{
				Fname: "Giily",
				Mname: "Sabot",
				Lname: "Jean",
				GoogleDriveLink: "sdheqyhbd na"
			},
			{
				Fname: "Giily",
				Mname: "Sabot",
				Lname: "Jean",
				GoogleDriveLink: "sdheqyhbd na"
			},
			{
				Fname: "Giily",
				Mname: "Sabot",
				Lname: "Jean",
				GoogleDriveLink: "sdheqyhbd na"
			},
			{
				Fname: "Giily",
				Mname: "Sabot",
				Lname: "Jean",
				GoogleDriveLink: "sdheqyhbd na"
			},
			{
				Fname: "Giily",
				Mname: "Sabot",
				Lname: "Jean",
				GoogleDriveLink: "sdheqyhbd na"
			}
		]

  let tableData = teacherData.map(x => {
 		return(
  		<tr>
  			<td>{x.Fname}</td>
  			<td>{x.Mname}</td>
  			<td>{x.Lname}</td>
  			<td>{x.GoogleDriveLink}</td>
      </tr>
    ) 
  })

  useEffect(() => {
      	    if (tableData.length > 0){
      }

      }, [Active]) 
  
	return(
		<div>
			<div className="p-4 p-lg-5">
				 <div className="cinzel-decorative d-flex text-center justify-content-center">
				 	<h1>SORA</h1>
				 </div>
				 <div>
				 	<h5 className="pt-serif-bold">Applicants</h5>
				 </div>
	            <div class="w-100 h-2">
	             	<Table striped bordered hover responsive>
	             		<thead>
	             			<tr>
		             			<th>FName</th>
		             			<th>MName</th>
		             			<th>LName</th>
		             			<th>GoogleDriveLink</th>
	             			</tr>
	             		</thead>
				             	<tbody>
				             		{tableData}
				             	</tbody>
	            	 </Table>
	          </div>
			</div>
		</div>

	)
}

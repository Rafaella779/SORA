import React, {useState, useEffect, useContext} from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate, Outlet } from 'react-router'
import Swal from 'sweetalert2'

export default function ViewPage() {
      let n = useNavigate()

	return ( 
		<div className="d-flex">
	        <div className="b-1px m-1 p-1">
	        	<h5 className="pt-serif-bold">Pending</h5>
				<Pending title="what?" author="enrico" abstract="the blablabla" />
				
				<Pending title="what?" author="enrico" abstract="the blablabla" />
				
				<Pending title="what?" author="enrico" abstract="the blablabla" />
			
				<Pending title="what?" author="enrico" abstract="the blablabla" />
				
		    </div>
		    <div className="b-1px m-1 p-1">
		    	<h5 className="pt-serif-bold">Approved</h5>
				<Approved title="huh?" author="leisha" abstract="omkey" />
			
				<Approved title="huh?" author="leisha" abstract="omkey" />
			
				<Approved title="huh?" author="leisha" abstract="omkey" />
	
				<Approved title="huh?" author="leisha" abstract="omkey" />
			
		    </div> 
		</div>
		)
}

function Pending({author, abstract, title, pending}){

	return(
		<div>
			<div className="m-1 p-1 d-flex flex-column">
				<p className="m-0 p-0"><strong>Title:</strong> {title}</p>
				<p className="m-0 p-0"><strong>Author:</strong> {author}</p>
				<p className="m-0 p-0"><strong>Abstract:</strong> {abstract}</p>
			</div>
		</div>
	)
}
			
function Approved({author, abstract, title}){
	return(
		<div className="b-1px">
			<div className="m-1 p-1 d-flex flex-column">
				<p className="m-0 p-0"><strong>Title:</strong> {title}</p>
				<p className="m-0 p-0"><strong>Author:</strong> {author}</p>
				<p className="m-0 p-0"><strong>Abstract:</strong> {abstract}</p>
			</div>
		</div>
	)
}


			
		
			         	
		     

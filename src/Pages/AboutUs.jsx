import jobert from "../assets/jobert.jpeg"
import lisya from "../assets/lisya.jpeg"
import rean from "../assets/rean.jpg"
import gilly from "../assets/gilly.jpg"
import rafaella from "../assets/rafaella.jpeg"
import React from "react";
import { Button, Card} from 'react-bootstrap'

export default function AboutUs() {

	return ( 
		<div>
			<div>
				<div>
					<h3 className="d-flex justify-content-center align-items-center">About us</h3>
				</div>
			</div>
			<div>
				<div className="d-flex justify-content-center align-items-center">
					<h5>Members</h5>
				</div>
				<div className=" d-flex justify-content-center ">
					<StudentCard picLink={lisya} name="Leisha Mariel Grutas"/>
					<StudentCard picLink={jobert} name="Jhon Robert Novela"/>
					<StudentCard picLink={gilly} name="Gilly Jean De Castro"/>
					<StudentCard picLink={rean} name="Rean Paclibar" />
					<StudentCard picLink={rafaella} name="Rafaella Sabenorio"/>
				</div>
			</div>
			<div>
				<div>
					<h4 className="d-flex justify-content-center align-items-center">Our Story</h4>
					<p className="d-flex justify-content-center align-items-center">once upon a time there were 5 students struggling to pass the</p>
				</div>
			</div>
		</div>
	)

}


function StudentCard({picLink, name}){
	return(<>
		<div className="border-2px p-2 d-flex align-items-center aboutUsCard flex-column h-auto ">
			<div className="d-flex">
				<img src={picLink} alt="" className="aboutUsPic" />
			</div>
			<h6 className="p-2 d-flex text-center">{name}</h6>
			<p>A student of JNHS</p>
		</div>

	</>)
}
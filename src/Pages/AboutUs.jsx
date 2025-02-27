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
					<h3 className="d-flex justify-content-center align-items-center pt-serif-bold ">About us</h3>
				</div>
			</div>
			<div>
				<div className="d-flex justify-content-center align-items-center">
					<h5 className="pt-serif-bold ">Members</h5>
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
					<h4 className="d-flex justify-content-center align-items-center pt-serif-bold">Our Story</h4>
					<p class="light p-0  m-0"><strong>Once upon a time in a school named Juban National High School, there were 5 students namely Leisha, Rean, Gilly, Jobert, and Rafaella. One day they happen to face a problem in a subject called Research. They needed a research topic, each member gave problems that should have a solution. One problem stood out the most, it is a problem that they also tackled in research, a problem that most researchers encounter, finding local Review of Related Literature. Upon agreeing on choosing that problem they came up with a solution with the help of their research teacher, the solution is a website, where local researches within Sorsogon can be found. They named this website SORA (Students Online Research Archive).</strong></p>
				</div>
			</div>
		</div>
	)

}


function StudentCard({picLink, name}){
	return(<>
		<div className="b-1px p-2 d-flex align-items-center aboutUsCard flex-column h-auto ">
			<div className="d-flex">
				<img src={picLink} alt="" className="aboutUsPic" />
			</div>
			<h6 className="p-2 d-flex text-center">{name}</h6>
			<p>A student of JNHS</p>
		</div>

	</>)
}
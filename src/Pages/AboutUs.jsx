import jobert from "../assets/jobert.jpeg"
import lisya from "../assets/lisya.jpeg"
import rean from "../assets/rean.jpg"
import gilly from "../assets/gilly.jpg"
import rafaella from "../assets/rafaella.jpeg"
import React from "react";
import { Button, Card} from 'react-bootstrap'

export default function AboutUs() {

	return ( 
		<div className="d-flex justify-content-center p-4 mnh-700 navbar-border p-body">
			<div className="mw-1200">
				<h3 className="d-flex justify-content-center align-items-center pt-serif-bold f-30">About us</h3>
				<div className="d-flex flex-column p-3">
					<h4 className="d-flex pt-serif-bold f-20">Meet The Team</h4>
					<p className="light text-center"><strong>Once upon a time in a school named Juban National High School, there were 5 students namely Leisha, 
					 Rean, Gilly, Jobert, and Rafaella. One day they happen to face a problem in a subject called Research.
					 They needed a research topic, each member gave problems that should have a solution. One problem stood out the most, it is a problem 
					 that they also tackled in research, a problem that most researchers encounter, finding local Review of Related Literature. Upon agreeing 
					 on choosing that problem they came up with a solution with the help of their research teacher, the solution is a website, where local researches
					 within Sorsogon can be found. They named this website SORA (Students Online Research Archive).</strong></p>
				</div>
				<div>
					<div className="d-flex justify-content-center align-items-center">
						<h2 className="pt-serif-bold">Members</h2>
					</div>
  
					<div className="d-flex justify-content-center flex-wrap text-center">
						 <StudentCard description="Currently a student at Juban National High School, and the backend developer of this website." picLink={lisya} name="Leisha Mariel Grutas"/>
						<StudentCard description="Currently a student at Juban National High School, and the frontend developer of this website." picLink={jobert} name="Jhon Robert Novela"/>
						<StudentCard description="Currently a student at Juban National High School, and the secretary of the group." picLink={gilly} name="Gilly Jean De Castro"/>
						<StudentCard description="Currently a student at Juban National High School, and the frontend developer of this website." picLink={rean} name="Rean Paclibar" />
						<StudentCard description="Currently a student at Juban National High School, and the frontend developer of this website." picLink={rafaella} name="Rafaella Sabenorio"/>
					</div>
				</div>
			</div>
		</div>
	)

}


function StudentCard({picLink, name, description}){
	return(<div className="p-1 m-0 col-6 col-md-4 col-lg-2">
		<div className=" m-0 p-0 d-flex align-items-center aboutUsCard flex-column h-auto ">
			<div className="d-flex">
				<img src={picLink} alt="" className="aboutUsPic w-100 " />
			</div>
			<div className="text-center py-2 ">
				<h6 className="text-center m-0">{name}</h6>
				<p className=" p-0 m-0">{description}</p>
			</div>
		</div>

	</div>)
}
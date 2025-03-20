import React, {useState, useEffect, useContext} from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import Swal from 'sweetalert2'

export default function ViewPage() {
     
      const [research, setResearch] = useState([])
      const [active, setActive] = useState(1) 
      const [iLength, setILength] = useState([]) 
      const [iPerPage, setIPerPage] = useState(10) 
      let n = useNavigate();

       useEffect(() => {
            fetch(`${import.meta.env.VITE_BACKEND}/research/getByUser`, {
                  method: "POST",
                  headers: {
                  	"Content-Type": "application/json",
                  	"authorization": `Bearer ${localStorage.getItem('t')}`
                  },
                  body: JSON.stringify({
                  	skip: active,
                  	iLength: iLength
                  })
            }).then(result => result.json()).then(result => {
            	console.log(result)
                  setResearch(result.map((x, i) => {
				return <ResearchCard title={x.title} author={x.authors.map((y, j) => {return <>({j + 1}) {y.name}; </>})} abstract={(x.abstract.length >= 200) ? `${x.abstract.substring(0, 200)}...` : x.abstract} id={x._id}/>
			}));
                  
            })
      }, [])



	return (
	
		<div className="d-flex flex-column w-100 p-2 p-md-4 gap-2">
					
			<div className="d-flex flex-column flex-lg-row flex-wrap w-100 gap-3">
				
		        <div className="d-flex flex-column gap-2 b-1px p-3 w-100">
		        	<div className="d-flex w-100 justify-content-between">
						<h3>Your Research</h3>
						<Button onClick={() => {n('/upload')}}>Upload Research</Button>
					</div>
					<div className="d-flex w-100 flex-wrap ">
						{
							(research.length > 0) ? 
								research
								
							:
								<div className="bg-m-6 w-100 px-2 py-5 b-1px">
									<h6>You haven't uploaded any research papers</h6>
								</div>
							
						}
					</div>
		        	
			    </div>
		    </div>
		</div>

		)
}

function ResearchCard({author, abstract, title, id}){
	 let n = useNavigate()
	return(
		<div className="p-1 col-12 col-md-4 col-lg-3">
			<div className="b-1px bg-m-6 h-100 " onClick={() => n(`/IndividualSearchResult/${id}/1`)}>
				<div className="m-1 p-1 d-flex flex-column">
					<p className="m-0 p-0"><strong>Title:</strong> {title}</p>
					<p className="m-0 p-0"><strong>Author:</strong> {author}</p>
					<p className="m-0 p-0"><strong>Abstract:</strong> {abstract}</p>
				</div>
			</div>
		</div>
	)
}

			
		
			         	
		     
		
import React, {useState, useEffect, useContext} from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import Swal from 'sweetalert2'
import Paginate from "../Components/Pagination.jsx"

export default function ViewPage() {
     
      const [research, setResearch] = useState([])
      const [active, setActive] = useState([]) 
      const [iLength, setILength] = useState([]) 
      const [iPerPage, setIPerPage] = useState([]) 
      let n = useNavigate();

       useEffect(() => {
            fetch(`${import.meta.env.VITE_BACKEND}/research/getByUser`, {
                  method: "POST",
                  headers: {
                  	"Content-Type": "application/json",
                  	"authorization": `Bearer ${localStorage.getItem('t')}`
                  },
                  body: JSON.stringify({
                       	toFind: {
                    		_id: localStorage.getItem('t')
                       	}
                  })
            }).then(result => result.json()).then(result => {
                  console.log(result)
            })
      }, [])



	return (
	
		<div className="d-flex flex-column w-100 p-2 p-md-4 gap-2">
					
			<div className="d-flex flex-column flex-lg-row flex-wrap w-100 gap-3">
				
		        <div className="d-flex flex-column gap-2 b-1px p-3 w-100">
		        	<div className="d-flex w-100 justify-content-between">
						<h3>My Research</h3>
						<Button onClick={() => {n('/upload')}}>Add</Button>
					</div>
					<div className="d-flex w-100">
						{
							(research.length) ? 
								research.map((x, i) => {
									<ResearchCard title={x.title} author={x.Authors.map(y => {return <>{y.name};</>})} abstract={abstract} id={y._id}/>
								})
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
		<div className="b-1px bg-m-6  col-12 col-md-6 col-lg-4" onClick={() => n('ApproveSystem')}>
			<div className="m-1 p-1 d-flex flex-column">
				<p className="m-0 p-0"><strong>Title:</strong> {title}</p>
				<p className="m-0 p-0"><strong>Author:</strong> {author}</p>
				<p className="m-0 p-0"><strong>Abstract:</strong> {abstract}</p>
			</div>
		</div>
	)
}

			
		
			         	
		     

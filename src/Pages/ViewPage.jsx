import React, {useState, useEffect, useContext} from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate, Outlet, useParams } from 'react-router'
import Swal from 'sweetalert2'

export default function ViewPage() {
     
      const [research, setResearch] = useState([])
      const [title, setTitle] = useState([])
      const [Authors, setAuthors] = useState([])
      const [abstract, setAbstract] = useState([])
      const [tableData, setTableData] = useState([]) 
      const [id, setId] = useState("") 
      let params = useParams()

       useEffect(() => {
            fetch(`${import.meta.env.VITE_BACKEND}/research/getByUser`, {
                  method: "POST",
                  headers: {"Content-Type": "application/json"},
                  body: JSON.stringify({
                       toFind: {
                        
                       }
                  })
            }).then(result => result.json()).then(res => {
                  console.log(res)
                  setInfo(res[0])
                  setAuthors(res[0].authors)
                  setTitle(res[0].title)
                  setAbstract(res[0].abstract)
                  setId(res[0]._id)
            })
      }, [])



	return (
	
		<div className="d-flex flex-column w-100 p-2 p-md-4 gap-2">
					
			<div className="d-flex flex-column flex-lg-row flex-wrap w-100 gap-3">
				
		        <div className="d-flex flex-column gap-2 b-1px p-3 w-100">
		        	<div className="d-flex w-100 justify-content-between">
						<h3>Your Researches</h3>
						<Button>Add</Button>
					</div>
					<div className="d-flex w-100">
						<ResearchCard title={title} author={Authors.map(x => {return <>{x.name};</>})} abstract={abstract} id={id}/>
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
			

			
		
			         	
		     

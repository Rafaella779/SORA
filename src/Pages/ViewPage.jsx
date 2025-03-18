import React, {useState, useEffect, useContext} from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate, Outlet, useParams } from 'react-router'
import Swal from 'sweetalert2'

export default function ViewPage() {
     
      const [pending, setPending] = useState([])
      const [approved, setApproved] = useState([])
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
                        _id: params.id
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

       useEffect(() => {
            fetch(`${import.meta.env.VITE_BACKEND}/research/getAll`, {
                  method: "POST",
                  headers: {"Content-Type": "application/json"},
                  body: JSON.stringify({
                       toFind: {
                        _id: params.id
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
	
		<div className="d-flex flex-column flex-lg-row w-100">
	        <div className="d-flex flex-column gap-2 b-1px m-1 p-3 w-100">
	        	<h5 className="pt-serif-bold">Pending</h5>
	        	<Pending title={title} author={Authors.map(x => {return <>{x.name};</>})} abstract={abstract} id={id}/>
		    </div>
		    <div className="d-flex flex-column gap-2 b-1px m-1 p-3 w-100">
		    	<h5 className="pt-serif-bold">Approved</h5>
		    	<Approved title={title} author={Authors.map(x => {return <>{x.name};</>})} abstract={abstract} id={id}/>
		    </div> 
		</div>

		)
}

function Pending({author, abstract, title, id}){
	 let n = useNavigate()
	return(
		<div className="b-1px">
			<div className="m-1 p-1 d-flex flex-column">
				<p className="m-0 p-0"><strong>Title:</strong> {title}</p>
				<p className="m-0 p-0"><strong>Author:</strong> {author}</p>
				<p className="m-0 p-0"><strong>Abstract:</strong> {abstract}</p>
				<div>
					<Button onClick={() => n('ApproveSystem')}>View</Button>
				</div>
			</div>
		</div>
	)
}
			
function Approved({author, abstract, title}){
	let n = useNavigate()
	return(
		<div className="b-1px">
			<div className="m-1 p-1 d-flex flex-column">
				<p className="m-0 p-0"><strong>Title:</strong> {title}</p>
				<p className="m-0 p-0"><strong>Author:</strong> {author}</p>
				<p className="m-0 p-0"><strong>Abstract:</strong> {abstract}</p>
				<div>
					<Button onClick={() => n('ApproveSystem')}>View</Button>
				</div>
			</div>
		</div>
	)
}


			
		
			         	
		     

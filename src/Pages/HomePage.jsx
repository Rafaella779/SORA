    import React, {useState, useEffect, useContext } from 'react'
import {Form, ButtonGroup, SplitButton, Button, Table } from 'react-bootstrap'
import {useNavigate} from 'react-router'
import Swal from 'sweetalert2'
import Paginate from '../Components/Pagination.jsx'

export default function HomePage() {

      const [authors, setAuthors] = useState("")
      const [title, setTitle] = useState("")
      const [abstract, setAbstract] = useState("")
      const [view, setView] = useState("")
      const [tableData, setTableData] = useState([]) 
      const [submit, setSubmit] = useState("") 
      const [Active, setActive] = useState(1) 
      const [iLength, setiLength] = useState("") 
      const [iPerPage, setiPerPage] = useState(10) 
      let n = useNavigate()
      const handleSubmit = () => {
            fetch(`${import.meta.env.VITE_BACKEND}/research/searchP1`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    "authorization": `Bearer ${localStorage.getItem('t')}`
                  },
                  body: JSON.stringify({
                       toFind: { 
                        
                            $or: [
                                {"title": { $regex: submit, $options: "i"}}, {"authors.name": {$regex: submit, $options: "i"}}
                            ]
                             // { "authors": { $regex: submit, $options: "i"} }
                            
                       }
                  })
            }).then(result => result.json()).then(res => {
                if (res.message){
                    setTableData("No Match Found")
                }
                else{
                console.log(res)
                setiLength(res.total)
                setTableData(res.items.map(x => {
                    let options = 0;
                    for (let i = 0; i < x.authors.length; i++) {
                        console.log("array authors", x.authors[i].i)
                        if (localStorage.getItem('i') && localStorage.getItem('i') ==  x.authors[i]._id) {
                            console.log("checking options")
                            options = 1
                        }
                    }
                    return(
                          <tr onClick={() => n(`/IndividualSearchResult/${x._id}/${options}`)}>
                                <td className="b-1px"><ol>{x.authors.map((y, i) => {
                                	return <li>{`${y.name}`}</li>
                                })}</ol></td>
                                <td className="b-1px">{x.title}</td>
                                <td className="b-1px">{(x.abstract.length >= 200) ? `${x.abstract.substring(0, 200)}...` : x.abstract}</td>
                                <td className="b-1px">{x.view}</td>
                          </tr>
                    )
                  })
                )}      
            })
      }

      useEffect(() => {
            if (tableData.length > 0){
            fetch(`${import.meta.env.VITE_BACKEND}/research/searchP2`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    "authorization": `Bearer ${localStorage.getItem('t')}`
                  },
                  body: JSON.stringify({
                       toFind: {
                        title: { $regex: submit, $options: "i"}
                       },
                       skip: Active
                  })
            }).then(result => result.json()).then(res => {
                
                console.log(res);
                
                setTableData(res.map(x => {
                    let options = 0;
                    for (let i = 0; i < x.authors.length; i++) {
                        if (localStorage.getItem('i') ==  x.authors[i].i) {
                            options = 1
                        }
                     }

                    return(
                          <tr onClick={() => n(`/IndividualSearchResult/${x._id}/${options}`)}>
                                <td className="b-1px"><ol>{x.authors.map((y, i) => {
                                    return <li>{`${y.name}`}</li>
                                })}</ol></td>
                                <td className="b-1px">{x.title}</td>
                                <td className="b-1px">{x.abstract}</td>
                                <td className="b-1px">{x.view}</td>
                          </tr>
                    )
                  })
                )  
            })
      }

      }, [Active]) 
 
	return ( 
		<div className="d-flex justify-content-center mnh-700 bg-18 p-body navbar-border">
			<div className="p-4 p-lg-5 w-100 mw-1100  ">
				 <div className="cinzel-decorative d-flex text-center justify-content-center">
				 	<h1>SORA</h1>
				 </div>
	             
	             <div className="h-2">
	            	 <Form onSubmit={(e) => {
                        e.preventDefault();
                        console.log("submitting form")
                        handleSubmit();
                    }}>
	             		<Form.Group className="d-flex gap-4">
                            <Form.Control  type="Name or Author" placeholder="Enter Name or author" onChange={e => setSubmit(e.target.value)} value={submit} />
                            <Button onClick={handleSubmit}>Search</Button>
                        </Form.Group>
                    </Form>
                 </div>

                {
                    (iLength > 0) ? 
                    <div className="d-flex flex-wrap justify-content-between">
                        <Paginate active={Active} iLength={iLength} iPerPage={iPerPage} setActive={setActive} /> 
                        <p>Showing results {(Active - 1) * 10 + 1} - {(Active - 1) * 10 + tableData.length} out of {iLength} documents</p>

                    </div>
                    : <></>
                }
	            
                    {
                        (tableData.length > 0 ) ?
                        <div className="w-100 b-1px">
        	             	<Table striped  hover responsive className=" b-1px m-0">
        	             		<thead>
        	             			<tr>

        		             			<th className="col col-lg-3 pt-serif-bold b-1px">Author</th>
        		             			<th className="col col-lg-3 pt-serif-bold b-1px">Title</th>
        		             			<th className="col col-lg-5 pt-serif-bold b-1px">Abstract</th>
        		             			<th className="col col-lg-1 pt-serif-bold b-1px">Views</th>

        	             			</tr>
        	             		</thead>
        				             	<tbody>
        				             		{tableData}
        				             	</tbody>
        	            	</Table>
                        </div>
                        : <></>
                    }
	            
                {
                    (iLength > 0) ? 
                    <div className="mt-3 d-flex flex-wrap justify-content-between">
                        <Paginate active={Active} iLength={iLength} iPerPage={iPerPage} setActive={setActive} /> 
                        <p>Showing results {(Active - 1) * 10 + 1} - {(Active - 1) * 10 + tableData.length} out of {iLength} documents</p>

                    </div>
                    
                    : <></>
                }
			</div>
		</div>
		)
}

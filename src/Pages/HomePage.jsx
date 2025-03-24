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
      const [cardData, setCardData] = useState([]) 
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
                                <td className="b-1px">{x.abstract}</td>
                                <td className="b-1px">{x.view}</td>
                          </tr>
                    )
                  }))

                  setCardData(res.items.map((x,z) => {
                    let options = 0;
                    for (let i = 0; i < x.authors.length; i++) {
                        console.log("array authors", x.authors[i].i)
                        if (localStorage.getItem('i') && localStorage.getItem('i') ==  x.authors[i]._id) {
                            console.log("checking options")
                            options = 1
                        }
                    }
                    return(
                     <SearchCard i={z + 1 + ((Active - 1) * 10)} title={x.title} author={x.authors.map((y, j) => {return <p className="m-0 p-0">({j + 1}) {y.name} </p>})} abstract={x.abstract} id={x._id}/>
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
                setCardData(res.map((x, z) => {
                        let options = 0;
                        for (let i = 0; i < x.authors.length; i++) {
                            console.log("array authors", x.authors[i].i)
                            if (localStorage.getItem('i') && localStorage.getItem('i') ==  x.authors[i]._id) {
                                console.log("checking options")
                                options = 1
                            }
                        }
                        return(
                         <SearchCard i={z + 1 + ((Active - 1) * 10)} title={x.title} author={x.authors.map((y, j) => {return <p className="m-0 p-0">({j + 1}) {y.name} </p>})} abstract={x.abstract} id={x._id}/>
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
                        <>
                            <div className="w-100 b-1px d-none d-lg-block">
            	             	<Table striped  hover responsive className=" b-1px m-0 ">
            	             		<thead>
            	             			<tr>
            		             			<th className="col col-lg-3 pt-serif-bold b-1px">Author</th>
            		             			<th className="col col-lg-3 pt-serif-bold b-1px">Title</th>
            		             			<th className="col col-lg-5 pt-serif-bold b-1px">Abstract</th>
            		             			<th className="col col-lg-1 pt-serif-bold b-1px">Views</th>
            	             			</tr>
            	             		</thead>
    				             	<tbody className="">
    				             		{tableData}
    				             	</tbody>
            	            	</Table>
                                
                            </div>
                            <div className="d-flex flex-column gap-4 d-lg-none">
                                {cardData}
                            </div>
                        </>
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
function SearchCard({author, abstract, title, id, i}){

     let n = useNavigate()
    return(
        <div className="col-12 col-md-4 col-lg-3 b-1px bg-white">
            <div className="ps-2 py-1 bg-19">
                <strong className="f-14">Entry: {i}</strong>
            </div> 
            <div className="  h-100 p-1 pt-2 pb-3" onClick={() => n(`/IndividualSearchResult/${id}/1`)}>
                <div className="m-1 p-1 d-flex flex-column">
                    <h5 className="text-break m-0 f-18"><strong>{title}</strong></h5>
                    <hr className="my-2"/>
                    <p className="m-0 p-0 text-justify f-12"><strong>Abstract:</strong> {abstract}</p>
                    <hr className="my-2"/>
                    <p className="m-0 p-0 f-12"><strong>Author(s):</strong> {author}</p>
                </div>
            </div>
        </div>
    )
}
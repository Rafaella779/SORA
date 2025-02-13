import React from 'react';
import { Form, Button, Table,} from 'react-bootstrap';
export default function SearchResult() {


      let studentData = [
 	  {	
      	Author: "Nancy",
      	Title: "Robotics",
      	Abstract: "delulu",
            Views: "35,000",
         }
     ]
      

      let tableData = studentData.map(x => {
      	return(
      		<tr>
      			<td>{x.Author}</td>
      			<td>{x.Title}</td>
      			<td>{x.Abstract}</td>
                        <td>{x.Views}</td>
      		</tr>
      	)
      })

      return ( 
            <div class="fullPage p-5">
                  <div>
                         <div className="cinzel-decorative d-flex text-center justify-content-center">
                              <h1>SORA</h1>
                         </div>
                   
                          <div className="w-75 h-2">
                               <Form>
                                    <Form.Group class="d-flex gap-4">
                                          <Form.Control  type="Name or Author" placeholder="Enter Name or author" />
                                          <Button>Search</Button>
                                    </Form.Group>
                              </Form>
                         </div>
                  </div>

                  <div>
                        <Table striped bordered hover>
                              <thead>
                                    <tr>
                                          <th>Author</th>
                                          <th>Title</th>
                                          <th>Abstract</th>
                                          <th>Views</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {tableData}
                              </tbody>
                         </Table>
                  </div>
            </div>
       )
}


      
import React, { useState, useEffect } from 'react'                                 
import { useNavigate, Outlet } from 'react-router'
import Swal from 'sweetalert2'



export default function LogOut(){
	let n = useNavigate()
	useEffect(() => {
		localStorage.clear();
		Swal.fire({
					icon: "success",
					title: "logOut Success!",
				}).then(result => {
					n('/')      
				})

      	
	  	                                 
      }, []) 
	
	return(
	 		<div>
				
			</div>		  
		)
}


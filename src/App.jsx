import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import  LogIn from './Pages/LogIn.jsx';
import  HomePage from './Pages/HomePage.jsx';
import  SearchResult from './Pages/SearchResult.jsx';
import IndividualSearchResult from './Pages/IndividualSearchResult.jsx'
import  UserDashboard from './Pages/UserDashboard.jsx';
import  RegisterT from './Pages/RegisterT.jsx' 
import  Register from './Pages/Register.jsx' 
import  ContactUs from './Pages/ContactUs.jsx' 
import  AboutUs from './Pages/AboutUs.jsx' 

import  Upload from './Pages/Upload.jsx'
import  StudentLog from './Pages/StudentLogin'; 
import  ApproveSystem from './Pages/ApproveSystem.jsx'
import  IndividualSearchResult from './Pages/IndividualSearchResult.jsx' 
import Swal from 'sweetalert2'; 
import {Routes, Route} from 'react-router'
import  Navbar from './Components/MyNavbar.jsx'




import  Register from './Pages/Register.jsx'
import  StudentLogin from './Pages/StudentLogin.jsx'

import  Setting from './Pages/Setting.jsx'






function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<HomePage />} />
        <Route path="IndividualSearchResult/:id" element={<IndividualSearchResult/>} />
        <Route path="login" element={<LogIn/>} />
        <Route path="register" element={<Register/>} />
        <Route path="Homepage" element={<HomePage/>} />
        <Route path="UserDashboard" element={<UserDashboard/>} />
        <Route path="RegisterT" element={<RegisterT/>} />
        <Route path="AboutUs" element={<AboutUs/>} />
        <Route path="MyNavbar" element={<Navbar/>} />
        <Route path="SearchResult" element={<SearchResult/>} />



        <Route path="Approve" element={<ApproveSystem/>} />
       
        

        <Route path="HomePage" element={<HomePage/>} />
        <Route path="Upload" element={<Upload/>} />
        <Route path="StudentLogin" element={<StudentLogin/>} />

        <Route path="ContactUs" element={<ContactUs/>} />  
        <Route path="Setting" element={<Setting/>} />  


      </Route>
    </Routes>
    </>
  )
}




export default App


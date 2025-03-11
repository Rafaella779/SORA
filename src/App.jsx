import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import  TeacherLogin from './Pages/TeacherLogin.jsx';
import  HomePage from './Pages/HomePage.jsx';
import  SearchResult from './Pages/SearchResult.jsx';
import IndividualSearchResult from './Pages/IndividualSearchResult.jsx'
import  DashboardTeacher from './Pages/DashboardTeacher.jsx';
import  StudentDashboard from './Pages/StudentDashboard.jsx';
import  RegisterT from './Pages/RegisterT.jsx' 
import  Register from './Pages/Register.jsx' 
import  ContactUs from './Pages/ContactUs.jsx' 
import  AboutUs from './Pages/AboutUs.jsx' 
import  Upload from './Pages/Upload.jsx'
import  ApproveSystem from './Pages/ApproveSystem.jsx'
import Swal from 'sweetalert2'; 
import {Routes, Route} from 'react-router'
import  Navbar from './Components/MyNavbar.jsx'
import  Footer from './Components/Footer.jsx'
import  StudentLogin from './Pages/StudentLogin.jsx'
import  Error from './Pages/Error.jsx'
import  ViewPage from './Pages/ViewPage.jsx'
import  LoginBoth from './Pages/LoginBoth.jsx'
import  Rejection from './Pages/Rejection.jsx'
import  Inbox from './Pages/Inbox.jsx'
import  Instruction from './Pages/Instruction.jsx'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<HomePage />} />
        <Route path="IndividualSearchResult/:id" element={<IndividualSearchResult/>} />
        <Route path="TeacherLogin" element={<TeacherLogin/>} />
        <Route path="Rejection" element={<Rejection/>} />
        <Route path="register" element={<Register/>} />
        <Route path="StudentDashboard" element={<StudentDashboard/>} />
        <Route path="RegisterT" element={<RegisterT/>} />
        <Route path="AboutUs" element={<AboutUs/>} />
        <Route path="LogBoth" element={<LoginBoth/>} />
        <Route path="MyNavbar" element={<Navbar/>} />
        <Route path="SearchResult" element={<SearchResult/>} />
        <Route path="HomePage" element={<HomePage/>} />
        <Route path="Upload" element={<Upload/>} />
        <Route path="StudentLogin" element={<StudentLogin/>} />
        <Route path="ContactUs" element={<ContactUs/>} />
        <Route index element={<ViewPage/>} />                                                                                             >
        <Route path="Instruction" element={<Instruction/>} />
        <Route path="teacher" >
        <Route index element={<DashboardTeacher/>} />                                                                                             >
        <Route path="ApproveSystem" element={<ApproveSystem/>} />
         <Route path="inbox" element={<Inbox/>} />
        </Route>
        <Route path="*" element={<Error/>} />  
      </Route>
      <Route path="/" element={<Footer/>} />
    </Routes>
    </>
  )
}




export default App


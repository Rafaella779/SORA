import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import  Register from './Pages/Register.jsx';
import  LogIn from './Pages/LogIn.jsx';
import  HomePage from './Pages/HomePage.jsx';
import  SearchResult from './Pages/SearchResult.jsx';
import  UserDashboard from './Pages/UserDashboard.jsx';
import  RegisterT from './Pages/RegisterT.jsx'
import  RegisterS from './Pages/Registers.jsx' 
import  ContactUs from './Pages/ContactUs.jsx' 
import  AboutUs from './Pages/AboutUs.jsx' 
import  IndividualSearchResult from './Pages/IndividualSearchResult.jsx' 
import Swal from 'sweetalert2'; 
import {Routes, Route} from 'react-router'
import Navbar from './Components/MyNavbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<HomePage />} />
        <Route path="logIn" element={<LogIn/>} />
        <Route path="register" element={<Register/>} />
        <Route path="RegisterS" element={<RegisterS/>} />
        <Route path="UserDashboard" element={<UserDashboard/>} >
          <Route path="test" />
        </Route>
        <Route path="RegisterT" element={<RegisterT/>} />
        <Route path="AboutUs" element={<AboutUs/>} />
        <Route path="ContactUs" element={<ContactUs/>} />
        <Route path="HomePage" element={<HomePage/>} />
        <Route path="SearchResult" element={<SearchResult/>} />
        <Route path="IndividualSearchResult" element={<IndividualSearchResult/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App

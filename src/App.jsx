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
import  AboutUs from './Pages/AboutUs.jsx' 
import Swal from 'sweetalert2'; 
import {Routes, Route} from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" >
        <Route index element={<HomePage />} />
        <Route path="login" element={<LogIn/>} />
        <Route path="register" element={<Register/>} />
        <Route path="RegisterS" element={<RegisterS/>} />
        <Route path="UserDashboard" element={<UserDashboard/>} />
        <Route path="RegisterT" element={<RegisterT/>} />
<<<<<<< HEAD
=======
        <Route path="AboutUs" element={<AboutUs/>} />
>>>>>>> 5d24bd0172703e86085321d456ebb7be192c79df
      </Route>
    </Routes>
    </>
  )
}

export default App

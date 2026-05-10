import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import FreeBook from './components/FreeBook'
import NavBar from './components/NavBar'
import {Navigate, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Courses from './components/Courses'
import Signup from './components/signup'
import Contacts from './components/Contacts'
import Abouts from './components/Abouts'
import  { Toaster } from 'react-hot-toast';
import {useAuth} from './context/AuthProvider.jsx'
import { useEffect } from 'react'
function App() {
  const [Authuser,setAuthUser]=useAuth();
  console.log(Authuser);
    useEffect(() => {

    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

  }, []);



  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/courses" element={Authuser?<Courses/>:<Navigate to='/Signup'/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/contact'element={<Contacts/>}/>
        <Route path='/about' element={<Abouts/>}/>
      </Routes>
      <Toaster/>
    </> 
  )
}

export default App

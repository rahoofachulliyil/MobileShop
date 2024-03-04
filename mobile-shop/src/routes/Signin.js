

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import HeroImage4 from '../components/HeroImage4'
import Login from '../components/Login/Login'
import MacBookdetails from '../components/MacBook/MacBookdetails'
import Navbar from '../components/Navbar'
import Signup from '../components/Login/Signup'
const Signin = () => {
  return (
    
    <div>
        <Navbar/>
       <Login/>
        {/* <HeroImage4/> */}

     {/* <MacBookdetails/> */}
     {/* <MacBookdetails/> */}
        {/* <div style={{height:"600px"}}>
        <h1 style={{color:"red",padding:"150px",textAlign:"center"}}>APLLE STORE SUPPORT</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        </div> */}
        <Footer/>
        
    </div>
  )
}

export default Signin
import React from 'react'
import Airpod from '../components/Airpod/Airpod'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Airpods = () => {
  return (
    <div>
        <Navbar/>
        {/* <div style={{backgroundColor:"white", width:"100%"}}> */}
        <Airpod/>
        <Footer/>
        </div>
  )
}

export default Airpods
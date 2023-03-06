import React from 'react'
import Phonestoretdata from "../components/Phonestoredata"
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'

import Phonestor from '../components/Phonestor'
const slideImages=Phonestoretdata
// const Phonestoretdata1=Phonestoretdata

const Phone = () => {
  return (
    <div style={{backgroundColor:"white"}}>
        <Navbar/>
        <Phonestor/>
        <HeroImage slideImages={slideImages}/>
        <Footer/>
    </div>
  )
}

export default Phone
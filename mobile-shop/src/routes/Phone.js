import React from 'react'
import Phonestoretdata from "../components/Phonestoredata"
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'

import Phonestor from '../components/Phonestor'
import MacBookdetails from '../components/MacBook/MacBookdetails'
import HeroImage1 from '../components/HeroImage1'
const slideImages=[{
  url: 'https://tse4.mm.bing.net/th?id=OIP.PYipJ_hSncugM2SwnZitvgHaEK&pid=Api&P=0',
  caption: 'Slide 1'
},
{
  url: 'https://tse3.mm.bing.net/th?id=OIP.XP68D2eGpP_iU3Pvz849kgHaD8&pid=Api&P=0',
  caption: 'Slide 2'
},
{
  url: 'https://tse4.mm.bing.net/th?id=OIP.GtreV90EwjIwUygIO0UX4gHaEK&pid=Api&P=0s',
  caption: 'Slide 3'
},
]
// const Phonestoretdata1=Phonestoretdata

const Phone = () => {
  return (
    <div  style={{width:'100vw'}}>
        <Navbar/>
        <HeroImage1/>
        {/* <HeroImage slideImages={slideImages}/> */}
        {/* <MacBookdetails/> */}
         <Phonestor/>
      
         <Footer/> 
        
    </div>
  )
}

export default Phone
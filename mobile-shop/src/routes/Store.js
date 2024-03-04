import React from 'react'
import Navbar from '../components/Navbar'
import Product from '../components/Product'
import Footer from '../components/Footer'

import HeroImage1 from '../components/HeroImage1'
import MacBookdetails from '../components/MacBook/MacBookdetails'

const Store = () => {
  return (
    <div>
        <Navbar/>
        {/* <MacBookdetails/> */}
        {/* <div style={{display:"flex"}}> */}
        <Product/>
        {/* </div> */}
        <Footer/>
    </div>
  )
}

export default Store
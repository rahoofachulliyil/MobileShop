import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import HeroImage1 from '../components/HeroImage1'
import HeroImage2 from '../components/HeroImage2'
import HeroImage3 from '../components/HeroImage3'
import HeroImage4 from '../components/HeroImage4'
import MacBookdetails from '../components/MacBook/MacBookdetails'
import Navbar from '../components/Navbar'
// import ProductList from "../components/ProductList";
// import Product from "../components/Product";


const Home = () => {
  return (
    <div>
    <Navbar/>
 {/*  */}
    <HeroImage1/>
    <HeroImage2/>
    <MacBookdetails/>
    <HeroImage4/>
 
    <Footer/>
   
   
    </div>
  )
}

export default Home
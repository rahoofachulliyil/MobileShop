import "./HeroImageStyles1.css";
import React from 'react'
import Intro from "../assets/a5.jpg"
import{ FaGreaterThan} from "react-icons/fa"
import { Link } from "react-router-dom";

const HeroImage1= () => {
  return (
    <div className="hero">
      
     <div className="hero-content">
      <div className="hero-heading">
        <h1>iphone 140 pro</h1>
        <h4>ppro beyond.</h4></div>
        <div className="hero-buton">
          <Link to="/" className="hero-button1">Learn more <FaGreaterThan/></Link>
          <Link to="/Store" className="hero-button1">Buy<FaGreaterThan/></Link>
       </div>
       <div className="mask">
        <img src={Intro} />
       </div>
      

     </div>
    </div>
  )
}

export default HeroImage1
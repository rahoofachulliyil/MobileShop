import "./HeroImageStyles1.css";
import React from 'react'
import Intro from "../assets/a1.jpg"
import { Link } from "react-router-dom";

const HeroImage1= () => {
  return (
    <div className="hero">
        <div className="mask">
        <img className="into-img" src={Intro} alt="A1"/> 
        </div>
        <div className="content">
            <h1>iPhone 14 Pro</h1>
            <h3>Pro.beyond.</h3>
            <div className="bt">
                <div className="flex">
           <li className="c1"> <Link to="/Project" className="btn">Learn More</Link></li>
        <li className="c2"><Link to="/Contact" className="btn-light">Buy Now</Link></li></div>
          </div>
     </div>
    
    </div>
  )
}

export default HeroImage1
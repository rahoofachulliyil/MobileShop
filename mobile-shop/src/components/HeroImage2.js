import React from 'react'
import "./HeroImageStyles2.css";
import Intro from "../assets/a1.jpg"
import  { useState } from 'react';
import { Link } from 'react-router-dom';
import{BsApple} from "react-icons/bs"
const HeroImage2 = () => {
 const [click,setClick]=useState(false);
  const handleClick =() =>setClick(!click);
  return (
   <Link to="/Store"> <div className="hamburge1" onClick={handleClick} style={{cursor : 'pointer'}}>
         <img className="into-im" src={Intro} alt="A1"/>
       <div className='l'>
       <h1 className='h1'><BsApple />  <i>APPLE STORE</i> </h1>
         
       <h1 className='ht'>Store. The best way to buy the products you love.</h1>
       </div>
     </div></Link>
  )
}

export default HeroImage2
import React from 'react'
import { Link, NavLink } from "react-router-dom";
// import  { useState } from 'react';
const Productlist = (props) => {
    // const [click,setClick]=useState(false);
    // const handleClick =() =>setClick(!click);
    const handleClick1 =() =>{
            <div >
            <Link to="/"></Link>
            </div>
        
    };

    
  return (
    <NavLink to={props.url}>
      <div className="project-card" onClick={handleClick1} style={{cursor : 'pointer'}}>
                <img src={props.imgsrc} alt="img"/>
                <h2 className="project-title">{props.title}</h2>
                <div className="pro-details">
          
                <p>{props.text}</p>
                </div>
                <div className="pro-btns">
                <NavLink to={props.view} className="btn"id="b1">view</NavLink>
                <NavLink to="url.com" className="btn" id="b2">source</NavLink>
                </div>
            
            </div>
             </NavLink>
  )
}

export default Productlist
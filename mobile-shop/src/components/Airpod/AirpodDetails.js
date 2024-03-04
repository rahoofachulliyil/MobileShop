
import React, { useContext } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import './Airpod.css'
// import Phonestoretdata from "./Phonestoredata"
// import '../Phonestorestyles.css'
import { ShopContext } from '../../Context/Context'
const AirpodDetails = (props) => {
    const {id ,title,img,price,company,info,incart,count,total} = props.Phonestoretdata1;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemCount = cartItems[id]
  return (
    <div   className="project-card2">
    
    <h1 className='project-title3'>{title}</h1>
    <  img src={img} alt="img"/>
    
    <h2 className="project-title4">{company}</h2>
    <div className="pro-details2">
    
    <p>{info}</p>
    </div>
     <div className="pro-btns2">
    <NavLink to={price} className="btn2"id="b1">Buy Now</NavLink>
    
    <button  className="btn2" onClick={() => addToCart(id)}><AiOutlineShoppingCart/>{cartItemCount > 0 && <> ({cartItemCount})</>}</button>
    </div>
    
    </div>
  )
}

export default AirpodDetails
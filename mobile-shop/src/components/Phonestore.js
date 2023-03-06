
import React, { useContext } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
// import Phonestoretdata from "./Phonestoredata"
import './Phonestorestyles.css'
import { ShopContext } from '../Context/Context'

const Phonestore = (props) => {
    // const [CartItems,setCartItems]=useState([])
    // const handleAddProduct=(product)=>{
    //     const ProductExist=CartItems.find((item)=>item.id===product)
    //     if(ProductExist){
    //         SetCartItems(CartItems.map((item)=>item.id===product.id ?{...ProductExist,quantity:ProductExist.length + 1}:item))}
    //     else{
    //         SetCartItems([...CartItems,{...product,quantity:1}])
        
    //     }}
    const {id ,title,img,price,company,info,incart,count,total} = props.Phonestoretdata1;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemCount = cartItems[id]
  return (
    
    <div   className="project-card1">
    
<h1 className='project-title1'>{title}</h1>
<  img src={img} alt="img"/>

<h2 className="project-title2">{company}</h2>
<div className="pro-details1">

<p>{info}</p>
</div>
 <div className="pro-btns1">
<NavLink to={price} className="btn"id="b1">Buy Now</NavLink>

<button  className="btn" onClick={() => addToCart(id)}><AiOutlineShoppingCart/>{cartItemCount > 0 && <> ({cartItemCount})</>}</button>
</div>

</div>

  )
  
}

export default Phonestore
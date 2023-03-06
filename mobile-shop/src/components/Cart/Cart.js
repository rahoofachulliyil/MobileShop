// import React from 'react'

// const Cart = ({CartItems}) => {
//   return (
//     <div className='cart-items'>
//     <div className='Cart-items-header'>cart items</div>
    
//     {CartItems.length===0 &&(<div className="">no itemss</div>)}

//     <div>
//         {CartItems.map((item)=>(<div key={item.id} className="cart-item-list">
//             <img  className='' src={item.image} alt={item.name}/>
//         </div>))}
//     </div>
//     </div>

//   )
// }

// export default Cart
import React, { useContext } from "react";
import { ShopContext } from "../../Context/Context";
import { Phonestoredata} from "../../components/Phonestoredata"
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";

import "./Cart.css";
 const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {Phonestoredata.map((product)=>{
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
 })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
export default Cart

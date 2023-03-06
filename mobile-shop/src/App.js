import React, { useState } from "react";
import "./index.css";
import Home from "./routes/Home";
import Store from "./routes/Store";
import Cart1 from "./routes/Cart1";
import Phone from "./routes/Phone";
import Support from "./routes/Support";
import {Route,Routes} from "react-router-dom";
import { ShopContextProvider } from "./Context/Context";
function App() {
  // const [CartItems,setCartItems]=useState([])
  // const handleAddProduct = product => {
  //   const ProductExist = CartItems.find(item => item.id === product.id);
  //   if (ProductExist) {
  //     setCartItems(
  //       CartItems.map(item =>
  //         item.id === product.id
  //           ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
  //           : item
  //       )
  //     );
  //   } else {
  //     setCartItems([...CartItems, { 
  //       ...product, 
  //       quantity: 1  // <-- Change here
  //     }]);
  //   }
  // };
  return (
   <>
   <ShopContextProvider>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Phone" element={<Phone/>}/>
    <Route path="/Support" element={<Support/>}/>
    <Route path="/Store" element={<Store/>}/>
    <Route path="/Cart1" element={<Cart1 />}/>
   </Routes>
   </ShopContextProvider>
   </>
  );
}

export default App;
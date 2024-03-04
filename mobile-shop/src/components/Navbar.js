import "./NavbarStyles.css";
import React, {useContext,useState} from "react";
import { Link } from "react-router-dom";
import{AiOutlineSearch,AiOutlineShoppingCart} from "react-icons/ai"
import { ShopContext } from "../Context/Context";
import Phonestoredata from "./Phonestoredata";
import{FaBars, FaTimes} from "react-icons/fa"


// import logo from "../logo.svg";
// import { ButtonContainer } from "./Button";

// export default class Navbar extends Component {
//   // const {id ,title,img,price,company,info,incart,count,total} =Phonestoredata
//   // const {  cartItems } = useContext(ShopContext);
//   // const cartItemCount = cartItems[id]
//   constructor(props) {
//     super(props);
//     this.state = {
     
//       color: false,
//       click:false
     
//     };
//   }

//   handleClick =() =>{this.setState({click:!this.state.click})}
//   changeColor = () =>{
//   if (window.scrollY >=1){
//     this.setState({color: true});
//   }
//   else{this.setState({color: false})}
// }

 
//   render() {
//     window.addEventListener("scroll",this.changeColor);

    
    
//     return (
        
//       <div className={this.state.color ?"header header-bg":"header"}>
//         {/* 
// https://www.iconfinder.com/icons/1243689/call_phone_icon
// Creative Commons (Attribution 3.0 Unported);
// https://www.iconfinder.com/Makoto_msk */}
//         {/* <Link to="/">
//           <img src={logo} alt="store" className="navbar-brand" />
//         </Link> */}
       
//     <Link to="/">
//     <h1 className="nav-head">MobileStore</h1>
//     </Link>
//         <ul className={this.state.click ? "nav-menu active" :"nav-menu"}>
//           <li >
//             <Link to="/" >Home </Link> </li>
      
//         <li> <Link to="/Store">STORE</Link></li>
       
//         <li> <Link to="/Phone">iPhone</Link></li>
//         <li> <Link to="/Support">Support</Link></li>
      
//         </ul>
//         <li className="search"><Link to="/"><AiOutlineSearch/></Link></li>
//         {/* <Link to="/cart" className="ml-auto">
//           <ButtonContainer>
//             <span className="mr-2">
//               <i className="fas fa-cart-plus " />
//             </span>
//             my cart
//           </ButtonContainer>
//         </Link> */}
       
    
//         <Link to="/Cart1" className="cart1"><p className="car"><AiOutlineShoppingCart/></p>
    
//          </Link>
       
//          <div className="hamburger" onClick={this.handleClick}>
//          {this.state.click ?(<FaTimes size={20} style={{color:"#fff"}}/>):(<FaBars  style={{color:"white"}}/>
//          )}
//      </div>
//         </div>
        
     
        
        
     
//     );
//   }
// }


const Navbar = () => {
  const {getTotalCartItems}=useContext(ShopContext)
  const totalCartItems=getTotalCartItems();
  const [click,setClick]=useState(false);
  const handleClick =() =>setClick(!click);


  const[color,setColor]=useState(false);
  const changeColor =() =>{
    if (window.scrollY >=1){
      setColor(true);
    }
    else{setColor(false)}
  }


  window.addEventListener("scroll",changeColor);
  return (
    <div className={color ?"header header-bg":"header"}>
   

       
    <Link to="/">
    <h1 className="nav-head">MobileStore</h1>
    </Link>
        <ul className={click ? "nav-menu active" :"nav-menu"}>
          <li >
            <Link to="/" >Home </Link> </li>
      
        <li> <Link to="/Store">Store</Link></li>
       
        
        <li> <Link to="/Signin">Login</Link></li>
        <li> <Link to="/Contact">Contact</Link></li>
      
        </ul>
        <li className="search"><Link to="/"><AiOutlineSearch/></Link></li>
        {/* <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus " />
            </span>
            my cart
          </ButtonContainer>
        </Link> */}
       
    
        <Link to="/Cart1" className="cart1"><div className="car"><AiOutlineShoppingCart/><div className="total-items">{totalCartItems}</div></div>
    
         </Link>
       
         <div className="hamburger" onClick={handleClick}>
         {click ?(<FaTimes size={20} style={{color:"#fff"}}/>):(<FaBars  style={{color:"white"}}/>
         )}
     </div>
        </div>
  )
}

export default Navbar
//f
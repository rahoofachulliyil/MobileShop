import "./NavbarStyles.css";
import React, {useContext, Component } from "react";
import { Link } from "react-router-dom";
import{AiOutlineSearch,AiOutlineShoppingCart} from "react-icons/ai"
import { ShopContext } from "../Context/Context";
import Phonestoredata from "./Phonestoredata";
import{FaBars, FaTimes} from "react-icons/fa"


// import logo from "../logo.svg";
// import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  // const {id ,title,img,price,company,info,incart,count,total} =Phonestoredata
  // const {  cartItems } = useContext(ShopContext);
  // const cartItemCount = cartItems[id]
  constructor(props) {
    super(props);
    this.state = {
     
      color: false,
      click:false
     
    };
  }

  handleClick =() =>{this.setState({click:!this.state.click})}
  changeColor = () =>{
  if (window.scrollY >=1){
    this.setState({color: true});
  }
  else{this.setState({color: false})}
}

 
  render() {
    window.addEventListener("scroll",this.changeColor);

    
    
    return (
        
      <div className={this.state.color ?"header header-bg":"header"}>
        {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
        {/* <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link> */}
       
    <Link to="/">
    <h1>MobileStore</h1>
    </Link>
        <ul className={this.state.click ? "nav-menu active" :"nav-menu"}>
          <li >
            <Link to="/" >Home </Link> </li>
      
        <li> <Link to="/Store">STORE</Link></li>
       
        <li> <Link to="/Phone">iPhone</Link></li>
        <li> <Link to="/Support">Support</Link></li>
      
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
       
    
        <Link to="/Cart1" className="cart"><p className="car"><AiOutlineShoppingCart/></p>
    
         </Link>
       
         <div className="hamburger" onClick={this.handleClick}>
         {this.state.click ?(<FaTimes size={20} style={{color:"#fff"}}/>):(<FaBars  style={{color:"white"}}/>
         )}
     </div>
        </div>
        
     
        
        
     
    );
  }
}

// const Nav = styled.nav`
//   background: var(--mainBlue);
//   .nav-link {
//     color: var(--mainWhite) !important;
//     font-size:1.3rem;
//     text-transform:capitalize;
//   }
//   @media (max-width: 576px) {
//     .navbar-nav {
//       flex-direction: row !important;
// `;

// const ButtonContainer = styled.button`
//   text-transform: capitalize;
// font - size: 1.4rem;
// background: transparent;
// border: 0.05rem solid var(--lightBlue);
// border - radius: 0.5rem;
// padding: 0.2rem 0.5rem;
// outline - color: red;
// cursor: pointer;
// display: inline - block;
// margin: 0.2rem 0.5rem 0.2rem 0;
// transition: all 0.5s ease -in -out;
//   &: hover {
//   background: var(--lightBlue);
//   color: var(--mainBlue);
// }
// `;

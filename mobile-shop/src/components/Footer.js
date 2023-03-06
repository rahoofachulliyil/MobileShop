import "./FooterStyles.css"
import React from 'react'
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location"><FaHome size={20} style={{color:"white",marginRight:"2rem"}}/>
                <div><p>Chulliyil House</p>
                <p>Malappuram,kerala</p>
                    </div>
                    </div>
                    <div className="phone"><h4><FaPhone size={20} style={{color:"white",marginRight:"2rem"}}/>  6338270546</h4>
                    </div>
                    <div className="mail"><h4><FaMailBulk size={20} style={{color:"white",marginRight:"2rem"}}/>rahoofachulliyil@gmail.com</h4></div>
                    </div>

            
            <div className="right">
                <h4>About Us</h4>
                <p>Instant savings, otherwise referred to as Instant Cashback on the Apple Store Online, is available with the purchase of an eligible product for qualifying HDFC Bank Credit Cards & HDFC Bank Credit Card EMI only. Minimum transaction value of ₹10001 applies. Click here to see instant savings amounts and eligible devices. Instant savings is available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject t <a href="/"><span className="terms">TERMS AND conditions</span></a>between you and your card-issuing bank. Total transaction value is calculated after any trade-in credit or eligible discount applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant savings being recalculated, and any refund may be adjusted to account for instant savings clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. Terms and conditions apply. Offer cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant savings.</p>
                <div className="social">
                <a href="https://m.facebook.com/100009671735600/"><FaFacebook size={20} style={{color:"white",marginRight:"2rem"}}/></a>
               <a  href="https://m.facebook.com/100009671735600/"> <FaLinkedin size={20} style={{color:"white",marginRight:"2rem"}}/> </a> 
               <a  href="https://m.facebook.com/100009671735600/"><FaInstagram size={20} style={{color:"white",marginRight:"2rem"}}/></a></div>
            </div>
        </div>
        </div>

  )
}

export default Footer
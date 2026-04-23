import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div>
      <div className="footer" id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
            <h2>Info</h2>
                <ul>
                    <li>Payments</li>
                    <li>Status</li>
                    <li>Pricing</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div className="footer-content-center">
            <h2>Help @ Support</h2>
                <ul>
                    <li>Home</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                    <li>About us</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Contact Us</h2>
                <ul>
                    <li>+91 1234567890</li>
                    <li>tnasales@gmail.com</li>
                </ul>
            </div>
            
        </div>
        <hr />
      <p className="footer-copyright">
        copyright 2026 © tnasales.com - All Right Reserved
      </p>
      </div>
     
    </div>
  )
}

export default Footer

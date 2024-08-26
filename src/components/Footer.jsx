import React from 'react'
import { Link,useLocation } from 'react-router-dom'
const Footer = () => {
  const location=useLocation();
  const ishomepage=location.pathname==="/";

  return (
    <footer className={ishomepage?"homePage_footer otherPage_footer":"otherPage_footer"}>
      <div className="container">
        <h4>LUXURY RENTALS</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti officiis soluta dolorem reiciendis magni eligendi?</p>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/termsandcondition"}>Terms and Conditions</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="container">
        <h4>Connect with us</h4>
        <p>00000 000 000</p>
        <p>komal@gmail.com</p>
        <p>All rights reserved by komal</p>
      </div>

    </footer>
  )
}

export default Footer
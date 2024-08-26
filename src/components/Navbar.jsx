import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RxHamburgerMenu } from 'react-icons/rx'

const Navbar = () => {
    const[navheight,setnavheight]=useState(false)
    const navigate=useNavigate();
    const gotohome=()=>{
        navigate("/");
    }

  return (
    <nav className={navheight?"show nav":"nav"}>
        <div className="logo"onClick={gotohome}>LUXURY RENTAL</div>
        <ul className=''>
            <li>
                <Link to="/aboutus" className=''>ABOUT US</Link>
            </li>
            <li>
                <Link to="/villas">VILLAS </Link>
            </li>
            <li>
                <Link to="/contactus">CONTACT</Link>
            </li>
        </ul>
        <RxHamburgerMenu className='hamburger' onClick={()=>setnavheight(!navheight)}></RxHamburgerMenu>
    </nav>
  )
}

export default Navbar
import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
const Navbar = () => {
    const [menu, setMenu] = useState("home");
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li onClick={()=> setMenu("menu")} class={menu==="menu"?"active":""}>menu</li>
        <li onClick={()=> setMenu("home")} class={menu==="home"?"active":""}>home</li>
        <li onClick={()=> setMenu("mobile-app")} class={menu==="mobile-app"?"active":""}>mobile app</li>
        <li onClick={()=> setMenu("contact-us")} class={menu==="contact-us"?"active":""}>contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  )
}

export default Navbar

import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import yemekLogo from "../../assets/logo.png"
import NavbarDiv, { NavbarUl } from './Navbar.style'

const Navbar = () => {
  return (
    <NavbarDiv >
        <img src={yemekLogo} width="150"  alt="" />
    <NavbarUl >
    <li >
        <NavLink className={({isActive}) => isActive && "hakan"}
 to={"/home"} style={{color:"aqua",fontSize:"1.3rem",textDecoration:"none"}}>
             Home
        
        </NavLink></li>
        <li>
        <NavLink  className={({isActive}) => isActive && "hakan"}
 to={"/about"} style={{color:"aqua",fontSize:"1.3rem",textDecoration:"none"}}>
             About
        
        </NavLink></li>
        <li>
        <NavLink className={({isActive}) => isActive && "hakan"}
 to={"/contact"} style={{color:"aqua",fontSize:"1.3rem",textDecoration:"none"}}>
        Contact
        
        </NavLink></li>
        <li>
        <NavLink  className={({isActive}) => isActive && "hakan"}
 to={"/"} style={{color:"aqua",fontSize:"1.3rem",textDecoration:"none"}}>
        Logout
        
        </NavLink></li>
    </NavbarUl>
        </NavbarDiv>
    
  )
}

export default Navbar
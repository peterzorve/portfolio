import React, { useState, useEffect } from 'react'
import "./Navbar.css"

import logo from "../../assets/logo/logo-1.png"
// import { Link } from 'react-scroll'
import { BrowserRouter as Router, Routes, Route, Link, useLocation  } from 'react-router-dom';
import menu_icon from "../../assets/logo/menu-icon.png"


const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
      
    })
  }, [])

  const [mobileMenu, setMobileMenu] = useState(false)
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  const isActive = (path) => location.pathname === path ? 'btn' : '';
  

  

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
        <img src={logo} alt="" className='logo'/>
        <div className='double-navbar'>
            <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
                <li> <Link to='/'             smooth={true} offset={0}    duration={500} className={isActive('/')}>Home</Link> </li> 

                <li> <Link to='/projects'     smooth={true} offset={-260} duration={500} className={isActive('/projects')}>Projects</Link></li>
                <li> <Link to='/aboutme'      smooth={true} offset={-260} duration={500} className={isActive('/aboutme')}>About me</Link></li>
                <li> <Link to='/publications' smooth={true} offset={-260} duration={500} className={isActive('/publications')}>Publications</Link></li>
                <li> <Link to='/resume'       smooth={true} offset={-260} duration={500} className={isActive('/resume')}>Resume</Link></li>
                <li> <Link to='/contact'      smooth={true} offset={-260} duration={500} className={isActive('/contact')}>Contact</Link> </li>

                <li><a href="https://github.com/peterzorve"                       target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/peter-zorve-51a4b0114/"  target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
       </div>
       <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/> 
    </nav>
  )
}

export default Navbar




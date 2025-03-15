import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import './Navbar.css'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav-container">
      <div className="nav-header">
        <div className="logo-section">
          <img className='nav-img' src="https://img.freepik.com/premium-vector/silver-membership-icon-default-avatar-profile-icon-membership-icon-social-media-user-image-vector-illustration_561158-4195.jpg" alt="Logo" />
         <div className='nav-cont'>
         <p>Delivery To</p>
         <p className='nav-loc'><CiLocationOn /> My Location</p>
         </div>
         
        </div>
       
        {/* Toggle button */}
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      {/* Links */}
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link className='nav-icon' to="/"><IoIosNotificationsOutline/></Link>
        <Link className='nav-icon' to="/"><MdOutlineShoppingCart /></Link>
      </div>
    </div>
  );
};

export default Navbar;

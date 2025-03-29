import React from 'react';
import AirloLogo from '../assets/images/airaloLogo.jpg'
import Style from "../assets/styles/navbarStyle.module.css"
import { FaStore, FaUser } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { SiGooglecolab } from "react-icons/si";
import { IoMdInformationCircleOutline } from "react-icons/io";

import { FaDollarSign } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";

const Navbar = () => {
  return (
    <section className="navbarSection">
    <nav className="navbar navbar-expand-lg p-3">
      <div className="container-fluid">
        <a href="#" className="navbar-brand">
          <img src={AirloLogo} alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-label="Toggle Navigation"
          aria-expanded="false"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
  
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex gap-3">
            <li className={`${Style.specificNavItem} nav-item`}>
              <a href="#" className="nav-link">
                <FaStore className='h5 me-2'></FaStore>
                 Store
              </a>
            </li>
          </ul>
  
          <ul className="navbar-nav ms-auto d-flex gap-3">
            <li className={`${Style.navItem} nav-item`}>
              <a href="#" className="nav-link ">
                 <SiGooglecolab className='h5 me-2'></SiGooglecolab>
                  Partner With Us
                
                
              </a>
            </li>
            <li className={`${Style.navItem} nav-item`}>
              <a href="#" className="nav-link ">
              <IoMdInformationCircleOutline className='h5 me-2'></IoMdInformationCircleOutline>
                  About Us
    
              </a>
            </li>
            <li className={`${Style.navItem} nav-item`}>
              <a href="#" className="nav-link">
              <FaRegUserCircle className='h5 me-2'></FaRegUserCircle>
                Login / Sign Up
              </a>
            </li>
            <li className={`${Style.navItem} nav-item`}>
              <a href="#" className="nav-link">
              <FaDollarSign className='h5 me-2'></FaDollarSign>
                 USD
              </a>
            </li>
            <li className={`${Style.navItem} nav-item`}>
              <a href="#" className="nav-link">
              <FaGlobeAmericas className='h5 me-2'></FaGlobeAmericas>
                 English
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </section>
  
  );
};

export default Navbar;

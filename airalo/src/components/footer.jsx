import React from 'react'
import "../assets/styles/footerStyle.css"
import imageLogo from "../assets/images/airaloLogo.jpg";
import { FaStore, FaUser } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { SiGooglecolab } from "react-icons/si";
import { IoMdInformationCircleOutline } from "react-icons/io";
import facebook from "../assets/images/facebook.png"
import twitter from "../assets/images/twitter.png"
import instagram from "../assets/images/instagram.png"
import youtube from "../assets/images/youtube.png"
import threads from "../assets/images/threads.png"
import tiktok from "../assets/images/tik-tok.png"
import linkedin from "../assets/images/linkedin.png"

import { FaDollarSign } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
export default function Footer() {
  return (
    <>
    <div class="divider mt-3"></div>

    <div className="footer">
    <div className="footerHeader">
    <div className="introImage">
        <img src={imageLogo} alt="" />
    </div>
    <div className="intro-text">
        <p>Airalo is the world's first eSIM store that solves the pain of high roaming bills by giving you access to 200+ eSIMs (digital SIM cards) globally at affordable prices.</p>
    </div>
    </div>
   
    
    <div className="footer-column">
        <h3>Popular Countries</h3>
        <ul>
            <li><a href="#">United States</a></li>
            <li><a href="#">United Kingdom</a></li>
            <li><a href="#">China</a></li>
            <li><a href="#">Japan</a></li>
            <li><a href="#">Turkey</a></li>
            <li><a href="#">United Arab Emirates</a></li>
            <li><a href="#">Thailand</a></li>
            <li><a href="#">France</a></li>
            <li><a href="#">Spain</a></li>
            <li><a href="#">Italy</a></li>
        </ul>
    </div>
    
    <div className="footer-column">
        <h3>Airalo Partner Platform</h3>
        <ul>
            <li><a href="#">Affiliate Partners</a></li>
            <li><a href="#">Distribution Partners</a></li>
            <li><a href="#">API Partners</a></li>
            <li><a href="#">Airalo for Business</a></li>
        </ul>
    </div>
    
    <div className="footer-column">
        <h3>About Airalo</h3>
        <ul>
            <li><a href="#">Our Values</a></li>
            <li><a href="#">Impact</a></li>
            <li><a href="#">Newsroom</a></li>
            <li><a href="#">Media Center</a></li>
        </ul>
    </div>
    
    <div className="footer-column">
        <h3>More Info</h3>
        <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Referral</a></li>
            <li><a href="#">Manage cookies</a></li>
        </ul>
    </div>
</div>
<div class="divider"></div>

<div class="footerEnd grayText d-flex justify-content-between px-2">
<div class="footer-logo p-2">2025 AIRALO</div>

<div class="footer-links d-flex column-gap-3">
    <span className='mx-3'>Privacy & Cookie Policy </span>
    <span className='mx-3'>Terms  & Conditions</span>
</div>
<div className="parameters d-flex ">
    <a href="#" className="nav-link mx-2">
        <FaDollarSign className='h5 me-2'></FaDollarSign>
        USD
    </a>
    <a href="#" className="nav-link mx-2">
        <FaGlobeAmericas className='h5 me-2'></FaGlobeAmericas>
        English
    </a>
</div>


<div class="social-section">
    <span>FOLLOW US:</span>
    <img src={facebook} className="mx-2 socialIcon" />
    <img src={instagram} className="mx-2 socialIcon" />
    <img src={twitter} className="mx-2 socialIcon" />
    <img src={tiktok} className="mx-2 socialIcon" />
    <img src={linkedin} className="mx-2 socialIcon" />
    <img src={youtube} className="mx-2 socialIcon" />
    <img src={threads} className="mx-2 socialIcon" />
</div>

</div> 
</>
  )
}

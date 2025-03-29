import React from 'react';
import  AppStoreFill   from "../assets/images/app-store.png";
import Googleplay  from "../assets/images/app.png";
import "../assets/styles/homeStyle.css"
const HomeContent = () => {
  return (
    <section className="homeContent mt-5">
      <div className="row m-0 p-0">
        <p className="text-center display-5 fw-normal">
        Stay connected, wherever you travel, <br/> at affordable rates
        </p>
      </div>
      <div className="row m-0 p-0">
        <p className="text-center whiteGrayText">
            Our eSIMs are trusted by over 10,000,000 people worldwide
        </p>
      </div>
      <div className="row m-0 p-0">
        <p className="text-center">
          <img src={AppStoreFill} className='plateformeIcon'/>
          <img src={Googleplay} className='plateformeIcon'/>
          <i className="fa-border-solid fa-star text-danger"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star-half-stroke"></i>
          <span className='whiteGrayText'>From 300,000+ Reviews</span>
        </p>
      </div>
     
    </section>
  );
};

export default HomeContent;

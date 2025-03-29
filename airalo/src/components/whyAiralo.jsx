import React from "react";
import "../assets/style/whyUs.css"
import whyOne from "../assets/images/Why-Use-Airalo-1.png"
import whyTwo from "../assets/images/Why-Use-Airalo-2.png"
import whyThree from "../assets/images/Why-Use-Airalo-3.png"
import whyFour from "../assets/images/Why-Use-Airalo-4.png"
const WhyAiralo = () => {
  return (
    <div className="container my-5">
        <h3 className="my-2 text-center my-4">Why Airalo ? </h3>
      <div className="row mb-5 ">
        <div className="col-md-5 col-sm-12 mx-auto mb-3 whyCard">
          <div className="card border-0 shadow-sm">
            <div className="card-header d-flex flex-column align-items-center pt-5">
                <div className="whyImage">
                    <img src={whyOne} alt="" />
                </div>
                <p className="fs-4">Instant Connectivity</p>
                <p className="grayText">Purchase your eSIM from anywhere</p>
            </div>
            <div className="card-body " >
              <div className="d-flex mb-3 d-flex justify-content-between">
                <div className="tickIcons">
                  {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-warning fs-4">✔</span>
                ))}  
                </div>
                
                <span className="ms-2 text-muted">by Dr.Dolin</span>
              </div>
              <h3 className="card-title  fs-4 mb-3">Lifesaver!</h3>
              <p className="card-text ">
                Oh, I love the 21st century! You can travel to a remote country where you'd spend
                hundreds of dollars on Internet roaming OR you can get this app, get an esim and
                have a local data provider internet working within minutes for the price of two
                coffees! Loved swiping through a dating app in the middle of Santo Domingo while
                tourists around were desperately looking for free wifi.
              </p>
            </div>
          </div>
        </div>
     
        <div className="col-md-5 col-sm-12 mx-auto mb-3 whyCard">
          <div className="card border-0 shadow-sm">
          <div className="card-header d-flex flex-column align-items-center pt-5">
                <div className="whyImage">
                    <img src={whyTwo} alt="" />
                </div>
                <p className="fs-4">Global Coverage</p>
                <p className="grayText">Get connected in 200+ countries and regions around the world</p>
            </div>
            <div className="card-body">
              <div className="d-flex mb-3 d-flex justify-content-between">
                <div className="tickIcons">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="text-warning fs-4">✔</span>
                ))}
                </div>
                <span className="ms-2 text-muted">by BCGregory</span>
              </div>
              <h3 className="card-title fs-4 mb-3">Fantastic experience!</h3>
              <p className="card-text ">
                I have traveled globally for several years with 45 countries under my belt. Airaio
                has been, by far, the easiest, most useful, and most cost-effective option for
                traveling abroad that I have found. No more finding local SIM cards and changing
                numbers that I then have to communicate to family and friends that might need to
                reach me while I'm abroad. I honestly have high expectations for services like this
                and AIRALO has met each one with flying colors!
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-5 col-sm-12 mx-auto mb-3 whyCard">
          <div className="card border-0 shadow-sm">
          <div className="card-header d-flex flex-column align-items-center pt-5">
                <div className="whyImage">
                    <img src={whyThree} alt="" />
                </div>
                <p className="fs-4">Affordable and Transparent</p>
                <p className="grayText">No hidden fees and entirely prepaid</p>
            </div>
            <div className="card-body">
              <div className="d-flex mb-3 d-flex justify-content-between">
                <div className="tickIcons">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="text-warning fs-4">✔</span>
                ))}
                </div>
                <span className="ms-2 text-muted">by BCGregory</span>
              </div>
              <h3 className="card-title fs-4 mb-3">Fantastic experience!</h3>
              <p className="card-text ">
                I have traveled globally for several years with 45 countries under my belt. Airaio
                has been, by far, the easiest, most useful, and most cost-effective option for
                traveling abroad that I have found. No more finding local SIM cards and changing
                numbers that I then have to communicate to family and friends that might need to
                reach me while I'm abroad. I honestly have high expectations for services like this
                and AIRALO has met each one with flying colors!
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-5 col-sm-12 mx-auto mb-3 whyCard">
          <div className="card border-0 shadow-sm">
          <div className="card-header d-flex flex-column align-items-center pt-5">
                <div className="whyImage">
                    <img src={whyFour} alt="" />
                </div>
                <p className="fs-4">24/7/365 Support</p>
                <p className="grayText">Our support team is available every day across all time zones</p>
            </div>
            <div className="card-body">
              <div className="d-flex mb-3 d-flex justify-content-between">
                <div className="tickIcons">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="text-warning fs-4">✔</span>
                ))}
                </div>
                <span className="ms-2 text-muted">by BCGregory</span>
              </div>
              <h3 className="card-title fs-4 mb-3">Fantastic experience!</h3>
              <p className="card-text ">
                I have traveled globally for several years with 45 countries under my belt. Airaio
                has been, by far, the easiest, most useful, and most cost-effective option for
                traveling abroad that I have found. No more finding local SIM cards and changing
                numbers that I then have to communicate to family and friends that might need to
                reach me while I'm abroad. I honestly have high expectations for services like this
                and AIRALO has met each one with flying colors!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyAiralo;

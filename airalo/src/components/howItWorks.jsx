import React from 'react'
import stepOne from "../assets/images/How-Airalo-Works-LTR-1.svg"
import stepTwo from "../assets/images/How-Airalo-Works-LTR-2.svg"
import stepThree from "../assets/images/How-Airalo-Works-LTR-3.svg"
import stepFour from "../assets/images/How-Airalo-Works-LTR-4.svg"
import "../assets/styles/howItWorks.css"
export default function HowItWorks() {
  return (
    <section className="howWork bg-bg-light  m-0" >
        <h3 className='my-2 text-center my-4'>How Airalo Works </h3>
        <div className="row m-0 p-0">
        <div className='col-lg-3 col-md-4 col-sm-6 my-3 col-xs-6'>
            <div className="stepContainer d-flex flex-column align-items-center">
                <img src={stepOne} alt="" />
            </div>
            <div className="stepDescription text-center mt-2 fw-bold h5">
            Download the app
            </div>
        </div>
        <div className='col-lg-3 col-md-4 col-sm-6 my-3 col-xs-6'>
            <div className="stepContainer d-flex flex-column align-items-center">
                <img src={stepTwo} alt="" />
            </div>
            <div className="stepDescription text-center mt-2 fw-bold h5">
            Choose your destination <br /> and package
            </div>
        </div>
        <div className='col-lg-3 col-md-4 col-sm-6 my-3 col-xs-6'>
            <div className="stepContainer d-flex flex-column align-items-center">
                <img src={stepThree} alt="" />
            </div>
            <div className="stepDescription text-center mt-2 fw-bold h5">
            Install Your eSIM
            </div>
        </div>
        <div className='col-lg-3 col-md-4 col-sm-6 my-3 col-xs-6'>
            <div className="stepContainer d-flex flex-column align-items-center">
                <img src={stepFour} alt="" />
            </div>
            <div className="stepDescription text-center mt-2 fw-bold h5">
            Activate your eSIM
            </div>
        </div>
        </div>
        
    </section>
  )
}

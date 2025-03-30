import React from 'react'
import "../assets/styles/gradientShapes.css";
import freeImage from  "../assets/images/img_referral.png"
export default function FreeCredit() {
  return (
    <div className="row">
        <div className="col-10 m-auto d-sm-none d-md-block gradientBack freeContainer">
             <div className="freeImage">
                <img src={freeImage} alt="" />
            </div>   
            <div className='freeContent'>
                <p className="fs-3  text-light">
                    Use Your Free Credit .
                </p>
                <p className="text-center text-light">
                You can earn USD $3.00 in Airmoney by sharing your referral code with friends.
                </p>
                <button className="btn btn-light px-3" type='button'>FIND OUT HOW </button>
            </div>
        </div>
    </div>
  )
}

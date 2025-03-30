import React from 'react'
import googlePlay from "../assets/images/googlePlay.jpg"
import appStore from "../assets/images/appStore.jpg"
import downloadNow from "../assets/images/Download-Airalo-New-One.png"
export default function ReadyToTry() {
  return (
    <div className="row m-0 p-5 d-flex align-items-center justify-content-between">
        <div className="col-lg-6 col-md-6 col-sm-12">
            <h3>Ready to try eSIMs and change the way you stay connected?</h3>
            <p>Download the Airalo app to purchase, manage, and top up your eSIMs anytime, anywhere!</p>
            <div className="navLinks">
                <img src={googlePlay} alt="google play icon " />
                <img src={appStore}alt="app store icon " />
            </div>
        </div>
        <div className="d-sm-none d-md-block col-lg-4 col-md-4 ">
            <img src={downloadNow} alt="" />
        </div>
    </div>
  )
}

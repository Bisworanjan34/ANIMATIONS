import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Mobile.css"
import { faCirclePause, faEllipsisVertical, faKeyboard, faMicrophoneSlash, faPhone, faPhoneFlip, faShieldHalved, faVideo, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { faRecordVinyl } from '@fortawesome/free-solid-svg-icons/faRecordVinyl';
const Mobile = () => {
 


    // let [bgcolor,setBgcolor]=useState('')
    let [call,setCall]=useState(false)
    let box1ref=useRef()

    let morefun=()=>{
        box1ref.current.classList.toggle('active')
    }

    let pickupfun=()=>{
        setCall(true)
    }
  return (
    <div>
      {/* <h3>mobile-call-animation</h3> */}
      
      <div className="container">

     {
        call ? 
        <div className="sec-cont">
        <div className="user">
           <div className="img"></div>
           <p className='sim-t'>Sim-1</p>
            <h5>SHREE RAM</h5>
            {/* <p>time</p> */}
        </div>
         <div className="call-div " ref={box1ref}>
            <div className="main-box1">
            <div className="box1">
                    <div className="su subbox-1">
                        <div className="circle">
                        <FontAwesomeIcon icon={faCirclePause}  />
                        </div>
                        <p>Hold</p>
                    </div>
                    <div className="su subbox-2">
                          <div className="circle">
                          <FontAwesomeIcon icon={faRecordVinyl}  />
                          </div>
                        <p>Record</p>
                    </div>
                    <div className="su subbox-3">
                          <div className="circle">
                          <FontAwesomeIcon icon={faVideo}  />
                          </div>
                        <p>Video call</p>
                    </div>
                    <div className="su subbox-4">
                          <div className="circle">
                          <FontAwesomeIcon icon={faPhone}  />
                          </div>
                        <p>Add call</p>
                    </div>
            </div>
            </div>
            <div className="main-box2">
            <div className="box2">
                    <div className="su subbox-5">
                          <div className="circle " 
                         >
                          <FontAwesomeIcon icon={faKeyboard}  />
                          </div>
                        <p>Keypad</p>
                    </div>
                    <div className="su subbox-6">
                          <div className="circle" >
                          <FontAwesomeIcon icon={faMicrophoneSlash}  />
                          </div>
                        <p>Mute</p>
                    </div>
                    <div className="su subbox-7">
                          <div className="circle">
                          <FontAwesomeIcon icon={faVolumeHigh}  />
                          </div>
                        <p>speaker</p>
                    </div>
                    <div className="su subbox-8">
                          <div className="circle" onClick={morefun}>
                          <FontAwesomeIcon icon={faEllipsisVertical}  />
                          </div>
                        <p>More</p>
                    </div>
            </div>
             <div className="end-call">
                <div className="call-box" onClick={()=>setCall(false)}>
                <FontAwesomeIcon icon={faPhoneFlip}  />
                </div>
             </div>
            </div>
         </div>
      </div>:
    // first cont show call false 
      <div className="first-cont">
          <div className="f-box1">
          <div className="div">
          <p className='verify'>
            <FontAwesomeIcon icon={faShieldHalved}className='v-icon' />
            Verified-called from</p>
            <h3>jay shree ram</h3>
            <div className="img2"></div>
          </div>
          </div>
          <div className="f-box2">
            <div className="div">
                <p>Click to answer</p>
                <div className="pickup-call" onClick={pickupfun}>
                    <FontAwesomeIcon icon={faPhoneFlip}/>
                </div>
                <p>Thanks for calling</p>
            </div>
          </div>
      </div>
     }

      </div>    {/* container */}



    </div>
  )
}

export default Mobile

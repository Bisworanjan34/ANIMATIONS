import React, { useState } from 'react'
import './Payment.css'
import check from '../assets/white-check.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import people from '../assets/people.png'
import { faFile } from '@fortawesome/free-solid-svg-icons/faFile';
import { faBook, faShareNodes } from '@fortawesome/free-solid-svg-icons';

const Payment = ({setPayment}) => {
   
  return (
    <div>
       <div className="div bg-white h-[250px] w-[330px] my-6 relative">
          <div className="div bg-green-600 h-[68%]"></div>
          <div className="div h-[100%] bg-green-200 flex items-end ">
        <button className='text-black text-cente w-[100%] py-2 font-bold bg-white active:bg-white hover:bg-slate-100 text-sm' onClick={()=>setPayment(false)}>DONE</button>
          </div>
          <div className="div absolute top-4 left-4 w-[90%] h-[95%] ">
            <div className="div">
                <div className="div1 text-center">

                <div className="circle mx-auto">
                   <div className="img-div">
                   <img src={check} alt="check" />
                   </div>
                    <div className="move"></div>
                </div>
                    <h5 className='text-md font-bold mt-4'>Payment Successful</h5>
                    <p className='text-yellow-200 font-semibold'>21 Nov 2024 at 11:11 PM</p>
                </div>
                  <div className="div2 text-black">
                      <div className="div border w-[90%] h-[150px] mx-auto mt-7 py-4 rounded-lg bg-white flex justify-evenly flex-wrap shadow-md items-center px-2">
                         <div className="div w-[30%]">
                            <img src={people} alt="" style={{height:'60px'}} />
                         </div>
                         <div className="div w-[40%]">
                            <p className='text-sm font-bold'>Ram chandra</p>
                            <p className='text-sm'>ram@axbl</p>
                            <p className='font-bold text-xl'>₹33000</p>
                         </div>
                         <div className="div w-[30%] self-end ps-8 text-purple-600 underline font-bold text-sm">splits</div>
                         <div className="div flex gap-3 py-2 text-sm">
                        <div className="div  text-purple-600 cursor-pointer">
                                <div className="div bg-purple-700 rounded-lg p-2 flex items-center">
                                <FontAwesomeIcon icon={faBook} size="md" color='white' />
                                <p className='text-white ps-2'> View details</p>
                                </div>
                           
                            </div>
                        <div className="div  text-purple-600 cursor-pointer">
                        <div className="div bg-purple-700 rounded-lg p-2 flex items-center">
                                <FontAwesomeIcon icon={faShareNodes} size="md" color='white' />
                                <p className='text-white ps-2'> View details</p>
                                </div>
                        </div>
                      </div>
                      </div>
                     
                  </div>

            </div>
            <div className="div"></div>
            <div className="div"></div>
          </div>
       </div>
    </div>
  )
}

export default Payment

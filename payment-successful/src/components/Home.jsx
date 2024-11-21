import React, { useState } from 'react'
import Payment from './Payment'

const Home = () => {
    let [payment,setpayment]=useState(false)
  return (
    <div>
      <h5 className='font-bold text-2xl m-3 uppercase font-mono'>Payment animation</h5>
     <p className='text-green-500 ms-3'>online payment animation </p>
     <div className="div  mt-10  sm:flex-col ms-1">

      <button className='bg-green-600 text-white h-[50px] w-[180px] px-2 rounded-md active:bg-green-700 border-0 mb-3' onClick={()=>setpayment(true)}>payment-success</button>
       <div className=" mt-[-23px]">
       {
            payment?<Payment setPayment={setpayment}/>:''
       
       }
       </div>
     </div>
    </div>
  )
}

export default Home

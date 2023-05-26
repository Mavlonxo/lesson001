import React from 'react'
import './iphone.css'
import {  AiOutlineRight  } from "react-icons/ai";






function Iphone() {
  return (
    <div className='iphone__photo'>
      <h1 className='iphone__h1'>iPhone 14 Pro</h1>
      <h3 className='iphone__h2'>
        Pro.Beyond.
      </h3>
      <div className="iphone__btn">
        <button className='btn__one'>
          Learn more
          <AiOutlineRight/>
         </button>
        <button className='btn__two'>
          Buy
          <AiOutlineRight/>
        </button>
      </div>









      <div className="eruu"></div>

   
      
    </div>
  )
}

export default Iphone;

import React from 'react'
import './iphone14.css'
import {  AiOutlineRight  } from "react-icons/ai";
import rasm from '../../assets/two.jpg'


function Iphone14(){
  return (
    <div className='iphone14'>
        <h1 className='iphone14__h1'>
            iPhone 14
        </h1>
        <h4 className='iphone14__h4'>
            Wonderful
        </h4>
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
      <img src={rasm} alt="" />

      
      
    </div>
  )
}

export default Iphone14;

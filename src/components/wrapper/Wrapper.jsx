import React from 'react'
import './wrapper.css'
import { AiFillApple } from "react-icons/ai";
import {  AiOutlineRight  } from "react-icons/ai";
import photos from '../../assets/three.jpg'



function Wrapper(){
  return (
    <div className='wrapper'>
        <h1 className='wrapper__h1'>
        <AiFillApple  />
        WATCH
        </h1>
        <h2 className='wrapper__h2'>
            SERIES 8
        </h2>
        <h3 className='wrapper_h3'>
            A healthy leap ahead
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
      <img className='wrapper__photos' src={photos} alt="" />
    </div>
  )
}

export default Wrapper;

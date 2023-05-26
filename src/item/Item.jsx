import React from 'react'
import './item.css'
import { AiFillApple } from "react-icons/ai";
import {  AiOutlineRight  } from "react-icons/ai";



function Item() {
  return (
    <div className='item'>
    <div className="item__one">
        <h1 className='item__one__h1'>
        <AiFillApple />
        Trade In
        </h1>
        <h3 className='item__one__h3'>
            Upgrade and save. it's that easy.
        </h3>
        <button className='item__one__btn'>
            see what your device is worth
        </button>
    </div>
    <div className="item__two">
        <h1 className='item__two__h1'>wwwdc23</h1>
        <h2 className='item__two__h2'>Apple Worldwide Developer Conference <br />
        Join us online June
        </h2>
        <button className='btn__one'>
          Learn more
          <AiOutlineRight/>
         </button>
    </div>
    <div className="item__three">
    <h1 className='item__one__h3'>
        <AiFillApple />
       Ipad
        </h1>
        <h3 className='item__one__h3'>
          Lowable.Drawble.Magical.
        </h3>
        <div className="item__Icon">
        <button className='btn__one'>
          Learn more
          <AiOutlineRight/>
         </button>
        <button className='btn__two'>
          Buy
          <AiOutlineRight/>
        </button>
      </div>
    </div>
    <div className="item__four">
    <h1 className='item__four__h1'>
        MacBook Pro
    </h1>
    <h3 className='item__four__h3'>
        Supercharged by M2 Pro and M2 Max
    </h3>
    <div className='item__Icon'>
    <button className='btn__one'>
          Learn more
          <AiOutlineRight/>
         </button>
        <button className='btn__two'>
          Buy
          <AiOutlineRight/>
        </button>
    </div>
    </div>
    <div className="item__five">
    <h1 className='item__five__h1'>
        Take  your pick of  <br />
        Mother's Day gifts.
    </h1>
    <h3 className='item__five__h3'>
        So many ways to think <br />
        Whoever  you call Mom
    </h3>
    <button className='item__five__btn'>
        Shop the gift guide
        <AiOutlineRight/>
    </button>
    </div>
    <div className="item__six">
        <h1 className='item__six__h1'>
            <AiFillApple />
            Card 
        </h1>
        <h2 className='item__six__h2'>
            Get up to 3% daily Cash back <br />
            with every chuse
        </h2>
        <div className='item__Icon'>
    <button className='btn__one'>
          Learn more
          <AiOutlineRight/>
         </button>
        <button className='btn__two'>
          Apply Now
          <AiOutlineRight/>
        </button>
    </div>
    </div>
    </div>
  )
}

export default Item;

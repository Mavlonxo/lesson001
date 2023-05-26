import React from 'react'
import './Navbar.css'
import { AiFillApple } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillShopping } from "react-icons/ai";



const NAVBAR_ITEM = [ <AiFillApple className='navbar__icon__one' /> ,"Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TW & Home", "Entertainment", "Accessories", "Airpods", "Support", <AiOutlineSearch className='navbar__icon__two' />,<AiFillShopping className='navbar__icon__three' />,]




function Navbar() {
  return (
     <div className='navbar__Main'>
      <div className="navbar__one">
     
      <ul className='navbar__collection'>
        {
          NAVBAR_ITEM?.map((item, index)=>
            <li key={index} className='navbar__item' >{item}</li>
          )
        }
       
      </ul>
      </div>
      <div className="navbar__second">
<h4>
Get $200–$630 in credit toward iPhone 14 or iPhone 14 Pro when you trade in iPhone 11 or higher.1 Shop iPhone
</h4>
</div>
      <div className="video__div">
     
      </div>
     </div>
     
  )
}

export default Navbar;

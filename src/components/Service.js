import React from 'react'
import "../styles/services.css"
import ReactSwipe from 'react-swipe'
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import {BiSolidRightArrow,BiSolidLeftArrow} from "react-icons/bi"

import Footer from "./Footer";
export default function Service() {
  let reactSwipeEl;
 
  return (
    <div className='services'>
  <ReactSwipe className='slider'
  swipeOptions={{continuous:true}}
  ref={el => (reactSwipeEl = el)}
  >
    <img className='imag' src={img3} alt="" />
    <img className='imag' src={img4} alt="" />

  </ReactSwipe>
  
  <div className='slidebutton'>
      <BiSolidLeftArrow  className="btn1" onClick={() => reactSwipeEl.prev()}>Previous</BiSolidLeftArrow>
      <BiSolidRightArrow  className="btn2" onClick={() => reactSwipeEl.next()}> Next</BiSolidRightArrow>
    </div>
    <Footer/>
    </div>
  )
}

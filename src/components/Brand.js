import React from 'react'
import "../styles/brand.css";
import {GrAmazon} from "react-icons/gr"
import {BsGoogle} from "react-icons/bs"
import {BsYoutube} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"


export default function Brand() {
  return (
    <div className='brand' id="brand">
    <div className='secbrand'>
    <div className='brandhead'>
        <h1>Brands</h1>
        <div></div>
      </div>    
      <div className='blogo'>
      <div className='move1'>
        <GrAmazon className='mimg'/>
        <p>Amazon</p>
        </div>
      <div className='move2'>
        <BsGoogle className='mimg'/>
        <p>Google</p>
        </div>
      <div className='move3'>
        <AiFillInstagram className='mimg'/>
        <p>Instagram</p>
        </div>
      <div className='move4'>
        <BsYoutube className='mimg'/>
        <p>YouTube</p>
        </div>
      </div>

    </div>
    </div>
  )
}

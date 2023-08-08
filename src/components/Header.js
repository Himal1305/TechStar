import React from 'react'
import "../styles/header.css"
import { HashLink } from 'react-router-hash-link'
import {AiOutlineMenu}from "react-icons/ai"
export default function Header() {
  return (
    <nav>
      <div className='navhead'>
        TECHSTAR
      </div>
      <div className='navright'>
        <HashLink className="navlinks" to="/#home">Home</HashLink>
        <HashLink className="navlinks" to="/contact">Contact</HashLink>
        <HashLink className="navlinks" to="/#about">About</HashLink>
        <HashLink className="navlinks" to="/#brand">Brands</HashLink>
        <HashLink className="navlinks" to="/service">Services</HashLink>
      </div>
      <AiOutlineMenu className='hambur'/>
    </nav>
  )
}

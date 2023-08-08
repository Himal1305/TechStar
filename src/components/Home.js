import React from "react";
import "../styles//home.css";
import logo from "../assets/1.png";
import web from "../assets/2.webp";
import About from "./About";
import Brand from "./Brand";
import Footer from "./Footer";
export default function Home() {
  return (
    <div className="mainhome">
      <div className="home" id="home">
        <img className="logo" src={logo} alt="" />
        <h1>TECHYSTAR</h1>
        <p>Solution to all your problems</p>
      </div>
      <div className="sechead">
        <div className="subhead">
          <img className="homeimg" src={web} alt="" />
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
        <About id="#about" />
        <Brand/>
      </div>
      <Footer/>
    </div>
  );
}

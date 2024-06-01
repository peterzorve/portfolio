import React from 'react'
import "./HeroSection3.css"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import img_1 from "../../assets/img/hero_img.png"
import img_1 from "../../assets/logo/logo-3.png"


const HeroSection3 = () => {
    return (
      <div className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm Peter</p>
            <h2 className="hero--section--title">
              <span className="hero--section-title--color">Data Scientist &</span>
              <br />
              Computational Chemist
            </h2>
            <p className="hero--section-description">
                Aspiring to make significant changes in Education and IT.
              <br /> Background in Mathematics, Computer Science, Chemistry, etc.
            </p>
          </div>
          <Link to="/contact">
            <button className="btn  dark-btn">Get In Touch</button>
          </Link>
        </div>
        <div className="hero--section--img">
          <img src={img_1} alt="Hero Section" />
        </div>
      </div>
    );
  }

export default HeroSection3
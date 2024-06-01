import React from 'react'
import "./Hero.css"
import dark_arrow from "../../assets/logo/dark-arrow.png"
import Gallery from '../Gallery/Gallery'



const Hero = ({ onButtonClick, galleryTitle="Gallery" }) => {
  return (
    <div className='hero container'>
        <div className="hero-text">
          <h2>Co-founder</h2>
          <h1>EduZolve Oy</h1>
          <p className='eduzolve-mission'>
            With increasing concern about the challenges facing West African students, 
            EduZolve Oy focuses on developing solutions aimed at improving the educational 
            system and enhancing student performance in West Africa. The company's 
            initiatives leverage technology to provide scalable and user-friendly 
            educational tools
          </p>
          <a href="https://www.uef.fi/en/article/from-west-africa-to-finland-for-higher-education-and-entrepreneurship-peter-and-oluseguns" target='_blank'>
            <button className='btn'>Read more<img src={dark_arrow} alt="" /> </button>
          </a>
          <button onClick={onButtonClick} className='btn more-gallery'>{galleryTitle}</button>
          {/* <Gallery/> */}
        </div>
    </div>
  )
}

export default Hero



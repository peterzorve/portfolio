// https://www.youtube.com/watch?v=WbV3zRgpw_E&t=6960s
import React, { useState }  from 'react'
import Title from '../Title/Title'
import AboutMe from './AboutMe'



const AboutMeScreen = () => {
  return (
    <div>

        <div className="container">
            
            <Title subTitle="" title="About Me"/>
            <AboutMe/>  
      </div>
    </div>

  )
}

export default AboutMeScreen


// https://www.youtube.com/watch?v=WbV3zRgpw_E&t=6960s
import React, { useState }  from 'react'
// import "./Publications.css"
import Title from '../Title/Title'
import Resume from './Resume'


const ResumeScreen = () => {
  return (
    <div>

      <div className="container">
        <Title subTitle="" title="Resume"/>
        <Resume/> 
      </div>
    </div>
  )
}

export default ResumeScreen
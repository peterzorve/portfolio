// https://www.youtube.com/watch?v=WbV3zRgpw_E&t=6960s
import React, { useState }  from 'react'
import Title from '../Title/Title'
import Contact from './Contact'



const ContactScreen = () => {
  return (
    <div>
      <div className="container">
        <Title subTitle="" title="Contact Information"/>
        <Contact/>  
      </div>
    </div>

  )
}

export default ContactScreen
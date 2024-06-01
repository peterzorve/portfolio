// https://www.youtube.com/watch?v=WbV3zRgpw_E&t=6960s
import React, { useState }  from 'react'
import Title from '../Title/Title'
import Projects1 from './Projects1'
import Projects2 from './Projects2'
import Projects3 from './Projects3'
import Projects4 from './Projects4'




const ProjectScreen = () => {
  return (
    <div>
      <div className="container">
        <Title title="Projects"/>
         
        <Title subTitle="Deep Learning Projects"/>
        <Projects2/>  
        <Title subTitle="Machine Learning Projects"/>
        <Projects3/> 
        {/* <Title subTitle="" title="React Native Projects"/>
        <Projects1/>  */}
        <Title subTitle="Other Types of Projects"/>
        <Projects4/> 

      </div>
    </div>

  )
}

export default ProjectScreen
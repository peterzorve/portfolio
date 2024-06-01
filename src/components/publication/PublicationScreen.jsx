// https://www.youtube.com/watch?v=WbV3zRgpw_E&t=6960s
import React, { useState }  from 'react'
// import "./Publications.css"
import Title from '../Title/Title'
import Publications1 from './Publications1'
import Publications2 from './Publications2'
import Publications3 from './Publications3'
import Publications4 from './Publications4'
import Publications5 from './Publications5'


const PublicationScreen = () => {
  const [playState, setPlayState] = useState(false)
  return (
    <div>

      <div className="container">
        <Title subTitle="" title="Publications"/>
        <Title subTitle="Scientific Publications" title=""/>
        <Publications1/>
        <Title subTitle="Dissertations & Theses" title=""/>
        <Publications2/>
        <Title subTitle="Co-supervised Masters' Thesis" title=""/>
        <Publications3/>
        <Title subTitle="Other Research I Contributed to" title=""/>
        <Publications4/>
        {/* <Publications5/> */}
        {/* <Title subTitle="Scientific" title=""/> */}

  
      </div>

    </div>

  )
}

export default PublicationScreen
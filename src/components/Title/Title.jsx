import React from 'react'
import "./Title.css"

const Title = ({subTitle, title}) => {
  return (
    <div className='title'>
        {title && (  <h2>{title}</h2>)}
        {subTitle && (<p>{subTitle}</p>)} 
    </div>
  )
}

export default Title



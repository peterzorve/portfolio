import React from 'react'
import "./AboutMe.css"
// import img_1 from "../../assets/img/about-me.png"
import img_1 from "../../assets/logo/logo-4.png"

const  AboutMe = () => {
    return (
      <div className="about">
            <div className="about-img">
                <img src={img_1} alt="" />
            </div>

            <div className="about-content">
                <h2>Dr. Peter Zorve</h2>
                <p className="">
                    I have over twelve years of experience in academia as a teacher, data scientist, and researcher.
                    While I thrived in teaching and research, I became increasingly concerned about my country's 
                    education system. In 2022, I co-founded EduZolve Oy <a href="https://www.eduzolve.com/" target='_blank'>(https://www.eduzolve.com)</a> with Olusegun Akinyemi. Driven by a desire 
                    to give back to the community, I envisioned EduZolve Oy as a solution to the educational 
                    challenges facing West African students. The company is well-positioned to make a positive impact.
                </p>
            </div>
  
      </div>
    );
  }

export default AboutMe
  
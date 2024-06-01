import React from 'react'
import "./Resume.css"

// import resume_pdf from "../../assets/data/mama.pdf"
import resume_pdf from "../../assets/resume/resume.pdf"

const  Resume = () => {
    return (
        <div className="resume-container">  {/* Add a descriptive class */}
            {/* <p className="resume-title">Resume</p>  */}
            <iframe src={resume_pdf} className="resume-iframe"></iframe>
      </div>
    );
  }

export default Resume
  
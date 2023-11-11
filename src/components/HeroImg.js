import "./HeroImgStyle.css";
import { Link } from 'react-router-dom';
import React from 'react';
import IntroImage from '../assets/intro-bg.jpg';

//pdf file inside the public folder
const resume_pdf_URL = '/SambitNayak_Resume.pdf';

const HeroImg = () => {

  const downloadFileAtURL = (url)=>{
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href=url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }

  return (
    <div className="hero">
      <div className='mask'>
        <img className='into-img' src={IntroImage} alt="Introimg" />
      </div>
      <div className='content content-div'>
        <p>HI, I'M A SOFTWARE ENGINEER</p>
        <h2>FullStack Developer</h2>
        <div>
          <Link to='/projects' className='btn'>
            Projects
          </Link>
          <Link to="/contact" className='btn btn-light'>
            Contact
          </Link>
        </div>
      </div>
      <div className="resume-section resume-div">
          <p>Click the button below to download my updated resume</p>
            <button className="butn resume-btn" onClick={()=>{downloadFileAtURL(resume_pdf_URL)}}>
                Download Resume <i className="fa fa-download"></i>
            </button>
        </div>
    </div>
  );
}

export default HeroImg;

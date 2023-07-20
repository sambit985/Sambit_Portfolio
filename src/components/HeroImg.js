import "./HeroImgStyle.css";
import { Link } from 'react-router-dom';
import React from 'react';
import IntroImage from '../assets/intro-bg.jpg';


const HeroImg = () => {
    return (
         <div className="hero">
             <div className='mask'>
                <img className='into-img' src={IntroImage} alt="Introimg" />
            </div>
            <div className='content'>
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
          </div>
            
        )
}

export default HeroImg;
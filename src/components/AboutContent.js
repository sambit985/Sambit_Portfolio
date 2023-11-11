import "./AboutContentStyle.css";

import React from 'react';
import { Link } from 'react-router-dom';
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.jpg";

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who Am I?</h1>
                <p>I am a Software Developer with 2 yr of experience. My Role is FullStack developer and responsibility is to create Scalable, high performance and resposnsive Apps. Experience 
                    in Frontend and backend development. 
                </p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>
            <div className="right">
                <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="img" alt="true" />
                    </div>
                    <div className="img-stack bottom">
                    <img src={React2} className="img" alt="true" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutContent;
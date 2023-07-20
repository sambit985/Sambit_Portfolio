
import './FooterStyle.css';
import React from 'react';
import { FaMapMarker, FaPhone, FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          Sambit<span>Nayak</span>
        </h3>
        <p className="footer-links">
         <p className="footer-links">
          <a href="/" className="link-1">
            Home
          </a>
          <a href="/pricing">Pricing</a>
          <a href="/about">About</a>
          <a href="/skill">Skills</a>
          <a href="/contact">Contact</a>
        </p>
        </p>
        <p className="footer-company-name">SambitKumarNayak © 2023</p>
      </div>

      <div className="footer-center">
        <div>
          <FaMapMarker />
          <p>
            <span>Infocity Square, patia, Bhubaneswar</span> Odisha, India
          </p>
        </div>
        <div>
          <FaPhone />
          <p>+91-6370335275</p>
        </div>
        <div>
          <FaEnvelope />
          <p>
            <a href="sambit98530@gmail.com">sambit98530@gmail.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the Portfolio</span>
          Anyone can see all the info about me such as skills, project pricing, locations, contacts, everything.
        </p>
        <div className="footer-icons">
        <a href="https://www.facebook.com/sambit.sambit.5030?mibextid=ZbWKwL">
            <FaFacebook />
          </a>
          <a href="https://twitter.com/sambitnaya57337">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/sambit-kumar-nayak/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/sambit985">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

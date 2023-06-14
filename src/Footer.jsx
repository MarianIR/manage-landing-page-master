import React from "react";

import logo from "/src/images/logo.svg";
import facebookIcon from "/src/images/icon-facebook.svg";
import youtubeIcon from "/src/images/icon-youtube.svg";
import twitterIcon from "/src/images/icon-twitter.svg";
import pinterestIcon from "/src/images/icon-pinterest.svg";
import instagramIcon from "/src/images/icon-instagram.svg";
const Footer = () => {
  return (
    <section className="footer-section">
      {/* manage container */}
      <div className="manage-container">
        <img src={logo} alt="This is the logo" className="logo" />
        <div className="social-media-container">
          <a href="#" className="social-media-link">
            <img
              src={facebookIcon}
              alt="facebook icon"
              className="social-media-icon"
            />
          </a>
          <a href="#" className="social-media-link">
            <img
              src={youtubeIcon}
              alt="youtube icon"
              className="social-media-icon"
            />
          </a>
          <a href="#" className="social-media-link">
            <img
              src={twitterIcon}
              alt="twitter icon"
              className="social-media-icon"
            />
          </a>
          <a href="#" className="social-media-link">
            <img
              src={pinterestIcon}
              alt="pinterest icon"
              className="social-media-icon"
            />
          </a>
          <a href="#" className="social-media-link">
            <img
              src={instagramIcon}
              alt="instagram icon"
              className="social-media-icon"
            />
          </a>
        </div>
      </div>
      {/* manage container */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/* informations container */}
      <div className="informations-container">
        {/*  */}
        <div className="information-box">
          <a href="#" className="info">
            Home
          </a>
          <a href="#" className="info">
            Pricing
          </a>
          <a href="#" className="info">
            Products
          </a>
          <a href="#" className="info">
            About us
          </a>
        </div>
        {/*  */}
        {/*  */}
        <div className="information-box">
          <a href="#" className="info">
            Careers
          </a>
          <a href="#" className="info">
            Community
          </a>
          <a href="#" className="info">
            Privacy Policy
          </a>
        </div>
        {/*  */}
      </div>
      {/* informations container */}
      {/*  */}
      {/*  */}
      {/* get updates in your inbox */}
      <div className="get-updates">
        <input type="text" placeholder="Updates in your inbox..." />
        <button type="submit" className="go-btn">
          Go
        </button>
      </div>
    </section>
  );
};

export default Footer;

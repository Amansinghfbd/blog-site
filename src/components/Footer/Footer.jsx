import React from "react";
import "./Footer.css";
import logo from "../../assets/logo-polygon.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Footer = () => {
  
  return (
    <footer className="footer-container">
      <div className="footer-container__div1">
        <div className="footer-container__div1__logo">
          <div className="footer-container__div1__logo--logogroup">
            <LazyLoadImage src={logo} alt="Polygon" className="footer-container__div1__logo--polygon1" />
            <div className="footer-container__div1__logo--text3">TOTC</div>
          </div>
        </div>
        <div className="footer-container__line"></div>
        <div className="footer-container__text4">Virtual Class for Zoom</div>
      </div>
      <div className="footer-container__div2">
        Subscribe to get our Newsletter
      </div>
      <div className="footer-container__div3">
        <form className="footer-container__div3--form">
          <input
            type="text"
            placeholder="Your Email"
            className="footer-container__div3__form--inputemail"
          />
          <button className="footer-container__div3--subbtn">Subscribe</button>
        </form>
      </div>
      <div className="footer-container__div4">
        <div className="footer-container__div4--text-5">Careers</div>
        <div className="footer-container__div4--line-1"></div>
        <div className="footer-container__div4--text-5">Privacy Policy</div>
        <div className="footer-container__div4--line-1"></div>
        <div className="footer-container__div4--text-5">Terms & Conditions</div>
      </div>
      <div className="footer-container__div5">
        © 2021 Class Technologies Inc.
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import "./Navbar.css";
import abc1 from "../../assets/logo-image.png";
import logo from "../../assets/logo-polygon.svg";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";

//Click on Blog button in Navbar for Blog Page

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__navbar1">
        <div className="navbar__logo">
          <div className="navbar__logo--logogroup">
            <LazyLoadImage
              src={logo}
              alt="Polygon"
              className="navbar__logo__logogroup--polygon"
            />
            <div className="navbar__logo__logogroup--text">TOTC</div>
          </div>
        </div>
      </div>
      <div className="navbar__navbar2">
        <Link to="/" className="navbar__navbar2--link text-1">
          Home
        </Link>
        <Link to="/" className="navbar__navbar2--link text-1">
          Courses
        </Link>
        <Link to="/" className="navbar__navbar2--link text-1">
          Careers
        </Link>
        <Link to="/blog" className="navbar__navbar2--link text-1">
          Blog
        </Link>
        <Link to="/" className="navbar__navbar2--link text-1">
          About Us
        </Link>
        <div className="navbar__navbar2--image">
          <LazyLoadImage
            src={abc1}
            alt="person"
            className="navbar__navbar2__image--img"
          />
          <div className="navbar__navbar2__image--text-2">Lina</div>
          <div>
            <FaChevronDown className="navbar__navbar2__image--downicon" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import Logo from "../../../assets/images/svg-icons/clother-logo_white.svg";
import PhoneIcon from "../../../assets/images/svg-icons/phone.svg";
import EmailIcon from "../../../assets/images/svg-icons/email.svg";
import FacebookIcon from "../../../assets/images/svg-icons/facebook.svg";
import LinkedinIcon from '../../../assets/images/svg-icons/linkedinIcon.svg'
import InstagramIcon from "../../../assets/images/svg-icons/instagram.svg";
import { Link } from "react-router-dom";

function Footer() {
  const token = localStorage.getItem("customer_token");
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={Logo} alt="logo" />
          {!token && <Link to="/login">Log in</Link>}
        </div>
        <div className="footer-list">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            {/* <li>
              <Link to="/">Outfits</Link>
            </li> */}
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
          <div className="footer-contact">
            <div>
              <img src={PhoneIcon} alt="phone" />
              <p>+994508537021</p>
            </div>
            <div>
              <img src={EmailIcon} alt="phone" />
              <p>clother.lab@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="footer-follow">
          <p>Follow us</p>
          <div className="footer-follow_container">
            <a href="https://www.facebook.com/Clother-110882198253202" target="_blank" rel="noreferrer" className="circle-social-icons">
              <img src={FacebookIcon} alt="icon" />
            </a>
            <a href="https://www.linkedin.com/company/clother-org/" target="_blank" rel="noreferrer" className="circle-social-icons">
              <img src={LinkedinIcon} alt="icon" />
            </a>
            <a href="https://www.instagram.com/clother.az/" target="_blank" rel="noreferrer" className="circle-social-icons">
              <img src={InstagramIcon} alt="icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-rights">
        <div className="footer-right-container">
          <p>2022 Clother Azerbaijan</p>
          <p>© All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

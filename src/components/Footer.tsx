import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container__footer">
        <div className="box__footer">
          <div className="logo">
            <img src="Images/logo-magtimus.png" alt="" />
          </div>
          <div className="terms">
            Our company is dedicated to providing top-quality software solutions
            for businesses of all sizes. We have a team of experienced and
            skilled developers who are proficient in a wide range of programming
            languages and technologies.
          </div>
        </div>

        <div className="box__footer">
          <h2>Solutions</h2>
          <a href="#">App development</a>
          <a href="#">App Marketing</a>
          <a href="#">IOS development</a>
          <a href="#">Android development</a>
        </div>

        <div className="box__footer">
          <h2>Company</h2>
          <a href="#">About</a>
          <a href="#">Proyects</a>
          <a href="#">Process</a>
          <a href="#">Services</a>
        </div>

        <div className="box__footer">
          <h2>Social Media</h2>
          <a href="#">
            <i className="fab fa-facebook-square"></i> Facebook
          </a>
          <a href="#">
            <i className="fab fa-twitter-square"></i> Twitter
          </a>
          <a href="#">
            <i className="fab fa-linkedin"></i> Linkedin
          </a>
          <a href="#">
            <i className="fab fa-instagram-square"></i> Instagram
          </a>
        </div>
      </div>

      <div className="box__copyright">
        <p>
          © 2023 All rights reserved <b>SOFTVER S.R.L</b>
        </p>
      </div>
    </div>
  );
};

export default Footer;

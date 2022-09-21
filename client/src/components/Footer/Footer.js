import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <div className="footer-logo"></div>
      <ul class="footer-pages">
        <li href="/">Home</li>
        <li href="/">Headphones</li>
        <li href="/">Speakers</li>
        <li href="/">Earphones</li>
      </ul>
      <div className="footer-details">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </div>
      <div className="footer-social"></div>
      <div className="footer-copyright">
        Copyright 2022. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;

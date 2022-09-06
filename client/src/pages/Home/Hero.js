import React from "react";
import "./Hero.css";
import Image from "../../assets/home/desktop/image-hero.jpg";

const Hero = () => {
  return (
    <div className="hero bg-dark" style={{ backgroundImage: `url(${Image})` }}>
      <div className="hero-content">
        <p>NEW PRODUCT</p>
        <h1>XX99 Mark II HeadphoneS</h1>
        <h3>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </h3>
        <button type="button" class="btn hero-button">
          See Product
        </button>
      </div>
    </div>
  );
};

export default Hero;

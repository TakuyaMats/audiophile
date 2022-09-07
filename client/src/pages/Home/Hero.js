import React, { useEffect, useState } from "react";
import "./Hero.css";
import Image from "../../assets/home/desktop/image-hero.jpg";
import TabletImage from "../../assets/home/tablet/image-header.jpg";
import MobileImage from "../../assets/home/mobile/image-header.jpg";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 992;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);

  let backgroundImage;

  if (isMobile) {
    backgroundImage = TabletImage;
  } else {
    backgroundImage = Image;
  }

  return (
    <div
      className="hero bg-dark"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
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

import React, { useEffect, useState } from "react";
import "./Hero.css";
import Image from "../../assets/home/desktop/image-hero.jpg";
import TabletImage from "../../assets/home/tablet/image-header.jpg";
import MobileImage from "../../assets/home/mobile/image-header.jpg";

const Hero = () => {
  const [isTablet, setIsTablet] = useState(
    window.innerWidth < 992 && window.innerWidth > 420
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth < 420);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const istablet = window.innerWidth < 992 && window.innerWidth > 420;
        const ismobile = window.innerWidth < 420;
        if (ismobile !== isMobile) setIsMobile(ismobile);
        if (istablet !== isTablet) setIsTablet(istablet);
      },
      false
    );
  }, [isMobile]);

  let backgroundImage;

  if (isMobile) {
    backgroundImage = MobileImage;
  } else if (isTablet) {
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

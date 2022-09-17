import { React, useState, useEffect } from "react";
import DesktopAboutImage from "../../assets/shared/desktop/image-best-gear.jpg";
import TabletAboutImage from "../../assets/shared/tablet/image-best-gear.jpg";
import MobileAboutImage from "../../assets/shared/mobile/image-best-gear.jpg";
import "./About.css";

const About = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 992);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth < 992 && window.innerWidth > 420
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth < 420);

  const [aboutImage, setHomeProductImage] = useState(DesktopAboutImage);
  const handleSize = () => {
    const istablet = window.innerWidth > 420 && window.innerWidth < 992;
    const ismobile = window.innerWidth < 420;
    const isdesktop = window.innerWidth > 992;
    if (ismobile) {
      setIsMobile(ismobile);
      setHomeProductImage(MobileAboutImage);
    } else if (istablet) {
      setIsTablet(istablet);
      setHomeProductImage(TabletAboutImage);
    } else if (isdesktop) {
      setIsDesktop(isdesktop);
      setHomeProductImage(DesktopAboutImage);
    }
  };

  useEffect(() => {
    window.addEventListener("load", handleSize, false);
    window.addEventListener("resize", handleSize, false);
  }, []);

  return (
    <div className="about">
      <div className="about-description">
        <h2>
          Bringing you the <span className="text-orange">best</span> audio gear
        </h2>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="about-image">
        <img src={aboutImage} />
      </div>
    </div>
  );
};

export default About;

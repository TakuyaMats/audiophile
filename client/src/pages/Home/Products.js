import { React, useState, useEffect } from "react";
import "./Products.css";
import DesktopHomeProductImage from "../../assets/home/desktop/image-earphones-yx1.jpg";
import DesktopHomeProduct1 from "../../assets/home/desktop/image-speaker-zx9.png";
import DesktopHomeProduct2 from "../../assets/home/desktop/image-speaker-zx7.jpg";
import TabletHomeProductImage from "../../assets/home/tablet/image-earphones-yx1.jpg";
import TabletHomeProduct1 from "../../assets/home/tablet/image-speaker-zx9.png";
import TabletHomeProduct2 from "../../assets/home/tablet/image-speaker-zx7.jpg";
import MobileHomeProductImage from "../../assets/home/mobile/image-earphones-yx1.jpg";
import MobileHomeProduct1 from "../../assets/home/mobile/image-speaker-zx9.png";
import MobileHomeProduct2 from "../../assets/home/mobile/image-speaker-zx7.jpg";

const Products = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 992);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth < 992 && window.innerWidth > 420
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth < 420);

  const [homeProductImage, setHomeProductImage] = useState(
    DesktopHomeProductImage
  );
  const [homeProduct1, setHomeProduct1] = useState(DesktopHomeProduct1);
  const [homeProduct2, setHomeProduct2] = useState(DesktopHomeProduct2);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const istablet = window.innerWidth > 420 && window.innerWidth < 992;
        const ismobile = window.innerWidth < 420;
        const isdesktop = window.innerWidth > 992;
        if (ismobile) {
          setIsMobile(ismobile);
          setHomeProductImage(MobileHomeProductImage);
          setHomeProduct1(MobileHomeProduct1);
          setHomeProduct2(MobileHomeProduct2);
        } else if (istablet) {
          setIsTablet(istablet);
          setHomeProductImage(TabletHomeProductImage);
          setHomeProduct1(TabletHomeProduct1);
          setHomeProduct2(TabletHomeProduct2);
        } else if (isdesktop) {
          setIsDesktop(isdesktop);
          setHomeProductImage(DesktopHomeProductImage);
          setHomeProduct1(DesktopHomeProduct1);
          setHomeProduct2(DesktopHomeProduct2);
        }
      },
      false
    );
  }, []);

  // let backgroundImage;

  // if (isMobile) {
  //   backgroundImage = MobileImage;
  // } else if (isTablet) {
  //   backgroundImage = TabletImage;
  // } else {
  //   backgroundImage = Image;
  // }

  return (
    <div className="home-products">
      <div className="home-product-1">
        <div className="home-product-1-image">
          <img src={homeProduct1} />
        </div>

        <div className="home-product-1-details">
          <h1>ZX9 SPEAKER</h1>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button href="#">SEE PRODUCT</button>
        </div>
      </div>
      <div className="home-product-2">
        <div className="home-product-2-image">
          <img src={homeProduct2} />
        </div>
        <div className="home-product-2-details">
          <h2>ZX7 SPEAKER</h2>
          <button href="#">SEE PRODUCT</button>
        </div>
      </div>
      <div className="home-product-image">
        <img src={homeProductImage} />
      </div>
      <div className="home-product-3">
        <div className="home-product-3-details">
          <h2>YX1 EARPHONES</h2>
          <button href="#">SEE PRODUCT</button>
        </div>
      </div>
    </div>
  );
};

export default Products;

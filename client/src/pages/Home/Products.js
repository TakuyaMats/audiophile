import React from "react";
import "./Products.css";
import HomeProductImage from "../../assets/home/desktop/image-earphones-yx1.jpg";
import HomeProduct1 from "../../assets/home/desktop/image-speaker-zx9.png";
import HomeProduct2 from "../../assets/home/desktop/image-speaker-zx7.jpg";

const Products = () => {
  return (
    <div className="home-products">
      <div className="home-product-1">
        <div className="home-product-1-image">
          <img src={HomeProduct1} />
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
          <img src={HomeProduct2} />
        </div>
        <div className="home-product-2-details">
          <h2>ZX7 SPEAKER</h2>
          <button href="#">SEE PRODUCT</button>
        </div>
      </div>
      <div className="home-product-image">
        <img src={HomeProductImage} />
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

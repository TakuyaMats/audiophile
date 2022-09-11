import React from "react";
import Navbar from "../../components/Navbar/Navbar";
// import Image from "../assets/product-xx59-headphones/desktop/image-gallery-1.jpg";
import Hero from "./Hero.js";
import Categories from "./Categories.js";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;

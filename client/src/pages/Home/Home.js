import React from "react";
import Navbar from "../../components/Navbar/Navbar";
// import Image from "../assets/product-xx59-headphones/desktop/image-gallery-1.jpg";
import Hero from "./Hero.js";
import Categories from "./Categories.js";
import Products from "./Products";
import About from "./About";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <Products />
      <About />
      <Footer />
    </div>
  );
};

export default Home;

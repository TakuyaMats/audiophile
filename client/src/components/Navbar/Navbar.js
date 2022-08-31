import React from "react";
import NavLogo from "../../assets/shared/desktop/logo.svg";
import IconCart from "../../assets/shared/desktop/icon-cart.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-background">
      <div className="navbar-options">
        <div className="d-flex justify-content-center align-items-center">
          <a href="/">
            <img src={NavLogo} class="img-fluid" alt="Responsive image" />
          </a>
        </div>

        <ul className="navbar-pages">
          <a href="/">Home</a>
          <a href="/">Headphones</a>
          <a href="/">Speakers</a>
          <a href="/">Earphones</a>
        </ul>
        <div className="d-flex justify-content-center align-items-center">
          <a href="/">
            <img src={IconCart}></img>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

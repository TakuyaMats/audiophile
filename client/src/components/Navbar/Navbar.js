import React from "react";
import NavLogo from "../../assets/shared/desktop/logo.svg";
import IconCart from "../../assets/shared/desktop/icon-cart.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-background">
      <div className="navbar-options">
        <div className="d-flex justify-content-center align-items-center">
          <img src={NavLogo} class="img-fluid" alt="Responsive image" />
        </div>

        <ul className="navbar-pages">
          <a>Home</a>
          <a>Headphones</a>
          <a>Speakers</a>
          <a>Earphones</a>
        </ul>
        <div className="d-flex justify-content-center align-items-center">
          <img src={IconCart}></img>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import NavLogo from "../../assets/shared/desktop/logo.svg";
import IconCart from "../../assets/shared/desktop/icon-cart.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
        <div className="navbar-options">
          <a className="navbar-logo" href="/">
            <img src={NavLogo} class="img-fluid" alt="Responsive image" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse bg-dark " id="navbarCollapse">
            <ul class="navbar-pages">
              <li href="/">Home</li>
              <li href="/">Headphones</li>
              <li href="/">Speakers</li>
              <li href="/">Earphones</li>
            </ul>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <a href="/">
              <img src={IconCart}></img>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

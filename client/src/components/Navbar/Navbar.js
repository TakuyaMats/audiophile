import React from "react";
import NavLogo from "../../assets/shared/desktop/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-background">
      <div className="navbar-options">
        <div className="navbar-icon">
          <img href={NavLogo} class="img-fluid" alt="Responsive image" />
        </div>

        <ul className="navbar-pages">
          <a>Home</a>
          <a>Headphones</a>
          <a>Speakers</a>
          <a>Earphones</a>
        </ul>
        <div className="navbar-cart">
          <img href="../assets/shared/desktop/icon-cart.svg"></img>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

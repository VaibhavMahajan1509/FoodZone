import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo1} alt="" className="logo" />
      </Link>

      {/* Hamburger Menu for Mobile */}
      <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        ☰
      </div>

      <ul className={`navbar-menu ${mobileMenuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>
          home
        </Link>
        <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>
          menu
        </a>
        <a href="#app-download" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>
          mobile-app
        </a>
        <a href="#footer" onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>
          contact us
        </a>
      </ul>

      <div className="navbar-right">
        <input className="search-input" type="search" placeholder="Search Here" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          {getTotalCartAmount() > 0 && <div className="dot"></div>}
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;


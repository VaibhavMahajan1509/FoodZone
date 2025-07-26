import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <nav id="home" className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-4">
        {/* Logo */}
        <Link to="/" onClick={() => setMenu("home")}>
          <img
            src={assets.logo1}
            alt="FoodZone Logo"
            className="w-24 sm:w-32 h-auto transition-all duration-300"
          />
        </Link>

        {/* Right Section: Cart and Hamburger for Mobile/Tablet */}
        <div className="flex items-center gap-4">
          {/* Cart (Visible on all screen sizes) */}
          <div className="relative">
            <Link to="/cart" onClick={() => setMobileMenuOpen(false)}>
              <img src={assets.basket_icon} alt="Cart" className="w-6 h-6" />
              {getTotalCartAmount() > 0 && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border border-white" />
              )}
            </Link>
          </div>

          {/* Hamburger (Visible on mobile/tablet) */}
          <button
            onClick={toggleMobileMenu}
            className="text-3xl md:hidden"
            aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Nav Links */}
        <ul
          className={`${
            mobileMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center gap-4 md:gap-6 absolute md:static top-[72px] left-0 w-full md:w-auto bg-white md:bg-transparent px-6 md:px-0 py-6 md:py-0 shadow-md md:shadow-none transition-all z-40`}
        >
          {[
            { label: "Home", href: "/", id: "home", type: "link" },
            { label: "Menu", href: "#explore-menu", id: "menu", type: "anchor" },
            { label: "Mobile App", href: "#app-download", id: "mobile-app", type: "anchor" },
            { label: "Contact Us", href: "#footer", id: "contact-us", type: "anchor" },
          ].map((item) => (
            <li key={item.id}>
              {item.type === "link" ? (
                <Link
                  to={item.href}
                  onClick={() => {
                    setMenu(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`hover:text-red-500 transition-colors ${
                    menu === item.id ? "border-b-2 border-red-500 pb-1" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.href}
                  onClick={() => {
                    setMenu(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`hover:text-red-500 transition-colors ${
                    menu === item.id ? "border-b-2 border-red-500 pb-1" : ""
                  }`}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Right Section (Desktop: Search and Sign In) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Search */}
          <input
            type="search"
            placeholder="Search Here"
            aria-label="Search"
            className="border border-red-500 rounded-full px-3 py-1.5 text-sm w-40 focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          {/* Sign In */}
          <button
            onClick={() => setShowLogin(true)}
            className="border border-red-500 text-[#49557e] text-sm font-medium rounded-full px-4 py-1.5 hover:bg-red-500 hover:text-white transition"
          >
            Sign In
          </button>
        </div>
      </div>

      {/* Mobile Bottom Search/Login */}
      {mobileMenuOpen && (
        <div className="flex flex-col gap-4 px-6 pb-6 md:hidden">
          <input
            type="search"
            placeholder="Search Here"
            className="border border-red-500 rounded-full px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            onClick={() => {
              setShowLogin(true);
              setMobileMenuOpen(false);
            }}
            className="border border-red-500 text-[#49557e] text-sm font-medium rounded-full px-4 py-2 hover:bg-red-500 hover:text-white transition"
          >
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;




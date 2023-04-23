import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import { NavLinksData } from "../../data/data";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [scroll, setScroll] = useState(false);
  const handleNavbar = () => {
    setNavbar(!navbar);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`w-full fixed left-0 right-0 top-0 z-30 ${
        scroll ? "backdrop-blur-md bg-primaryColor/60" : ""
      }`}
    >
      <nav className="flex justify-between items-center max-w-screen-xl mx-auto px-4 md:px-8 py-2">
        <div className="z-30">
          <img src={Logo} className="w-14 h-14" alt="eslam saadat" />
        </div>
        <ul className="hidden md:flex items-center space-x-8">
          {NavLinksData.map((item) => (
            <NavLinks item={item} key={item.id} handleNavbar={handleNavbar} />
          ))}
        </ul>
        {/* Hamburger icon */}
        <button
          className="text-white flex md:hidden z-30"
          onClick={handleNavbar}
        >
          {navbar ? <FaTimes size={30} /> : <FaBars size={30} />}
        </button>
        {/* Mobile menu */}
        <div
          className={`flex flex-col items-center justify-center md:hidden fixed top-0 w-full h-screen z-20 p-6 duration-500 bg-slate-900 ${
            navbar ? "left-0" : "-left-full"
          }`}
        >
          <ul className="flex flex-col justify-center items-center space-y-8">
            {NavLinksData.map((item) => (
              <NavLinks item={item} key={item.id} handleNavbar={handleNavbar} />
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

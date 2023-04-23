import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import { navLinksData } from "../../data/data";
import NavLinks from "./NavLinks";
import ResponsiveMenu from "./ResponsiveMenu";
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
        scroll ? "backdrop-blur-md bg-primaryColor/60" : "bg-primaryColor/60"
      }`}
    >
      <nav className="flex justify-between items-center max-w-screen-xl mx-auto px-4 md:px-8 py-2">
        <div className="z-30">
          <img src={Logo} className="w-14 h-14" alt="eslam saadat" />
        </div>
        <ul className="hidden md:flex items-center space-x-8">
          {navLinksData.map((item) => (
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
        <ResponsiveMenu navLinksData={navLinksData} handleNavbar={handleNavbar} navbar={navbar} scroll={scroll}/>
      </nav>
    </header>
  );
};

export default Navbar;

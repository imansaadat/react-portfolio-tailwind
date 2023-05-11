import React from 'react'
import NavLinks from './NavLinks'
const ResponsiveMenu = ({navLinksData,navbar,handleNavbar}) => {
  return (
    <div
    className={`flex flex-col items-center justify-center md:hidden fixed top-0 w-full h-screen z-20 p-6 duration-500 bg-primaryColor ${
      navbar ? "left-0" : "-left-full"
    }`}
  >
    <ul className="flex flex-col justify-center items-center space-y-8">
      {navLinksData.map((item) => (
        <NavLinks item={item} key={item.id} handleNavbar={handleNavbar} />
      ))}
    </ul>
  </div>
  )
}

export default ResponsiveMenu
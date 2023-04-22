import React from "react";
import { Link } from 'react-scroll';
const NavLinks = ({item:{title,path,handleNavbar}}) => {
  return (
    <li className="text-textColor text-lg font-medium capitalize cursor-pointer hover:text-pinkColor relative duration-300 after:duration-300 after:content-[''] after:absolute after:bottom-0 after:block after:w-0 after:h-[1px] after:left-0 after:bg-pinkColor hover:after:w-full">
      <Link onClick={handleNavbar} to={path} smooth={true} duration={500}>
        {title}
      </Link>
    </li>
  );
};

export default NavLinks;

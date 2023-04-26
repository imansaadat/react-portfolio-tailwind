import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Media = () => {
  return (
    <div className="hidden fixed h-full left-0 lg:flex items-center z-20">
      <ul>
        <li>
          <a
            href="/"
            className="w-40 h-14 px-5 text-white -ml-[92px] flex items-center justify-between bg-blueColor duration-300 hover:ml-0"
          >
            <span className="text-lg font-medium">linkedin</span>
            <FaLinkedin size={30} />
          </a>
        </li>
        <li>
          <a
            href="/"
            className="w-40 h-14 px-5 text-white -ml-[92px] flex items-center justify-between bg-darkColor duration-300 hover:ml-0"
          >
            <span className="text-lg font-medium">Github</span>
            <FaGithub size={30} />
          </a>
        </li>
        <li>
          <a
            href="/"
            className="w-40 h-14 px-5 text-white -ml-[92px] flex items-center justify-between bg-greenColor duration-300 hover:ml-0"
          >
            <span className="text-lg font-medium">Email</span>
            <HiOutlineMail size={30} />
          </a>
        </li>
        <li>
          <a
            href="/"
            className="w-40 h-14 px-5 text-white -ml-[92px] flex items-center justify-between bg-grayColor duration-300 hover:ml-0"
          >
            <span className="text-lg font-medium">Resume</span>
            <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Media;

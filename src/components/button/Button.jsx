import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
const Button = ({ text }) => {
  return (
    <>
      <button className="btn">
        {text}<HiArrowNarrowRight className="ml-1" />
      </button>
    </>
  );
};

export default Button;

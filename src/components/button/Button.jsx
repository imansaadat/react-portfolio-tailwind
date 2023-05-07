import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
const Button = ({ text,showMoreItems }) => {
  return (
    <>
      <button className="btn group" onClick={showMoreItems}>
        {text}
        <span className="ml-1 text-xl duration-300 group-hover:translate-x-1">
          <HiArrowNarrowRight />
        </span>
      </button>
    </>
  );
};

export default Button;

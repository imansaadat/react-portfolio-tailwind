import React from "react";

const Title = ({ title, desc, style }) => {
  return (
    <div
      className={`text-3xl md:text-4xl font-bold tracking-wide capitalize text-whiteColor mb-8 ${style}`}
    >
      <h2 className="border-b-4 border-b-pinkColor inline-block">{title}</h2>
      {desc && <p>{desc}</p>}
    </div>
  );
};

export default Title;

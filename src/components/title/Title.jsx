import React from "react";

const Title = ({ title, subTitle, styles }) => {
  return (
    <div
      className={`font-bold tracking-wide capitalize text-whiteColor mb-8 ${styles}`}
    >
      <h2 className="text-3xl md:text-4xl border-b-4 border-b-pinkColor inline-block">
        {title}
      </h2>
      {subTitle && (
        <h4 className="text-textColor mt-2 text-base">{subTitle}</h4>
      )}
    </div>
  );
};

export default Title;

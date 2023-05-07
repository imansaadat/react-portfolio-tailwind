import React, { useState } from "react";
// Icons
import { HiArrowNarrowRight } from "react-icons/hi";
// Components
import Title from "../title/Title";
import WorkItems from "./WorkItems";
import Button from "../button/Button";

const Work = ({ workData }) => {
  const [visible, setVisible] = useState(6);

  const showMoreItems = () => {
    setVisible((preValue) => preValue + 6);
  };
  return (
    <section className="w-full">
      <div>
        {/* Title */}
        <Title title="work" subTitle="Check out some of my projects" />
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          {workData.slice(0, visible).map((item, index) => (
            <WorkItems key={index} item={item} />
          ))}
        </div>
        {/* Btn */}
        { visible < workData.length && (
           <Button text='view more' showMoreItems={showMoreItems} />
        )}
      </div>
    </section>
  );
};

export default Work;

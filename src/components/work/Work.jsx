import React from "react";
import Title from "../title/Title";
import WorkItems from "./WorkItems";

const Work = ({ workData }) => {
  return (
    <section className="w-full">
      {/* Title */}
      <Title title="work" subTitle="Check out some of my projects" />
      <div className="grid md:grid-cols-3 gap-8">
        {workData.map((item, index) => (
          <WorkItems key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Work;

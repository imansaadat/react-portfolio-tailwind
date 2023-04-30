import React from "react";
import Title from "../title/Title";
import { SkillsItems } from "./SkillsItems";
const Skills = ({ skillData }) => {
  return (
    <section className="w-full py-28">
      <div>
        <Title
          title="skills"
          subTitle="These are the technologies I've worked with"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillData.map((item, index) => (
            <SkillsItems key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

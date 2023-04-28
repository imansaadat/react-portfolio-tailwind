import React from "react";
import Title from "../title/Title";
const About = () => {
  return (
    <section className="w-full">
      <div>
        {/* Title */}
        <Title title="about" style="text-center" />
        <div className="grid md:grid-cols-2 gap-6 text-center md:text-left">
          <div className="order-1 md:order-none">
            {/* Left Text */}
            <p className="text-textColor">
              I am a developer who specializes in front-end development. I have
              a strong enthusiasm for programming and continuously expanding my
              knowledge. Furthermore, I take pleasure in imparting my acquired
              knowledge with others
            </p>
          </div>
          {/* Right Text */}
          <div>
             <p className="text-whiteColor text-2xl md:text-3xl font-semibold">Hi. I'm Eslam, nice to meet you. Please take a look around.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

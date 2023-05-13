import React from "react";
import Title from "../title/Title";
import Button from "../button/Button";
const Contact = () => {
  return (
    <section name="Contact" className="py-14">
      <div className="w-full">
        <form className="w-full">
        <Title title="Contact Us"/>
          <div className="my-6">
            <input type="text" className="w-full p-3 text-lg text-whiteColor duration-200 bg-black/30 backdrop-blur-sm rounded-md border border-black/10 outline-none focus:shadow-shadowInput" placeholder="Enter your name" />
          </div>
          <div className="my-6">
            <input type="email" className="w-full p-3 text-lg text-whiteColor duration-200 bg-black/30 backdrop-blur-sm rounded-md border border-black/10 outline-none focus:shadow-shadowInput" placeholder="Enter your email" />
          </div>
          <div className="my-6">
            <textarea rows="10" className="w-full p-3 text-lg text-whiteColor duration-200 bg-black/30 backdrop-blur-sm rounded-md border border-black/10 outline-none focus:shadow-shadowInput resize-none" placeholder="Enter your message" />
          </div>
          <div className="my-6">
          <Button text="Let's Collaborate"/>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

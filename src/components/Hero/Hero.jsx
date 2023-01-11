import React from "react";
import { Link } from "react-router-dom";

const Hero = ({ classes, bg, children, heading, text, btn, btnCls }) => {
  return (
    <section
      className={`${classes} hero text-white flex-middle w-screen flex-col px-5 text-center`}
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.511),rgba(0, 0, 30, 0.5)) ,url(${bg})no-repeat center center/cover`,
      }}
    >
      <h2 className="text-7xl font-semibold mt-20">{heading}</h2>
      <p className="text-2xl pt-6 pb-4">{text}</p>
      <Link className={btnCls}>{btn}</Link>
      {children}
    </section>
  );
};

export default Hero;

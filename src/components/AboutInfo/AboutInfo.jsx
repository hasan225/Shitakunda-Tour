import React from "react";

const AboutInfo = ({ text, heading }) => {
  return (
    <div className="mb-10">
      <h2 className="Min-Title text-3xl font-semibold text-gray-700 mb-1">{heading}</h2>
      <p className="Min-Desc">{text}</p>
    </div>
  );
};

export default AboutInfo;

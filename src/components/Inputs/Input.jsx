import React from "react";

const Input = ({ type, placeholder }) => {
  return (
    <>
      <input className="placeholder-gray-700 w-full h-12 px-4 bg-gray-100 border shadow rounded" type={type} placeholder={placeholder} />
    </>
  );
};

export default Input;

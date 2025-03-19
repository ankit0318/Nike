import React from "react";

const Button = ({ label, iconURL }) => {
  return (
    <button className="bg-coral-red border font-montserrat leading-none rounded-full text-white text-lg flex justify-center items-center gap-4 px-7 py-4 ">
      {label}
      <img src={iconURL}></img>
    </button>
  );
};

export default Button;

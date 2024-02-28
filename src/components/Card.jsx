import React from "react";

export default function Card({ icon, number, title, text }) {
  return (
    <div className="flex md:mt-4 gap-4 my-4 md:px-2">
      <img src={icon} className="w-[6.23rem]" alt="icon" />
      <div>
        <h1 className="text-[2rem] text-light-gary font-bold leading-8">
          {number}
        </h1>
        <h3 className="text-black text-lg font-extrabold leading-6 my-2 link">
          {title}
        </h3>
        <p className="text-gray text-[0.9375rem] leading-[1.625rem]">{text}</p>
      </div>
    </div>
  );
}

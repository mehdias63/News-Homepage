import React from "react";

export default function News({ title, text }) {
  return (
    <div className="border-b-2 border-gray last:border-none my-4">
      <h1 className="text-xl font-extrabold leading-6 my-2 link">{title}</h1>
      <p className="text-[0.9375rem] leading-[1.625rem] mb-6 text-light-gary">
        {text}
      </p>
    </div>
  );
}

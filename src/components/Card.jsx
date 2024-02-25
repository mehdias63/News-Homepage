import React from "react";

export default function Card({icon , number , title , text}) {
  return (
    <div className="flex">
      <img src={icon}/>
      <div>
        <h1>{number}</h1>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
